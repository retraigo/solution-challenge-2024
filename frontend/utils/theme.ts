type Color4 = [number, number, number, number];

export default function generatePalette(color: string): Record<number, string> {
  const c = rgbaFromHex(color);
  const res: Record<number, string> = {};

  for (let i = 0; i < 10; ++i) {
    const s = shade(c, i * 10);
    res[500 + i * 50] = hex(s);

    const t = tint(c, i * 10);
    res[500 - i * 50] = hex(t);
  }
  return res;
}

function mix(color1: Color4, color2: Color4, percentage = 50): Color4 {
  let p = percentage / 100;
  if (p > 1) p = 1;
  else if (p < 0) p = 0;
  const w = p * 2 - 1;
  const a = color1[3] - color2[3];

  const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
  const w2 = 1 - w1;

  const r = Math.round(color1[0] * w1 + color2[0] * w2);
  const g = Math.round(color1[1] * w1 + color2[1] * w2);
  const b = Math.round(color1[2] * w1 + color2[2] * w2);
  const alpha = parseFloat((color1[3] * p + color2[3] * (1 - p)).toFixed(8));
  return [r, g, b, alpha];
}
/** Get a shade of the color */
function shade(color: Color4, weight = 50): Color4 {
  return mix([0, 0, 0, 255], color, weight);
}

/** Get a tint of the color */
function tint(color: Color4, weight = 50): Color4 {
  return mix([255, 255, 255, 255], color, weight);
}

/** Convert RGB(A) to Hex */
function hex(color: Color4) {
  return `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}${toHex(
    color[3]
  )}`;
}

function toHex(n: number): string {
  return `${(n | (1 << 8)).toString(16).slice(1)}`;
}

/** Convert Hexadecimal string to RGBA */
function rgbaFromHex(hex: string): Color4 {
  if (!/^#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?$/.test(hex)) {
    throw new TypeError(`Expected number or hex code. Got ${hex}`);
  }
  let colors = hex.slice(1).split("");
  if (colors.length === 3) {
    colors = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
  }
  const red = parseInt(`${colors[0]}${colors[1]}`, 16) || 0;
  const green = parseInt(`${colors[2]}${colors[3]}`, 16) || 0;
  const blue = parseInt(`${colors[4]}${colors[5]}`, 16) || 0;
  let alpha = 255;
  if (colors[6] && colors[7]) {
    alpha = parseInt(`${colors[6]}${colors[7]}`, 16) ?? 255;
  }
  return [red, green, blue, alpha];
}

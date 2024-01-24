import type { Config } from "tailwindcss";
import generatePalette from "./utils/theme.ts";
import { THEME_COLOR } from "./utils/constants.ts";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: generatePalette(THEME_COLOR),
      },
    },
  },
};

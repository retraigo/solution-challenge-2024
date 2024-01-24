<template>
    <div>
        <ColorScheme :placeholder="TITLE" tag="div">
            <img :src="$colorMode.preference == `dark` ? `/icon_dark.svg` : `/icon.svg`" />
        </ColorScheme>
    </div>
</template>
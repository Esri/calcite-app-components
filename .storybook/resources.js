const dirOptions = ["ltr", "rtl"];
const themeOptions = ["light", "dark"];
const positionOptions = ["start", "end"];
const scaleOptions = ["s", "m", "l"];
const appearanceOptions = ["solid", "clear", "outline"];
export const ATTRIBUTES = {
    dir: {
        values: dirOptions,
        defaultValue: dirOptions[0]
    },
    theme: {
        values: themeOptions,
        defaultValue: themeOptions[0]
    },
    scale: {
        values: scaleOptions,
        defaultValue: scaleOptions[1]
    },
    position: {
        values: positionOptions,
        defaultValue: positionOptions[0]
    },
    appearance: {
        values: appearanceOptions,
        defaultValue: appearanceOptions[0]
    }
};

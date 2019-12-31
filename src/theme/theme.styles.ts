import { createMuiTheme } from "@material-ui/core";

const green = "#65b300";

export const themeColors = {
    orange: "#ff9a01",
    red: "#f12a4e",

    blue: "#27d2f2",
    darkBlue: "#1462ef",

    main: "#353556",
    light: "#3c3c5b",
    border: "#595980",
    dark: "#242447",
    text: "#f1f1f4",

    darkGreen: "#335a00",
    green,
    online: green,
};

export const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#353556",
            light: "#595980",
            dark: "#242447",
            contrastText: "#f1f1f4",
        },
        secondary: {
            main: "#9f9f9f",
        },
        background: {},
        action: {
            hover: themeColors.orange,
        },
    },
});

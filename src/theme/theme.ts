import { createTheme } from "@mui/material/styles";
import { Exo_2 } from "next/font/google";

export const exo2 = Exo_2({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
    direction: "ltr",
    palette: {
        primary: {
            main: "#FFDB01",
            light: "#524317",
            dark: "#a07f12",
        },
        secondary: {
            main: "#263238",
            light: "#1A1A1C",
            dark: "#06F3B5",
        },
        success: {
            main: "#4CAF50",
            light: "#E6FFFA",
            dark: "#02b3a9",
            contrastText: "#ffffff",
        },
        info: {
            main: "#46ADEB",
            light: "#EBF3FE",
            dark: "#1682d4",
            contrastText: "#ffffff",
        },
        error: {
            main: "#FA896B",
            light: "#FDEDE8",
            dark: "#f3704d",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#ECC128",
            light: "#FEF5E5",
            dark: "#ae8e59",
            contrastText: "#ffffff",
        },
        grey: {
            100: "#F2F6FA",
            200: "#EAEFF4",
            300: "#DFE5EF",
            400: "#7C8FAC",
            500: "#5A6A85",
            600: "#2A3547",
        },
        background: {
            default: "var(--bg-page)",
            paper: "#1D2128",
        },
        action: {
            disabledBackground: "rgba(73,82,88,0.12)",
            hoverOpacity: 0.02,
            hover: "#f6f9fc",
        },
        divider: "#e5eaef",
    },
    typography: {
        fontFamily: exo2.style.fontFamily,
        h1: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontFamily: exo2.style.fontFamily,
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontFamily: exo2.style.fontFamily,
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontFamily: exo2.style.fontFamily,
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.3125rem",
            lineHeight: "1.6rem",
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.6rem",
        },
        h6: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.2rem",
        },
        button: {
            textTransform: "capitalize",
            fontWeight: 400,
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334rem",
        },
        body2: {
            fontSize: "0.75rem",
            letterSpacing: "0rem",
            fontWeight: 400,
            lineHeight: "1rem",
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
                    boxShadow:
                        "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "7px",
                },
            },
        },
    },
});

export default theme;
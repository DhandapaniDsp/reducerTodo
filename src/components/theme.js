import { createTheme } from "@mui/material/styles";
import "@fontsource/russo-one";
import "@fontsource/inter";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#20EEB0",
    },
    secondary: {
      main: "#ff2c2c",
    },
    background: {
      white: "#FFFFFF",
      darkBg: "#1C1C1C",
      grayTransprent: "#00001F",
      grayTransprent2: "#000014",
      gray: "#98A0AC",
      lightGray: "#E4E8EE",
      sidebarBg: "#333333",
      sidebarText: "#C1C5CB",
    },
  },

  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 48,
      fontWeight: 400,
      lineHeight: "58px",
      fontFamily: "Russo One, sans-serif",
    },
    h6: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "22px",
      fontFamily: "Russo One, sans-serif",
    },
    body1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "22px",
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "17px",
    },
  },
});

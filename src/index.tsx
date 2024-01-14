import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },

  palette: {
    primary: {
      main: "#182A79",
    },
    secondary: {
      main: "#333333",
    },
    warning: {
      main: "#FCB316",
    },
    common: {
      black: "#1F1F21",
    },
    grey: {
      100: "F8F9FA",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "14px 32px",
          borderRadius: "1rem",
          fontWeight: "500",
          fontSize: "1rem",
          textTransform: "none",
        },
        sizeLarge: {
          padding: "25px 46px",
          fontSize: "20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiInputBase-root": {
            borderRadius: "1rem",
            input: {
              padding: "14px 32px",
              borderRadius: "1rem",
              fontWeight: "500",
              fontSize: "1rem",
              textTransform: "none",
            },
          },
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

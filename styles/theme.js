import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "@font-face": {
        fontFamily: "Poppins",
        fontStyle: "regular",
        fontWeight: "400",
        fontDisplay: "optional",
        src: "url(/fonts/Poppins/Poppins-Regular.ttf) format('ttf')",
      },
      "@font-face": {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontDisplay: "optional",
        src: "url(/fonts/Poppins/Poppins-Medium.ttf) format('ttf')",
      },
      "@font-face": {
        fontFamily: "Poppins",
        fontStyle: "bold",
        fontWeight: "600",
        fontDisplay: "optional",
        src: "url(/fonts/Poppins/Poppins-Bold.ttf) format('ttf')",
      },

      "html, body": {
        scrollBehavior: "smooth",
        textRendering: "optimizeLegibility",
        boxSizing: "border-box",
        fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        background: "#F3F3F9",
        width: "100vw",
        height: "100vh",
        padding: "0",
        margin: "0",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },

      ul: {
        listStyle: "none",
      },

      h1: {
        fontSize: "56px",
      },
      h2: {
        fontSize: "36px",
      },
      h3: {
        fontSize: "28px",
      },
      h4: {
        fontSize: "24px",
      },
      h5: {
        fontSize: "20px",
      },
      h6: {
        fontSize: "16px",
      },
    },
  },
});

export default theme;

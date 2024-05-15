import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#000000",
                color: "#ffffff"
            }
        }
    },
    fonts: {
        heading: "'Rajdhani', sans-serif"
    }
});

export default theme;

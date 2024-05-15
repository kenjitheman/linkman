import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

const Chakra = ({ children }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default Chakra;

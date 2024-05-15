import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const description = "just a weeb who codes and makes some youtube videos about weeby stuff ヽ(ヅ)ノ";

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="author" content="kenjitheman" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="kenjitheman" />
                <meta name="og:title" content="kenjitheman" />
                <meta property="og:type" content="website" />
                <title>kenjitheman</title>
            </Head>
            <Container maxW="container.xl" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;

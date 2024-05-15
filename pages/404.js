import NextLink from "next/link";
import { Box, Heading, Text, Container, Divider, Button } from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container
            maxW="container.md"
            mt={12}
            align="center"
        >
            <Heading as="h1">not found | 404</Heading>
            <Text fontSize="1.3rem" color="gray.200" align="center" alignSelf={"center"} flexWrap={"wrap"} mb={3}>
                the page you&apos;re looking for was not found <br />ページが見つかりません<br />¯\_(ツ)_/¯ | ( ゜-゜) | (º _ º)
            </Text>
            <Box my={7} align="center">
                <Button
                    as={NextLink}
                    href="/"
                    p={7}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    rounded={"2xl"}
                    bg={"transparent"}
                    border={"1px solid"}
                    borderColor="gray.200"
                >
                    homepage
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;

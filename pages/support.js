import Link from "next/link";
import { Box, Heading, Text, Container, useColorModeValue, Divider, Button } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Support = () => {
    return (
        <Container
            align="center"
            justify="center"
            direction="column"
            alignContent={"center"}
            maxW="container.md"
        >
            <Heading
                as="h1"
                mb={3}
                align="center"
                alignContent="center"
                alignSelf="center"
                color="#ffffff"
            >
                support me
            </Heading>
            <Text fontSize="1.3rem" color="gray.200" align="center" alignSelf={"center"} flexWrap={"wrap"} mb={3}>
                if you like what i do, consider supporting me ヽ(ヅ)ノ<br />
                any amount is appreciated!<br />
                thank you!
                (´｡• ᵕ •｡`)♡
            </Text>
            <Box align="center" justify="center" direction="column" alignContent={"center"} w={"100%"}>
                <Box display={"column"} my={2}>
                    <Heading as="h3" fontSize="1.5rem" color="#FF69B4">
                        BTC
                    </Heading>
                    <Text
                        fontSize="1.3rem"
                        color="gray.300"
                        p={2}
                        align="center"
                        alignSelf={"center"}
                        flexWrap={"wrap"}
                    >
                        bc1q5qmnzhxlv9dn6pjzc4nv9w76scyn64wcm5ur0x
                    </Text>
                </Box>
                <Divider />
                <Box display={"column"} my={2}>
                    <Heading as="h3" fontSize="1.5rem" color="#FF69B4">
                        ETH
                    </Heading>
                    <Text
                        fontSize="1.3rem"
                        color="gray.300"
                        p={2}
                        align="center"
                        alignSelf={"center"}
                        flexWrap={"wrap"}
                    >
                        0xd5e3E7e717Ad5e2728b64d3D23D3a2132cAB9564
                    </Text>
                </Box>
                <Divider />
                <Box display={"column"} my={2}>
                    <Heading as="h3" fontSize="1.5rem" color="#FF69B4">
                        SOL
                    </Heading>
                    <Text
                        fontSize="1.3rem"
                        color="gray.300"
                        p={2}
                        align="center"
                        alignSelf={"center"}
                        flexWrap={"wrap"}
                    >
                        CrC1AVxNddg74GJHjJBZzfnDNoM4JFGjWwVwZAFBpeYD
                    </Text>
                </Box>
                <Divider />
                <Box display={"column"} my={2}>
                    <Heading as="h3" fontSize="1.5rem" color="#FF69B4">
                        TON
                    </Heading>
                    <Text
                        fontSize="1.3rem"
                        color="gray.300"
                        p={2}
                        align="center"
                        alignSelf={"center"}
                        flexWrap={"wrap"}
                    >
                        EQCmxr8QYpdow8O-gM2P9t4xnkdQCoQnypLx17hpNx3IqzA0
                    </Text>
                </Box>
                <Divider />
                <Box display={"column"} my={2}>
                    <Heading as="h3" fontSize="1.5rem" color="#FF69B4">
                        TRX
                    </Heading>
                    <Text
                        fontSize="1.3rem"
                        color="gray.300"
                        p={2}
                        align="center"
                        alignSelf={"center"}
                        flexWrap={"wrap"}
                    >
                        TTP5DX9gdy1ihBphuSF9nGy5pKzEvD7nkT
                    </Text>
                </Box>
            </Box>
            <Box my={5} align="center" maxW="170px">
                <Link href="/">
                    <Button
                        width="100%"
                        height="100%"
                        variant="solid"
                        color="#ffffff"
                        bg="#141414"
                        p={5}
                        rounded="2xl"
                        justifyContent="center"
                        alignItems="center"
                        _hover={{
                            color: "#FF69B4",
                            transform: "scale(1.1)"
                        }}
                    >
                        <Box position="absolute" left={4}>
                            <IoMdArrowRoundBack size={30} />
                        </Box>
                        <Text fontSize="1.3rem" pl={2}>
                            back
                        </Text>
                    </Button>
                </Link>
            </Box>
        </Container >
    );
};

export default Support;

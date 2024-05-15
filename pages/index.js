import { Box, Button, chakra, Text, Container, Heading, Link, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaTelegram, FaYoutube, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { SiMyanimelist } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import Animate from "../components/animate";

const Home = () => (
    <Container maxW="container.xl" centerContent>
        <Animate delay={0.1}>
            <Box
                display="block"
                top="50%"
                left="50%"
                zIndex={999}
                mb={1}
            >
                <Image
                    src="/favicon.png"
                    alt="kenjitheman"
                    height={150}
                    width={150}
                    quality={100}
                    priority
                />
            </Box>
        </Animate>
        <Animate delay={0.2}>
            <Box mb={4} textAlign="center">
                <Box flexGrow={1}>
                    <Heading as="h1" variant="page-title" color="#ffffff" mb={1} fontSize="2rem">
                        @kenjitheman
                    </Heading>
                    <Text color="gray.200" fontSize="1.1rem">
                        just a weeb who codes and do some weeby stuff<br />ヽ(ヅ)ノ
                    </Text>
                </Box>
            </Box>
        </Animate>
        <Container maxW={"container.sm"} centerContent>
            <List
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    margin: "auto"
                }}
            >
                <List style={{ width: "100%", margin: "auto" }}>
                    <ListItem pb={3}>
                        <Animate delay={0.3}>
                            <Link href="https://github.com/kenjitheman" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#FF69B4",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <FaGithub size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        github
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={0.4}>
                            <Link href="https://twitter.com/kenjith3man" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#1DA1F2",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <FaXTwitter size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        twitter
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={0.5}>
                            <Link href="https://t.me/kenjitheman" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#0088cc",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <FaTelegram size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        telegram
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={0.7}>
                            <Link href="https://www.instagram.com/plastiey" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#E1306C",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <FaInstagram size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        instagram
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={0.8}>
                            <Link href="https://myanimelist.net/profile/kenjitheman" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#2E51A2",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <SiMyanimelist size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        myanimelist
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={0.9}>
                            <Link href="/support">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#FFD700",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <GiPayMoney size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        support me
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={1}>
                            <Link href="https://www.linkedin.com/in/kenjitheman" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#2867B2",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <FaLinkedinIn size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        linkedin
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={0.6}>
                            <Link href="https://www.youtube.com/channel/UC0djtgWHCyUXhA-F8UXmSMQ" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#FF0000",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <FaYoutube size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        youtube
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                    <ListItem pb={3}>
                        <Animate delay={1.1}>
                            <Link href="mailto:im@kenjitheman.dev" target="_blank">
                                <Button
                                    position="relative"
                                    width="100%"
                                    height="100%"
                                    variant="solid"
                                    color="#ffffff"
                                    bg="#141414"
                                    p={7}
                                    rounded="2xl"
                                    justifyContent="center"
                                    alignItems="center"
                                    _hover={{
                                        color: "#805ada",
                                        transform: "scale(1.1)"
                                    }}
                                >
                                    <Box position="absolute" left={5}>
                                        <MdOutlineMail size={45} />
                                    </Box>
                                    <Text fontSize="1.3rem">
                                        email
                                    </Text>
                                </Button>
                            </Link>
                        </Animate>
                    </ListItem>
                </List>
            </List>
        </Container>
    </Container>
);

export default Home;

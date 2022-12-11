import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { user, links } from "@/config";
import { motion } from "framer-motion";

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

const Home = () => (
  <>
    <Head>
      <title>{user.name}</title>
      <meta name="description" content={user.bio} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex bg="gray.800" align="center" justify="center">
      <VStack
        alignItems={"stretch"}
        minHeight="100vh"
        p={5}
        color="white"
        textAlign={"center"}
        maxWidth={450}
        flex={1}
      >
        <VStack m={5}>
          <Image
            src={"/logo.png"}
            alt={user.name}
            width={100}
            height={100}
            mb={3}
          />
          <Heading size="lg" mb={2}>
            {user.name}
          </Heading>
          <Heading as="h2" size="md" color={"gray.300"} fontWeight="normal">
            {user.bio}
          </Heading>
        </VStack>
        <VStack as={UnorderedList} gap={2} alignItems="stretch">
          {links.map((link) => (
            <MotionBox
              whileHover={{ scale: [1, 1.05, 1.04] }}
              transition={{ duration: 0.25 }}
            >
              <LinkBox key={link.title}>
                <SimpleGrid
                  columns={3}
                  py={4}
                  px={6}
                  bg="gray.700"
                  rounded={6}
                  textAlign="center"
                  _hover={{ background: "gray.600" }}
                >
                  <Icon as={link.icon} boxSize={6} />
                  <LinkOverlay href={link.href} isExternal fontWeight={"500"}>
                    {link.title}
                  </LinkOverlay>
                </SimpleGrid>
              </LinkBox>
            </MotionBox>
          ))}
        </VStack>
      </VStack>
    </Flex>
  </>
);

export default Home;

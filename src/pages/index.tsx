import {
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  LinkProps,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { user, contactLinks, otherLinks } from "@/config";
import { motion } from "framer-motion";

const MotionLink = motion<Omit<LinkProps, "transition">>(Link);

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
        px={5}
        py={10}
        color="white"
        textAlign={"center"}
        maxWidth={450}
        flex={1}
        gap={2}
      >
        <VStack>
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
        <HStack justifyContent={"center"}>
          {contactLinks.map((link) => (
            <LinkBox
              key={link.title}
              rounded="full"
              alignItems="center"
              transitionDuration="0.1s"
              _hover={{ background: "gray.700" }}
              display="flex"
              p={3}
              gap={2}
            >
              <LinkOverlay href={link.href} isExternal>
                <Icon as={link.icon} boxSize={6} verticalAlign={"-.25em"} />
              </LinkOverlay>
            </LinkBox>
          ))}
        </HStack>
        <VStack as={UnorderedList} gap={2} alignItems="stretch">
          {otherLinks.map((link) => (
            <MotionLink
              key={link.title}
              href={link.href}
              isExternal
              bg="gray.700"
              rounded={6}
              display="grid"
              gridTemplateColumns={"1fr 1fr 1fr"}
              px={6}
              py={4}
              textAlign="center"
              fontWeight={500}
              _hover={{ background: "gray.600" }}
              _active={{ background: "gray.600" }}
              _focus={{ background: "gray.600" }}
              whileHover={{ scale: [1, 1.05, 1.04] }}
              transition={{ duration: 0.25 }}
            >
              <Icon as={link.icon} boxSize={6} />
              <Text>{link.title}</Text>
            </MotionLink>
          ))}
        </VStack>
      </VStack>
    </Flex>
  </>
);

export default Home;

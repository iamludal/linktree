import { Flex, HStack, UnorderedList, VStack } from "@chakra-ui/react";
import { CONTACT_LINKS, OTHER_LINKS } from "@/config";
import ContactLink from "@/components/ContactLink";
import OtherLink from "@/components/OtherLink";
import Header from "@/components/Header";
import SEO from "@/components/Seo";

const Home = () => (
  <>
    <SEO />
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
        <Header />
        <HStack justifyContent={"center"}>
          {CONTACT_LINKS.map(link => (
            <ContactLink key={link.href} {...link} />
          ))}
        </HStack>
        <VStack as={UnorderedList} gap={2} alignItems="stretch">
          {OTHER_LINKS.map(link => (
            <OtherLink key={link.href} {...link} />
          ))}
        </VStack>
      </VStack>
    </Flex>
  </>
);

export default Home;

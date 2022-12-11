import { Flex, HStack, UnorderedList, VStack } from "@chakra-ui/react";
import { CONTACT_LINKS, OTHER_LINKS } from "@/config";
import ContactLink from "@/components/ContactLink";
import OtherLink from "@/components/OtherLink";
import Header from "@/components/Header";
import SEO from "@/components/Seo";
import { MotionStack } from "@/components/motion";

const Home = () => (
  <>
    <SEO />
    <Flex
      bgGradient="linear(to-b, gray.800, gray.700)"
      justify="center"
      minHeight="100vh"
      px={5}
      py={10}
    >
      <MotionStack
        alignItems={"stretch"}
        color="white"
        textAlign={"center"}
        maxWidth={450}
        flex={1}
        gap={2}
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
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
      </MotionStack>
    </Flex>
  </>
);

export default Home;

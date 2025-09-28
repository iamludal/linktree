import { USER } from "@/config";
import { Box, Heading, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import type { FC } from "react";

const Header: FC = () => (
  <VStack>
    <Box width={100} height={100} mb={3}>
      <NextImage src={USER.avatar} alt="Avatar" />
    </Box>
    <Heading size="lg" mb={2} fontWeight={400}>
      Salut, moi c'est{" "}
      <Box as="span" fontWeight={700}>
        {USER.name}
      </Box>{" "}
      👋
    </Heading>
    <Heading as="h2" size="md" color={"gray.400"} fontWeight="normal">
      {USER.bio}
    </Heading>
  </VStack>
);

export default Header;

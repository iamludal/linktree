import { USER } from "@/config";
import { Heading, Image, VStack } from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => (
  <VStack>
    <Image src={"/logo.png"} alt={USER.name} width={100} height={100} mb={3} />
    <Heading size="lg" mb={2}>
      {USER.name}
    </Heading>
    <Heading as="h2" size="md" color={"gray.300"} fontWeight="normal">
      {USER.bio}
    </Heading>
  </VStack>
);

export default Header;

import type { OtherLinkType } from "@/config";
import { Icon, Text, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import { MotionLink } from "./motion";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const OtherLink: FC<OtherLinkType> = ({ title, href, image, description }) => (
  <MotionLink
    href={href}
    isExternal
    bg="gray.700"
    rounded={8}
    display="grid"
    gridTemplateColumns={"auto 1fr auto"}
    gridGap={6}
    alignItems={"center"}
    px={6}
    py={4}
    textAlign={"left"}
    _hover={{ background: "gray.600" }}
    _active={{ background: "gray.600" }}
    _focus={{ background: "gray.600" }}
    whileHover={{ scale: 1.03 }}
  >
    <Image src={image} alt={title} style={{ width: 52, height: 52, borderRadius: 12 }} />
    <VStack alignItems={"start"} gap={0}>
      <Text fontWeight={600}>{title}</Text>
      <Text opacity={0.6}>{description ?? "blank"}</Text>
    </VStack>
    <Icon as={MdArrowOutward} boxSize={5} opacity={0.5} />
  </MotionLink>
);

export default OtherLink;

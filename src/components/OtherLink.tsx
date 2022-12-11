import { Link } from "@/config";
import { Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MotionLink } from "./MotionLink";

const OtherLink: FC<Link> = ({ title, href, icon }) => (
  <MotionLink
    key={title}
    href={href}
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
    <Icon as={icon} boxSize={6} />
    <Text>{title}</Text>
  </MotionLink>
);

export default OtherLink;

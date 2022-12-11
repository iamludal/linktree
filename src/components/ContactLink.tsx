import { Link } from "@/config";
import { Icon } from "@chakra-ui/react";
import { FC } from "react";
import { MotionLink } from "./MotionLink";

const ContactLink: FC<Link> = ({ title, href, icon }) => (
  <MotionLink
    href={href}
    isExternal
    rounded="full"
    alignItems="center"
    transitionDuration="0.1s"
    _hover={{ background: "gray.700" }}
    _active={{ background: "gray.700" }}
    _focus={{ background: "gray.700" }}
    display="flex"
    p={3}
    gap={2}
  >
    <Icon as={icon} boxSize={6} verticalAlign={"-.25em"} />
  </MotionLink>
);

export default ContactLink;

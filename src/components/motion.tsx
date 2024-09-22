import { Link, LinkProps, Stack, StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef } from "react";

const ChakraLink = (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  return <Link {...props} ref={ref} />;
};

const ChakraStack = (props: StackProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <Stack {...props} ref={ref} />;
};

export const MotionLink = motion(forwardRef(ChakraLink));
export const MotionStack = motion(forwardRef(ChakraStack));

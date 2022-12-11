import { Link, LinkProps, Stack, StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionLink = motion<Omit<LinkProps, "transition">>(Link);
export const MotionStack = motion<Omit<StackProps, "transition">>(Stack);

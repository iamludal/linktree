import { Link, LinkProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionLink = motion<Omit<LinkProps, "transition">>(Link);

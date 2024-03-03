"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;

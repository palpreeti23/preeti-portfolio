import React from "react";
import { motion } from "framer-motion";

function Layout({ children }) {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0, x: -10 }}
      animate={{ scale: 1.01, opacity: 1, x: 0 }}
      exit={{ scale: 1, opacity: 0, x: 10 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}

export default Layout;

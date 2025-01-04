"use client";

import { motion } from "framer-motion";
import { Roast } from "@/types/roast";

interface RoastResponseProps {
  roast: Roast;
}

export default function RoastResponse({ roast }: RoastResponseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 rounded-lg p-4 shadow"
    >
      <p className="text-gray-700 mb-2">
        <strong>Incoming Roast:</strong> {roast.critique}
      </p>
      <p className="text-red-600 font-bold text-lg mt-4">
        <strong>Savage Comeback:</strong> {roast.response}
      </p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 10 }}
        className="mt-2 text-yellow-500 text-sm"
      >
        🔥 Roast Level: Thermonuclear 🔥
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Roast } from "@/types/roast";
import { FaTwitter, FaFacebook } from "react-icons/fa";

interface SocialShareProps {
  latestRoast?: Roast;
}

export default function SocialShare({ latestRoast }: SocialShareProps) {
  if (!latestRoast) return null;

  const shareText = `I just got roasted: "${latestRoast.critique}" But I came back with: "${latestRoast.response}" 🔥 #RoastRecovery`;

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      "_blank",
    );
  };
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Share the Burn</h3>
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={shareOnTwitter}
          className="bg-blue-400 text-white p-2 rounded-full"
        >
          <FaTwitter size={24} />
        </motion.button>
      </div>
    </div>
  );
}

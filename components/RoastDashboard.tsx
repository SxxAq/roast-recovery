"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Share2 } from "lucide-react";
import RoastInput from "./RoastInput";
import RoastResponse from "./RoastResponse";
import RoastMeter from "./RoastMeter";
import SocialShare from "./SocialShare";
import { Roast } from "@/types/roast";

export default function RoastDashboard() {
  const [roasts, setRoasts] = useState<Roast[]>([]);
  const [roastIntensity, setRoastIntensity] = useState(0);

  const addRoast = (roast: Roast) => {
    setRoasts((prevRoasts) => [roast, ...prevRoasts]);
    setRoastIntensity((prevIntensity) => Math.min(prevIntensity + 15, 100));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/60 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-gray-800"
      >
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-yellow-400 w-6 h-6" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Roast Arena
          </h2>
          <Sparkles className="text-yellow-400 w-6 h-6" />
        </div>

        <div className="space-y-8">
          <RoastInput onRoastSubmit={addRoast} />
          <RoastMeter intensity={roastIntensity} />

          <AnimatePresence>
            <div className="space-y-6">
              {roasts.map((roast, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <RoastResponse roast={roast} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {roasts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-6 border-t border-gray-700"
            >
              <SocialShare latestRoast={roasts[0]} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

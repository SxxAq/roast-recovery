"use client";

import { motion } from "framer-motion";

interface RoastMeterProps {
  intensity: number;
}

export default function RoastMeter({ intensity }: RoastMeterProps) {
  const getIntensityLabel = (intensity: number) => {
    if (intensity < 20) return "Mild Burn";
    if (intensity < 40) return "Sizzling";
    if (intensity < 60) return "Scorching";
    if (intensity < 80) return "Inferno";
    return "Apocalyptic";
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Roast Intensity Meter</h3>
      <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${intensity}%` }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-700 h-full rounded-full"
        />
      </div>
      <motion.p
        className="text-center mt-2 font-bold text-lg"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {getIntensityLabel(intensity)}
      </motion.p>
    </div>
  );
}

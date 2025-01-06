"use client";

import { motion } from "framer-motion";
import { MessageCircle, Flame } from "lucide-react";

interface RoastResponseProps {
  roast: Roast;
}

export default function RoastResponse({ roast }: RoastResponseProps) {
  return (
    <motion.div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p className="text-gray-400 font-medium">Incoming Roast</p>
            <p className="text-white text-lg mt-1">{roast.critique}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Flame className="w-5 h-5 text-red-400 mt-1" />
          <div>
            <p className="text-red-400 font-medium">Savage Comeback</p>
            <p className="text-white text-lg mt-1">{roast.response}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

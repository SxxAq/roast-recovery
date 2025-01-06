"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface RoastInputProps {
  onRoastSubmit: (roast: Roast) => void;
}

export default function RoastInput({ onRoastSubmit }: RoastInputProps) {
  const [roastText, setRoastText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roastText.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ critique: roastText }),
      });

      if (!response.ok) throw new Error("Failed to generate response");

      const data = await response.json();
      onRoastSubmit({
        critique: roastText,
        response: data.response,
        timestamp: new Date().toISOString(),
      });
      setRoastText("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <motion.input
          type="text"
          value={roastText}
          onChange={(e) => setRoastText(e.target.value)}
          placeholder="Bring your worst roast..."
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-lg"
          disabled={isLoading}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-colors disabled:opacity-50"
      >
        {isLoading ? (
          "Preparing Comeback..."
        ) : (
          <>
            Roast Me <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </form>
  );
}

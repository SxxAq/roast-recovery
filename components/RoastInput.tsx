"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Roast } from "@/types/roast";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ critique: roastText }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate response");
      }

      const data = await response.json();

      const newRoast: Roast = {
        critique: roastText,
        response: data.response,
        timestamp: new Date().toISOString(),
      };

      onRoastSubmit(newRoast);
      setRoastText("");
    } catch (error) {
      console.error("Error:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <input
          type="text"
          value={roastText}
          onChange={(e) => setRoastText(e.target.value)}
          placeholder="Bring your worst roast..."
          className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-600 text-lg"
          disabled={isLoading}
        />
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className={`mt-4 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 text-lg ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Preparing Savage Comeback..." : "Roast Me If You Dare!"}
      </motion.button>
    </form>
  );
}

'use client'

import { motion } from 'framer-motion'
import { Roast } from '@/types/roast'

interface RoastResponseProps {
  roast: Roast
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
        <strong>Roast:</strong> {roast.critique}
      </p>
      <p className="text-blue-600 font-semibold">
        <strong>Comeback:</strong> {roast.response}
      </p>
    </motion.div>
  )
}

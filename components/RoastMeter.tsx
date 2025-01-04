'use client'

import { motion } from 'framer-motion'

interface RoastMeterProps {
  intensity: number
}

export default function RoastMeter({ intensity }: RoastMeterProps) {
  const getIntensityLabel = (intensity: number) => {
    if (intensity < 25) return 'Barely Toasted'
    if (intensity < 50) return 'Medium Rare'
    if (intensity < 75) return 'Well Done'
    return 'Charcoal Burnt'
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Roast Intensity</h3>
      <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${intensity}%` }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-yellow-400 via-red-500 to-red-700 h-full rounded-full"
        />
      </div>
      <p className="text-center mt-2 font-medium">
        {getIntensityLabel(intensity)}
      </p>
    </div>
  )
}

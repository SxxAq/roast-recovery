'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RoastInput from './RoastInput'
import RoastResponse from './RoastResponse'
import RoastMeter from './RoastMeter'
import SocialShare from './SocialShare'
import { Roast } from '@/types/roast'

export default function RoastDashboard() {
  const [roasts, setRoasts] = useState<Roast[]>([])
  const [roastIntensity, setRoastIntensity] = useState(0)

  const addRoast = (roast: Roast) => {
    setRoasts((prevRoasts) => [...prevRoasts, roast])
    setRoastIntensity((prevIntensity) => Math.min(prevIntensity + 10, 100))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <RoastInput onRoastSubmit={addRoast} />
      <RoastMeter intensity={roastIntensity} />
      <div className="mt-8 space-y-4">
        {roasts.map((roast, index) => (
          <RoastResponse key={index} roast={roast} />
        ))}
      </div>
      <SocialShare latestRoast={roasts[roasts.length - 1]} />
    </motion.div>
  )
}

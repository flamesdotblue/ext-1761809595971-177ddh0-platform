import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl"
      >
        Create Stunning Product Photoshoots in Seconds
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
      >
        Upload a single product photo. Our AI will generate an entire lifestyle photoshoot for your brand, ready for any ad campaign.
      </motion.p>
      <div className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur">
        <Sparkles className="mr-1.5 h-3.5 w-3.5 text-indigo-400" />
        Premium AI experience
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function PrimaryButton({ disabled, onClick, text }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 ${
        disabled
          ? 'cursor-not-allowed bg-white/5 text-gray-400'
          : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.65)] hover:shadow-[0_12px_36px_-10px_rgba(79,70,229,0.75)]'
      }`}
    >
      <Sparkles className={`h-4 w-4 ${disabled ? 'text-gray-400' : 'text-white/90 group-hover:text-white'}`} />
      {text}
    </motion.button>
  )
}

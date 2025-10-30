import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import UploadDropzone from './components/UploadDropzone'
import PrimaryButton from './components/PrimaryButton'
import Footer from './components/Footer'

function App() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  useEffect(() => {
    if (!file) {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  const handleGenerate = () => {
    // This would trigger the processing flow in a full app.
  }

  return (
    <div className="min-h-screen bg-[#111827] text-gray-100 antialiased overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-16 sm:py-20">
        <HeroSection />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mt-10 w-full"
        >
          <UploadDropzone file={file} setFile={setFile} previewUrl={previewUrl} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 w-full flex items-center justify-center"
        >
          <PrimaryButton
            disabled={!file}
            onClick={handleGenerate}
            text="Generate Photoshoot"
          />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default App

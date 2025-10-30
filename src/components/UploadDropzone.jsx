import { useRef, useState } from 'react'
import { Image as ImageIcon, Sparkles, X } from 'lucide-react'

export default function UploadDropzone({ file, setFile, previewUrl }) {
  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const onBrowse = () => inputRef.current?.click()

  const handleFiles = (files) => {
    const f = files?.[0]
    if (!f) return
    if (!f.type.startsWith('image/')) return
    setFile(f)
  }

  const onDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const dt = e.dataTransfer
    handleFiles(dt.files)
  }

  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) setIsDragging(true)
  }

  const onDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const removeFile = () => {
    setFile(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`relative w-full rounded-2xl border-2 border-dashed p-6 transition-all duration-300 sm:p-10 ${
          isDragging
            ? 'border-indigo-500/80 shadow-[0_0_0_4px_rgba(79,70,229,0.25)] ring-2 ring-indigo-500/40'
            : 'border-white/10 hover:border-white/20'
        } ${file ? 'bg-white/5' : 'bg-white/5/'} backdrop-blur`}
      >
        {!file && (
          <div className="flex flex-col items-center justify-center text-center text-gray-300">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <div className="relative">
                <ImageIcon className="h-7 w-7 text-gray-200" />
                <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-indigo-400" />
              </div>
            </div>
            <p className="text-base font-medium">Drag & drop your product image here</p>
            <p className="mt-2 text-sm text-gray-400">
              PNG or JPG up to 25MB
            </p>
            <button
              type="button"
              onClick={onBrowse}
              className="mt-4 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
            >
              or browse files
            </button>
          </div>
        )}

        {file && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt={file?.name || 'Uploaded image preview'}
                className="h-48 w-48 object-cover sm:h-56 sm:w-56"
              />
            </div>
            <div className="flex w-full flex-1 flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <div>
                <p className="text-sm font-medium text-white/90">{file.name}</p>
                <p className="text-xs text-gray-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onBrowse}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
                >
                  Change file
                </button>
                <button
                  type="button"
                  onClick={removeFile}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10/0 bg-white/0 px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-rose-300"
                >
                  <X className="h-4 w-4" /> Remove
                </button>
              </div>
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </div>
  )
}

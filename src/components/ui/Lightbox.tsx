import { useEffect } from "react"

type LightboxProps = {
  images: string[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onChange((index + 1) % images.length)
      if (event.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [images.length, index, onChange, onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-primary/85 p-5"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary"
          aria-label="Close gallery"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <img src={images[index]} alt="" className="max-h-[78vh] w-full rounded-xl object-contain" />
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => onChange((index - 1 + images.length) % images.length)}
          className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => onChange((index + 1) % images.length)}
          className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  )
}

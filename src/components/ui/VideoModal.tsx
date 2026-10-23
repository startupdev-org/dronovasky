import { YOUTUBE_ID } from "../../data/content"
import { company } from "../../data/company"

type VideoModalProps = {
  onClose: () => void
}

export function VideoModal({ onClose }: VideoModalProps) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-primary/80 p-5"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Videoclip despre serviciile de curățenie"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary"
          aria-label="Închide videoclipul"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
          title={`${company.name} - servicii de curățenie`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

type PlayButtonProps = {
  onClick: () => void
  size?: "sm" | "lg"
  className?: string
}

export function PlayButton({ onClick, size = "sm", className = "" }: PlayButtonProps) {
  const large = size === "lg"

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Redă videoclipul"
      className={`group flex items-center justify-center rounded-full transition-colors ${large ? "h-20 w-20 bg-accent" : "h-[50px] w-[50px] bg-white hover:bg-primary"} ${className}`}
    >
      {large ? (
        <>
          <span className="pointer-events-none absolute inset-[-35%] animate-[ring-pulse_1.2s_linear_infinite] rounded-full border-[14px] border-white/70" />
          <span className="pointer-events-none absolute inset-[-35%] animate-[ring-pulse_1.2s_linear_infinite_0.35s] rounded-full border-[14px] border-white/70" />
        </>
      ) : null}
      <i
        className={`fa-solid fa-play relative z-10 ${large ? "ml-1 text-[28px] text-white" : "ml-0.5 text-[18px] text-primary group-hover:text-white"}`}
      />
    </button>
  )
}

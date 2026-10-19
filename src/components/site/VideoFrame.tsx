import { Play } from "lucide-react";

type VideoFrameProps = {
  title: string;
  poster?: string;
  /** Set once the final recording exists — renders a real <video> with controls. */
  src?: string;
  placeholder: string;
  caption: string;
};

/**
 * Responsive 16:9 demonstration video container.
 * No source → finished-looking poster placeholder (never a blank box).
 * With source → native controls, no autoplay, poster image preserved.
 */
export function VideoFrame({ title, poster, src, placeholder, caption }: VideoFrameProps) {
  return (
    <figure className="w-full">
      <h4 className="mb-2.5 text-[11px] font-medium tracking-[0.18em] text-white/50 uppercase">
        {title}
      </h4>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 glass">
        {src ? (
          <video controls playsInline preload="metadata" poster={poster} className="h-full w-full bg-black">
            <source src={src} />
            Your browser does not support the video element.
          </video>
        ) : (
          <>
            {poster && (
              <img
                src={poster}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.45] saturate-[0.75]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
            <div className="on-dark absolute inset-0" aria-hidden="true" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-6 text-center">
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
              >
                <Play className="ml-0.5 size-6 fill-white text-white" />
              </span>
              <p className="font-display text-lg font-semibold tracking-tight text-white">
                DEMO VIDEO
              </p>
              <p className="max-w-sm text-sm leading-snug text-white/70">{placeholder}</p>
              <p className="mt-1 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-white/60 uppercase">
                Replace with final demonstration recording
              </p>
            </div>
          </>
        )}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

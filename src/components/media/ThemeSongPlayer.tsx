"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX, Pause, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type PlaybackState = "loading" | "playing" | "paused" | "blocked";

export function ThemeSongPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [playback, setPlayback] = useState<PlaybackState>("loading");
  const [muted, setMuted] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  const tryPlay = async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    try {
      await audio.play();
      setPlayback("playing");
      return true;
    } catch {
      setPlayback("blocked");
      return false;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.85;

    void tryPlay();

    const resumeOnInteraction = () => {
      if (audio.paused) {
        void tryPlay();
      }
    };

    window.addEventListener("pointerdown", resumeOnInteraction, { once: true });
    window.addEventListener("keydown", resumeOnInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", resumeOnInteraction);
      window.removeEventListener("keydown", resumeOnInteraction);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  useEffect(() => {
    if (!panelOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setPanelOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanelOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [panelOpen]);

  useEffect(() => {
    if (playback === "blocked") {
      setPanelOpen(true);
    }
  }, [playback]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await tryPlay();
    } else {
      audio.pause();
      setPlayback("paused");
    }
  };

  const isPlaying = playback === "playing";

  const statusLabel =
    playback === "blocked"
      ? "Tap play to start the theme song"
      : isPlaying
        ? muted
          ? "Playing muted"
          : "Now playing"
        : "Paused";

  return (
    <>
      <audio
        ref={audioRef}
        src={siteConfig.themeSong}
        loop
        preload="auto"
        aria-label="The Well Global theme song"
      />

      <div
        ref={panelRef}
        className="fixed bottom-6 left-6 z-40"
        role="region"
        aria-label="Theme song controls"
      >
        {panelOpen && (
          <div
            id="theme-song-panel"
            className="mb-3 w-72 rounded-2xl border border-silver/60 bg-white p-4 shadow-card"
          >
            <p className="font-serif text-sm font-bold text-deep-navy">
              The Well Theme Song
            </p>
            <p className="mt-1 text-xs text-deep-navy/60">{statusLabel}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => void togglePlayback()}
                className="btn-primary inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-xs"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4" aria-hidden="true" />
                    Pause
                  </>
                ) : (
                  <>
                    <Music className="h-4 w-4" aria-hidden="true" />
                    Play
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMuted((prev) => !prev)}
                className="btn-outline inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs"
                aria-pressed={muted}
              >
                {muted ? (
                  <>
                    <VolumeX className="h-4 w-4" aria-hidden="true" />
                    Unmute
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4" aria-hidden="true" />
                    Mute
                  </>
                )}
              </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-deep-navy/50">
              Use the music button anytime to play, pause, or mute the theme
              song. It loops while you explore the site.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setPanelOpen((open) => !open)}
          className={cn(
            "flex items-center gap-2 rounded-full border border-silver/60 bg-white/95 px-4 py-3 text-sm font-semibold text-deep-navy shadow-lg backdrop-blur-sm transition-all hover:border-well-blue hover:text-well-blue-deep",
            panelOpen && "border-well-blue text-well-blue-deep",
            isPlaying && !muted && "ring-2 ring-well-blue/30"
          )}
          aria-expanded={panelOpen}
          aria-controls="theme-song-panel"
          aria-label="Open music controls"
        >
          <Music className="h-5 w-5" aria-hidden="true" />
          <span>Music</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              panelOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </>
  );
}

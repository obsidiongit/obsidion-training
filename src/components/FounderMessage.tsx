"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const BAR_COUNT = 24;

export default function FounderMessage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasAudio, setHasAudio] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    const onError = () => setHasAudio(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("error", onError);
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => setHasAudio(false));
    }
    setPlaying((p) => !p);
  }, [playing]);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = pct * duration;
    },
    [duration],
  );

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="rounded-xl border border-border bg-background/60 backdrop-blur-sm p-4">
      <audio ref={audioRef} src="/audio/founder-message.mp3" preload="metadata" />

      <div className="flex items-center gap-3 mb-3">
        <Volume2 size={14} className="text-accent shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Message from the Founder
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          disabled={!hasAudio}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          {/* Waveform bars / progress */}
          <div
            className="flex items-end gap-[2px] h-8 cursor-pointer"
            onClick={seek}
            role="slider"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
          >
            {Array.from({ length: BAR_COUNT }, (_, i) => {
              const barProgress = i / BAR_COUNT;
              const filled = barProgress <= progress;
              const heights = [60, 85, 45, 100, 70, 90, 55, 80, 65, 95, 50, 75, 88, 42, 98, 68, 82, 58, 92, 48, 78, 62, 86, 52];
              const h = heights[i % heights.length];

              return (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all duration-150 ${
                    filled
                      ? "bg-accent"
                      : "bg-border-strong/60"
                  } ${playing && filled ? "animate-pulse" : ""}`}
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>

          <div className="flex justify-between mt-1">
            <span className="text-[10px] tabular-nums text-muted-foreground">
              {hasAudio && duration > 0 ? formatTime(currentTime) : "--:--"}
            </span>
            <span className="text-[10px] tabular-nums text-muted-foreground">
              {hasAudio && duration > 0 ? formatTime(duration) : "--:--"}
            </span>
          </div>
        </div>
      </div>

      {!hasAudio && (
        <p className="text-[11px] text-muted-foreground mt-2 text-center italic">
          Audio recording coming soon
        </p>
      )}
    </div>
  );
}

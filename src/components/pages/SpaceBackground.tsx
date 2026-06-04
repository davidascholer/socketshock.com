import { ReactNode, useEffect, useMemo, useState } from "react";
import { Rocket, Planet, Moon, Star } from "@phosphor-icons/react";

const GRID_SIZE_PX = 200;
const MOON_ICON_SIZE_PX = 9;
const STAR_ICON_SIZE_PX = 16.875;
const PLANET_ICON_SIZE_PX = 14.0625;
const SPACESHIP_ICON_SIZE_PX = 18;

const MOON_ORBIT_DURATION_SECONDS = 20;
const STAR_ANIMATION_DURATION_SECONDS = 300;
const SINGLE_ROCKET_DURATION_SECONDS = 40;
const SPACESHIP_LANES = [20, 50, 80];

interface SpaceBackgroundProps {
  children: ReactNode;
}

export default function SpaceBackground({ children }: SpaceBackgroundProps) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const planetCells = useMemo(() => {
    const cols = Math.max(1, Math.floor(viewport.width / GRID_SIZE_PX));
    const rows = Math.max(1, Math.floor(viewport.height / GRID_SIZE_PX));

    return Array.from({ length: cols * rows }, (_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);

      return {
        key: `${col}-${row}`,
        left: col * GRID_SIZE_PX + GRID_SIZE_PX / 2,
        top: row * GRID_SIZE_PX + GRID_SIZE_PX / 2,
      };
    });
  }, [viewport.width, viewport.height]);

  const starCells = useMemo(() => {
    const cols = Math.max(1, Math.floor(viewport.width / GRID_SIZE_PX));
    const rows = Math.max(1, Math.floor(viewport.height / GRID_SIZE_PX));

    if (cols < 2 || rows < 2) {
      return [];
    }

    return Array.from({ length: (cols - 1) * (rows - 1) }, (_, index) => {
      const col = index % (cols - 1);
      const row = Math.floor(index / (cols - 1));

      return {
        key: `star-${col}-${row}`,
        left: (col + 1) * GRID_SIZE_PX,
        top: (row + 1) * GRID_SIZE_PX,
      };
    });
  }, [viewport.width, viewport.height]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <style>{`
				@keyframes orbit {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes drift-up {
					from {
						transform: translateY(110vh);
					}
					to {
						transform: translateY(-110vh);
					}
				}

				@keyframes star-twinkle {
					0% {
						opacity: 0.55;
					}
					50% {
						opacity: 0.9;
					}
					100% {
						opacity: 0.55;
					}
				}
			`}</style>

      <div className="absolute inset-0 opacity-90">
        {planetCells.map(({ key, left, top }) => (
          <div
            key={key}
            className="absolute text-white/70"
            style={{ left: `${left}px`, top: `${top}px` }}
          >
            <div
              className="relative"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <Planet
                weight="fill"
                style={{
                  width: `${PLANET_ICON_SIZE_PX}px`,
                  height: `${PLANET_ICON_SIZE_PX}px`,
                }}
              />
              <div
                className="absolute left-1/2 top-1/2"
                style={{
                  width: "0px",
                  height: "0px",
                  animation: `orbit ${MOON_ORBIT_DURATION_SECONDS}s linear infinite`,
                }}
              >
                <Moon
                  weight="fill"
                  style={{
                    width: `${MOON_ICON_SIZE_PX}px`,
                    height: `${MOON_ICON_SIZE_PX}px`,
                    transform: "translate(40px, -24px)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {starCells.map(({ key, left, top }) => (
          <div
            key={key}
            className="absolute text-white/70"
            style={{ left: `${left}px`, top: `${top}px` }}
          >
            <div
              style={{
                transform: "translate(-50%, -50%)",
                animation: `star-twinkle ${STAR_ANIMATION_DURATION_SECONDS}s ease-in-out infinite`,
              }}
            >
              <Star
                weight="fill"
                style={{
                  width: `${STAR_ICON_SIZE_PX}px`,
                  height: `${STAR_ICON_SIZE_PX}px`,
                }}
              />
            </div>
          </div>
        ))}

        {SPACESHIP_LANES.map((leftPercent, index) => (
          <div
            key={`spaceship-${leftPercent}`}
            className="absolute text-white/70"
            style={{
              left: `${leftPercent}%`,
              top: 0,
              transform: "translateX(-50%)",
              animationName: "drift-up",
              animationDuration: `${SINGLE_ROCKET_DURATION_SECONDS}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${-(SINGLE_ROCKET_DURATION_SECONDS / SPACESHIP_LANES.length) * index}s`,
            }}
          >
            <Rocket
              weight="fill"
              style={{
                width: `${SPACESHIP_ICON_SIZE_PX}px`,
                height: `${SPACESHIP_ICON_SIZE_PX}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        {children}
      </div>
    </section>
  );
}

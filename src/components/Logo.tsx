import logoImg from "@/assets/areera-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  textColor?: string;
  variant?: "default" | "light";
}

const sizeMap = {
  sm: { icon: "h-7 w-7 sm:h-8 sm:w-8", textTitle: "text-xs sm:text-sm" },
  md: { icon: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10", textTitle: "text-xs sm:text-sm md:text-base" },
  lg: { icon: "h-10 w-10 sm:h-12 sm:w-12", textTitle: "text-sm sm:text-base md:text-lg" },
  xl: { icon: "h-12 w-12 sm:h-16 sm:w-16", textTitle: "text-lg sm:text-xl md:text-2xl" },
};

export function Logo({
  className,
  size = "md",
  showText = true,
  textColor,
  variant = "default",
}: LogoProps) {
  const currentSize = sizeMap[size] || sizeMap.md;
  const isLight = variant === "light" || textColor?.includes("white");

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 sm:gap-2.5 select-none shrink-0 min-w-0",
        className,
      )}
    >
      {/* Official AH Monogram Emblem */}
      <div
        className={cn(
          "relative shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-slate-900 border border-blue-500/30 shadow-xs ring-1 ring-blue-500/20",
          currentSize.icon,
        )}
      >
        <img
          src={logoImg}
          alt="Areera Travel & Tours logo"
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Luxury Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center min-w-0">
          <span
            className={cn(
              "font-display font-bold tracking-tight whitespace-nowrap leading-none",
              isLight ? "text-white" : "text-slate-900",
              currentSize.textTitle,
              textColor,
            )}
          >
            AREERA{" "}
            <span
              className={cn(
                "font-semibold",
                isLight ? "text-cyan-300" : "text-blue-600",
              )}
            >
              TRAVEL & TOURS
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

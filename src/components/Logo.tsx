import logoImg from "@/assets/areera-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  textColor?: string;
}

const sizeMap = {
  sm: { icon: "h-8 w-8", textTitle: "text-sm", textSub: "text-[9px]" },
  md: { icon: "h-10 w-10", textTitle: "text-base", textSub: "text-[10px]" },
  lg: { icon: "h-12 w-12", textTitle: "text-lg", textSub: "text-xs" },
  xl: { icon: "h-16 w-16", textTitle: "text-2xl", textSub: "text-sm" },
};

export function Logo({ className, size = "md", showText = true, textColor }: LogoProps) {
  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 select-none shrink-0 whitespace-nowrap",
        className,
      )}
    >
      {/* Official AH Monogram Emblem */}
      <div
        className={cn(
          "relative shrink-0 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900 border border-slate-700/60 shadow-xs",
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

      {/* Luxury Brand Typography in single line */}
      {showText && (
        <div className="flex flex-col justify-center whitespace-nowrap shrink-0">
          <div className="flex items-center leading-none whitespace-nowrap">
            <span
              className={cn(
                "font-display font-bold tracking-tight text-white whitespace-nowrap",
                currentSize.textTitle,
                textColor,
              )}
            >
              AREERA <span className="text-blue-400 font-semibold">TRAVEL & TOURS</span>
            </span>
          </div>
          <span
            className={cn(
              "mt-1 font-medium tracking-[0.18em] text-slate-400 uppercase whitespace-nowrap",
              currentSize.textSub,
            )}
          >
            Visa · Air Tickets · Attestation
          </span>
        </div>
      )}
    </div>
  );
}

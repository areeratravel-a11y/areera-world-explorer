import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FlagSize = "xs" | "sm" | "md" | "lg" | "xl" | "hero";

interface CountryFlagProps {
  isoCode: string;
  countryName: string;
  size?: FlagSize;
  className?: string;
  fallbackEmoji?: string;
  rounded?: "sm" | "md" | "lg" | "full";
}

const sizeMap: Record<FlagSize, { width: string; height: string; imgWidth: number }> = {
  xs: { width: "w-5", height: "h-3.5", imgWidth: 24 },
  sm: { width: "w-7", height: "h-5", imgWidth: 32 },
  md: { width: "w-9", height: "h-6", imgWidth: 48 },
  lg: { width: "w-12", height: "h-8", imgWidth: 64 },
  xl: { width: "w-16", height: "h-11", imgWidth: 80 },
  hero: { width: "w-20 sm:w-24", height: "h-14 sm:h-16", imgWidth: 120 },
};

const roundedMap = {
  sm: "rounded-xs",
  md: "rounded-sm",
  lg: "rounded-md",
  full: "rounded-full aspect-square object-cover",
};

export function CountryFlag({
  isoCode,
  countryName,
  size = "md",
  className,
  fallbackEmoji,
  rounded = "md",
}: CountryFlagProps) {
  const [hasError, setHasError] = useState(false);
  const code = (isoCode || "").toLowerCase().trim();
  const dimensions = sizeMap[size] || sizeMap.md;
  const roundedClass = roundedMap[rounded] || roundedMap.md;

  if (!code || hasError) {
    return (
      <span
        role="img"
        aria-label={`${countryName} flag`}
        className={cn(
          "inline-flex items-center justify-center select-none font-normal leading-none",
          size === "hero"
            ? "text-4xl"
            : size === "xl"
              ? "text-3xl"
              : size === "lg"
                ? "text-2xl"
                : "text-base",
          className,
        )}
      >
        {fallbackEmoji || "🌐"}
      </span>
    );
  }

  // Reliable, high-resolution SVG flags from FlagCDN
  const flagUrl = `https://flagcdn.com/${code}.svg`;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden bg-white/5 ring-1 ring-white/20 shadow-xs",
        dimensions.width,
        dimensions.height,
        roundedClass,
        className,
      )}
      title={`${countryName} Flag`}
    >
      <img
        src={flagUrl}
        alt={`${countryName} flag`}
        loading="lazy"
        width={dimensions.imgWidth}
        height={Math.round((dimensions.imgWidth * 2) / 3)}
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
      />
    </span>
  );
}

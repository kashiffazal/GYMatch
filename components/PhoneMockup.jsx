"use client";

import Image from "next/image";

export default function PhoneMockup({
  src,
  alt = "GYMatch App Screen",
  className = "",
  badge = null,
  priority = false,
}) {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none w-[280px] sm:w-[320px] md:w-[340px] shrink-0 mx-auto ${className}`}>
      {/* Outer Phone Chassis */}
      <div className="relative w-full h-[570px] sm:h-[650px] border-[10px] sm:border-[12px] border-[#1a1a1e] dark:border-[#282830] bg-[#0a0a0c] rounded-[48px] sm:rounded-[54px] shadow-2xl shadow-black/80 ring-1 ring-white/10 overflow-hidden flex flex-col transition-transform duration-500 hover:scale-[1.02]">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[22px] w-[110px] bg-black rounded-b-[18px] z-30 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/10"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a192f]/50 ring-1 ring-blue-500/20"></div>
        </div>

        {/* Speaker Slot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-800 rounded-full z-40"></div>

        {/* Screen Content Container */}
        <div className="relative w-full h-full bg-black overflow-hidden rounded-[38px] sm:rounded-[42px]">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 320px, 360px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-lime-400 font-bold text-lg font-bebas">GYMATCH APP</span>
            </div>
          )}

          {/* Screen Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Side Buttons Visual Accents */}
        <div className="absolute -left-[14px] top-24 w-[4px] h-8 bg-zinc-700 rounded-l-md"></div>
        <div className="absolute -left-[14px] top-36 w-[4px] h-12 bg-zinc-700 rounded-l-md"></div>
        <div className="absolute -right-[14px] top-28 w-[4px] h-14 bg-zinc-700 rounded-r-md"></div>
      </div>

      {/* Optional Floating Badge overlay */}
      {badge && (
        <div className="mt-4 z-40 w-full flex justify-center">
          {badge}
        </div>
      )}
    </div>
  );
}

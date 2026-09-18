"use client";
import { useState } from "react";
import GetStartedModal from "./GetStartedModal";

interface Props {
    planName: string;
    variant?: "outline" | "filled"; // outline = gold border, filled = gold gradient
    className?: string;
}

export default function GetStartedButton({ planName, variant = "outline", className = "" }: Props) {
    const [open, setOpen] = useState(false);
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
    let rippleId = 0;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Ripple effect
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = ++rippleId;
        setRipples(r => [...r, { x, y, id }]);
        setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 700);
        setOpen(true);
    };

    const baseClass = `
        relative overflow-hidden cursor-pointer w-full py-3.5
        text-[0.8rem] font-bold rounded tracking-widest uppercase
        transition-all duration-200 active:scale-[0.97]
        hover:-translate-y-0.5 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-[#d0a353]/50
    `;

    const variantClass = variant === "filled"
        ? "bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white hover:shadow-[0_6px_24px_rgba(208,163,83,0.5)] shimmer-btn"
        : "border-2 border-[#d0a353] text-[#d0a353] hover:bg-[#d0a353] hover:text-white";

    return (
        <>
            <button
                onClick={handleClick}
                className={`${baseClass} ${variantClass} ${className}`}
            >
                {/* Shimmer sweep (filled only) */}
                {variant === "filled" && (
                    <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                )}

                {/* Ripple spots */}
                {ripples.map(rp => (
                    <span
                        key={rp.id}
                        style={{ left: rp.x, top: rp.y }}
                        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/40 animate-[ripple_0.6s_ease-out_forwards]"
                    />
                ))}

                <span className="relative flex items-center justify-center gap-2">
                    <i className="fas fa-rocket text-[11px]" />
                    Get Started
                    <i className="fas fa-chevron-right text-[9px]" />
                </span>
            </button>

            {open && <GetStartedModal planName={planName} onClose={() => setOpen(false)} />}

            <style>{`
                @keyframes shimmer {
                    0%   { transform: translateX(-150%); }
                    100% { transform: translateX(250%); }
                }
                @keyframes ripple {
                    0%   { width: 0; height: 0; opacity: 0.6; }
                    100% { width: 200px; height: 200px; opacity: 0; }
                }
            `}</style>
        </>
    );
}

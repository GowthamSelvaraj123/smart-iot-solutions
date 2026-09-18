"use client";
import { useState, useRef, useEffect } from "react";

type Step = "choose" | "mail" | "sending" | "sent";

interface Props {
    planName: string;
    onClose: () => void;
}

export default function GetStartedModal({ planName, onClose }: Props) {
    const [step, setStep] = useState<Step>("choose");
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    // Prevent background scroll while open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!form.name.trim())  errs.name = "Name is required";
        if (!form.phone.trim()) errs.phone = "Phone is required";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStep("sending");
        // Simulate send delay (replace with real API call)
        await new Promise(r => setTimeout(r, 1500));
        setStep("sent");
    };

    const handleWhatsApp = () => {
        const msg = encodeURIComponent(
            `Hi! I'm interested in the *${planName}* package. Please share more details.`
        );
        window.open(`https://wa.me/919626904991?text=${msg}`, "_blank");
        onClose();
    };

    /* ─── Overlay click close ─── */
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) onClose();
    };

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(10,14,20,0.75)", backdropFilter: "blur(6px)" }}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                style={{ animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
            >
                {/* ── Header ── */}
                <div className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white/80 text-[0.65rem] font-bold uppercase tracking-widest mb-0.5">
                                {planName} Plan
                            </p>
                            <h3 className="text-white font-heading font-black text-xl">
                                {step === "sent" ? "Message Sent! 🎉" : "Get Started"}
                            </h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition cursor-pointer"
                        >
                            <i className="fas fa-times text-sm" />
                        </button>
                    </div>
                </div>

                {/* ── Choose step ── */}
                {step === "choose" && (
                    <div className="p-6">
                        <p className="text-gray-500 text-sm text-center mb-6 font-medium">
                            How would you like to reach us?
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Mail */}
                            <button
                                onClick={() => setStep("mail")}
                                className="group flex flex-col items-center gap-3 border-2 border-gray-100 hover:border-[#d0a353] rounded-xl p-6 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(208,163,83,0.15)] cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#fdf8ee] group-hover:bg-[#d0a353] flex items-center justify-center transition-colors duration-200">
                                    <i className="fas fa-envelope text-[#d0a353] group-hover:text-white text-xl transition-colors duration-200" />
                                </div>
                                <span className="text-sm font-bold text-gray-700 group-hover:text-[#d0a353] transition-colors">
                                    Send Mail
                                </span>
                                <span className="text-[0.65rem] text-gray-400 text-center leading-tight">
                                    Fill our contact form
                                </span>
                            </button>

                            {/* WhatsApp */}
                            <button
                                onClick={handleWhatsApp}
                                className="group flex flex-col items-center gap-3 border-2 border-gray-100 hover:border-[#25D366] rounded-xl p-6 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(37,211,102,0.15)] cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#f0fdf4] group-hover:bg-[#25D366] flex items-center justify-center transition-colors duration-200">
                                    <i className="fab fa-whatsapp text-[#25D366] group-hover:text-white text-2xl transition-colors duration-200" />
                                </div>
                                <span className="text-sm font-bold text-gray-700 group-hover:text-[#25D366] transition-colors">
                                    WhatsApp
                                </span>
                                <span className="text-[0.65rem] text-gray-400 text-center leading-tight">
                                    Chat directly with us
                                </span>
                            </button>
                        </div>

                        <p className="text-[0.65rem] text-gray-400 text-center mt-5 font-medium">
                            We'll get back to you within <span className="text-[#d0a353] font-bold">24 hours</span>
                        </p>
                    </div>
                )}

                {/* ── Mail form step ── */}
                {step === "mail" && (
                    <div className="p-6">
                        <button
                            onClick={() => setStep("choose")}
                            className="flex items-center gap-1.5 text-[0.7rem] text-gray-400 hover:text-[#d0a353] mb-4 transition cursor-pointer font-medium"
                        >
                            <i className="fas fa-chevron-left text-[9px]" /> Back
                        </button>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Name */}
                            <div>
                                <label className="block text-[0.7rem] font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                    placeholder="Your name"
                                    className={`w-full border ${errors.name ? "border-red-400" : "border-gray-200"} rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition`}
                                />
                                {errors.name && <p className="text-red-500 text-[0.65rem] mt-1">{errors.name}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-[0.7rem] font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                    placeholder="+91 XXXXX XXXXX"
                                    className={`w-full border ${errors.phone ? "border-red-400" : "border-gray-200"} rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition`}
                                />
                                {errors.phone && <p className="text-red-500 text-[0.65rem] mt-1">{errors.phone}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[0.7rem] font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    placeholder="you@email.com"
                                    className={`w-full border ${errors.email ? "border-red-400" : "border-gray-200"} rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition`}
                                />
                                {errors.email && <p className="text-red-500 text-[0.65rem] mt-1">{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[0.7rem] font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    value={form.message}
                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    placeholder={`I'm interested in the ${planName} package...`}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white py-3 rounded-lg font-bold text-sm tracking-wide hover:shadow-[0_4px_20px_rgba(208,163,83,0.4)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                            >
                                <i className="fas fa-paper-plane text-xs" /> Send Message
                            </button>
                        </form>
                    </div>
                )}

                {/* ── Sending step ── */}
                {step === "sending" && (
                    <div className="p-10 flex flex-col items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full border-4 border-[#d0a353]/30 border-t-[#d0a353] animate-spin" />
                        <p className="text-gray-500 text-sm font-medium">Sending your message…</p>
                    </div>
                )}

                {/* ── Sent step ── */}
                {step === "sent" && (
                    <div className="p-8 flex flex-col items-center justify-center gap-4 text-center">
                        <div
                            className="w-16 h-16 rounded-full bg-[#fdf8ee] flex items-center justify-center"
                            style={{ animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both" }}
                        >
                            <i className="fas fa-check text-[#d0a353] text-2xl" />
                        </div>
                        <h4 className="font-heading font-bold text-lg text-gray-900">Thank you!</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We've received your message and will contact you within <strong className="text-[#d0a353]">24 hours</strong>.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-2 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:shadow-md transition cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes popIn {
                    from { opacity: 0; transform: scale(0.85) translateY(20px); }
                    to   { opacity: 1; transform: scale(1)   translateY(0); }
                }
            `}</style>
        </div>
    );
}

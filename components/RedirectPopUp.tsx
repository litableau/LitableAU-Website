import React from "react";

interface RedirectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl: string;
}

export const RedirectPopup: React.FC<RedirectPopupProps> = ({
  isOpen,
  onClose,
  redirectUrl,
}) => {
  if (!isOpen) return null;

  const handleRedirect = () => {
    window.open(redirectUrl, "_blank");
    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 backdrop-blur-sm
        px-1 sm:px-0
        animate-fadeIn
      "
    >
      {/* 🩸 Upside Down Fog */}
      <div className="absolute inset-0 bg-red-900/10 blur-3xl animate-fogPulse" />

      {/* Glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-red-700/30 via-transparent to-transparent blur-2xl" />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          relative w-full
          sm:w-[92%] max-w-md
          max-h-[95vh] sm:max-h-[90vh]
          overflow-y-auto
          rounded-2xl sm:rounded-2xl
          bg-[#0f0f0f] text-[#ece8df]
          ring-1 ring-red-700/40
          shadow-[0_0_60px_rgba(220,38,38,0.6)]
          animate-popupIn animate-upsideGlow
          -translate-y-4 sm:translate-y-0
        "
      >
        {/* Image */}
        <div className="relative h-44 sm:h-40 w-full overflow-hidden">
          <img
            src="/litablaze.png"
            alt="LitaBlaze Event"
            className="
              h-full w-full object-cover
              saturate-125 contrast-125
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-6">
          <p className="mb-2 text-center text-xs uppercase tracking-widest text-red-400 animate-flickerText">
            Official Event Portal
          </p>

          <h2 className="mb-3 text-center text-xl sm:text-xl font-semibold text-neutral-300 animate-flickerText">
            Enter LitaBlaze
          </h2>

          <p className="mb-6 text-center text-sm leading-relaxed text-[#dc2626]">
            <span className="font-semibold text-red-400">Caution:</span>{" "}
            LitaBlaze is an energetic literary event organized by the Literary
            Club of Anna University, featuring creative writing, poetry,
            debates, and vibrant literary performances.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="
                flex-1 rounded-lg border border-neutral-600
                px-4 py-3 text-sm
                transition-all duration-200
                hover:bg-neutral-800 hover:scale-[1.03]
                active:scale-95
              "
            >
              Stay on LitClub
            </button>

            <button
              onClick={handleRedirect}
              className="
                flex-1 rounded-lg bg-[#dc2626]
                px-4 py-3 text-sm font-medium text-white
                transition-all duration-200
                hover:bg-[#b91c1c]
                hover:shadow-[0_0_25px_rgba(220,38,38,0.8)]
                hover:scale-[1.03]
                active:scale-95
              "
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Rocket, CheckCircle2 } from 'lucide-react';

const EarlyAccessDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) setSuccess(false);
  }, [open]);

  const isFormValid = email.trim() !== '' && /.+@.+\..+/.test(email) && platform !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just log the values
    console.log({ email, platform });
    setSuccess(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg bg-[#232428] rounded-2xl shadow-xl p-10 flex flex-col items-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-atlas-gray-light hover:text-white text-2xl font-bold">×</button>
        {success ? (
          <div className="flex flex-col items-center justify-center h-64">
            <CheckCircle2 className="w-16 h-16 text-atlas-green-strong mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">You're on the list!</h3>
            <p className="text-atlas-gray-light text-center">Thank you for joining the Atlas Beta. We'll be in touch soon!</p>
          </div>
        ) : (
        <>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Join the Atlas Beta</h2>
        <p className="text-atlas-gray-light mb-8 text-center max-w-md">
          Together we’re building it — your feedback will shape what comes next.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg bg-atlas-gray-dark text-white border border-atlas-gray-unselected focus:border-atlas-green-strong outline-none transition-colors"
          />
          <span className="text-atlas-gray-light text-sm text-center mb-1">Choose your desired testing platform</span>
          <div className="flex gap-4 justify-center mt-2">
            <button
              type="button"
              onClick={() => setPlatform('iOS')}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all border focus:outline-none ${
                platform === 'iOS'
                  ? 'bg-atlas-green-strong/20 text-atlas-green-strong border-atlas-green-strong'
                  : 'bg-atlas-gray-dark text-atlas-gray-light border-atlas-gray-unselected hover:border-atlas-green-strong hover:text-white'
              }`}
            >
              iOS
            </button>
            <button
              type="button"
              onClick={() => setPlatform('Android')}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all border focus:outline-none ${
                platform === 'Android'
                  ? 'bg-atlas-green-strong/20 text-atlas-green-strong border-atlas-green-strong'
                  : 'bg-atlas-gray-dark text-atlas-gray-light border-atlas-gray-unselected hover:border-atlas-green-strong hover:text-white'
              }`}
            >
              Android
            </button>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="mt-2 bg-atlas-green-strong text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-atlas-green-strong/80 transition-colors flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Count Me In
            <Rocket className="w-5 h-5" />
          </button>
        </form>
        </>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessDialog;

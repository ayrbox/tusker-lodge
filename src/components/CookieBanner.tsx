"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(true); // Default to true to avoid flash before check

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie_accepted="));

    if (!cookieAccepted) {
      setIsAccepted(false);
      // Wait 5 seconds before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (e: React.MouseEvent) => {
    e.preventDefault();
    // Set cookie for 30 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `cookie_accepted=true; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;

    setIsVisible(false);
    setTimeout(() => setIsAccepted(true), 500); // Wait for transition
  };

  if (isAccepted && !isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-black text-white transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to ensure you get the best experience on our website.
          By continuing to use this site, you agree to our use of cookies.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={handleAccept}
            className="text-white underline hover:no-underline font-medium px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
          >
            Accept
          </a>
        </div>
      </div>
    </div>
  );
}

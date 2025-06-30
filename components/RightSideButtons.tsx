"use client";

import { useState, useEffect } from "react";
import { CircleChevronUp } from "lucide-react";
export default function RightSideButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`z-[80] fixed right-4 bottom-8 transform transition-all duration-300 flex flex-col space-y-4 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <CircleChevronUp
          className="w-14 h-14 md:w-16 md:h-16 text-black p-2 rounded-full hover:scale-105 transition-colors cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </>
  );
}

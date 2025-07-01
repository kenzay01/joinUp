"use client";
import Image from "next/image";
import { useState } from "react";
import homeBanner from "@/public/main_banner_bg.jpg";
import logo from "@/public/logo.jpg";
import Link from "next/link";

export default function SendRequestPage() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = [
    "Додаткові екскурсії від 550 грн",
    "Обід в літаку від 350 грн",
    "Перші місця в літаку від 350 грн",
    "Бізнес зал в аеропорту від 500 грн",
    "Тел карту GSM від 100 грн",
    "Страховку від 100 грн",
    "Смс попередження про перенесення рейсу або скасування рейсу 20 грн",
  ];

  const handleToggle = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) {
      alert("Оберіть хоча б одну опцію для замовлення.");
      return;
    }

    console.log("Замовлено додатково:", selectedOptions);
    alert("Ваші побажання збережено!");
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center text-white text-center px-4 py-4">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={homeBanner}
          alt="Ancient ruins background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Logo */}
        <Link className="mb-4" href={`/`}>
          <Image src={logo} alt="Logo" width={250} className="mx-auto" />
        </Link>

        {/* Thank you message */}
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Дякуємо за вашу заявку,
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          наш менеджер зв`яжеться з Вами найближчим часом
        </p>

        {/* Options Block */}
        <div className="bg-red-600 text-white px-4 md:px-2 py-1 font-bold animate-pulse text-4xl mb-4">
          Ви додатково можете замовити:
        </div>

        <div className="border border-yellow-500 p-4 bg-black/40 mb-6 text-left space-y-3 mx-4">
          {options.map((option, index) => (
            <label key={index} className="block">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleToggle(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}

          <p className="text-yellow-300 text-sm mt-4 italic">
            *Відзначте пункти і натисніть на кнопку замовити
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold py-3 px-6 w-full max-w-xs mx-auto block rounded"
        >
          Замовити
        </button>
      </div>
    </section>
  );
}

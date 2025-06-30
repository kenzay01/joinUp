"use client";
import { useState } from "react";
import backImg from "@/public/main_banner_bg.jpg";

export default function MainBanner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Очищаємо помилку при введенні
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
    };

    // Валідація
    if (!formData.name.trim()) {
      newErrors.name = "Будь ласка, введіть ім’я.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Будь ласка, введіть номер телефону.";
    }

    setErrors(newErrors);

    // Якщо є помилки — не відправляємо форму
    if (newErrors.name || newErrors.phone) return;

    // Успішна відправка
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: `url(${backImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 w-full mx-auto">
        <div className="flex items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="bg-orange-500/80 p-8 mb-6 pl-60">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ОТРИМАЙТЕ
                <br />
                ПЕРСОНАЛЬНИЙ ПІДБІР ТУРУ
                <br />
                ЗА 1 ГОДИНУ,{" "}
                <span className="text-blue-600">
                  УКРАЇНЦЯМ НА ПЕРІОД
                  <br />
                  ВОЄННОГО СТАНУ
                </span>
              </h2>

              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2">Акція!</h3>
                <p className="text-lg mb-2">
                  Кожному клієнту індивідуальний ПОДАРУНОК!
                </p>
                <p className="text-base mb-4">Просто заповніть форму.</p>
                <p className="text-sm opacity-90">
                  Поспішайте, акція обмежена!
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-sm border-3 border-orange-500/80 p-8 max-w-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                ЗАПОВНІТЬ <br /> ФОРМУ ЗАРАЗ
              </h3>
              <p className="text-white text-sm">
                та отримаєте 5 варіантів відпочинку
                <br />
                всього за 1 ГОДИНУ
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ім'я"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-white/90 border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3  bg-white/90 border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6  transition-colors duration-200 text-lg"
              >
                Підібрати тур
              </button>
            </form>

            <p className="text-white text-sm text-center mt-4 opacity-80">
              Наш менеджер зв'яжеться з Вами
              <br />
              найближчим часом
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

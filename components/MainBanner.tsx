"use client";
import { useState, useEffect } from "react";
import backImg from "@/public/main_banner_bg.jpg";
import { useRouter } from "next/navigation";

export default function MainBanner() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentManagersIndex, setCurrentManagersIndex] = useState(0);
  const [currentMainTitleIndex, setCurrentMainTitleIndex] = useState(0);

  const managersTexts = [
    "Досвідчені менеджери",
    "Особистий менеджер",
    "Виліт з Молдови Кишинів, Польші Краків Варшава Жешув, Литва Вільнюс",
    "Зручно",
  ];

  const mainTitleTexts = [
    "Повний супровід під час поїздки",
    "Виїзд менеджера в офіс / додому",
    "45 країн світу",
    "6 агентств в різних частинах міста",
  ];

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

    router.push("/send-request");
  };

  const smoothTransition = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    maxIndex: number
  ) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setter((prev) => (prev + 1) % maxIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  useEffect(() => {
    const managersInterval = setInterval(() => {
      smoothTransition(setCurrentManagersIndex, managersTexts.length);
    }, 4000);

    const mainTitleInterval = setInterval(() => {
      smoothTransition(setCurrentMainTitleIndex, mainTitleTexts.length);
    }, 4000);

    return () => {
      clearInterval(managersInterval);
      clearInterval(mainTitleInterval);
    };
  }, []);

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
        <div className="flex flex-col items-center mt-4 md:mt-0">
          {/* Top badge */}
          <div className="text-center mb-2 md:mb-4">
            <div className="inline-block bg-white/90 px-6 py-2 rounded-full">
              <span
                className={`text-gray-700 font-medium text-sm md:text-md transition-all duration-700 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 transform scale-95"
                    : "opacity-100 transform scale-100"
                }`}
              >
                {managersTexts[currentManagersIndex]}
              </span>
            </div>
          </div>
          <hr className="border-1 border-orange-500 w-[200px] text-center" />
          {/* Main heading */}
          <div className="text-center mb-12">
            <h1
              className={`text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-700 ease-in-out ${
                isTransitioning
                  ? "opacity-0 transform translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              {mainTitleTexts[currentMainTitleIndex]}
            </h1>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row px-8 md:px-0">
          {/* Left Content */}
          <div className="text-white">
            <div className="bg-orange-500/80 p-8 mb-6 md:pl-60">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
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

              <div className="mt-6 text-center md:text-left">
                <h3 className="text-lg md:text-2xl font-bold mb-2">Акція!</h3>
                <p className="md:text-lg mb-2">
                  Кожному клієнту індивідуальний ПОДАРУНОК!
                </p>
                <p className="text-sm md:text-base mb-4">
                  Просто заповніть форму.
                </p>
                <p className="text-sm opacity-90">
                  Поспішайте, акція обмежена!
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="bg-white/10 backdrop-blur-sm border-3 border-orange-500/80 p-8 max-w-md"
            id="form"
          >
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
              Наш менеджер зв`яжеться з Вами
              <br />
              найближчим часом
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

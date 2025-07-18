"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import photo from "@/public/onlywithus.jpg";
import photo2 from "@/public/onlywithus2.jpg";
import arrowImage from "@/public/arrow.png";
import arrowBlackImage from "@/public/arrow_black.png";
import { sendToBitrix24 } from "@/utils/sendToBitrix";

const countries = [
  "Австрія",
  "Андора",
  "Болгарія",
  "Угорщина",
  "Греція",
  "Грузія",
  "Домінікана",
  "Єгипет",
  "Індонезія",
  "Іспанія",
  "Італія",
  "Китай",
  "Куба",
  "Латвія",
  "Литва",
  "Маврикій",
  "Мальдіви",
  "Мексика",
  "ОАЕ",
  "Португалія",
  "Сейшели",
  "Таїланд",
  "Туреччина",
  "Україна",
  "Франція",
  "Чехія",
  "Шрі Ланка",
  "Естонія",
];

export default function OnlyWithUsContainer({ type }: { type?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    wishes: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);

    return () => window.removeEventListener("resize", calculateHeaderHeight);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.split("#")[1];
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          50;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const title =
    type === "type1" ? (
      <h1 className="text-center mb-6 text-black text-3xl md:text-5xl">
        <span className="text-orange-500">Акція!</span> Тільки у нас!
      </h1>
    ) : (
      <h1 className="text-center mb-6 text-orange-500 text-3xl md:text-5xl">
        Гарячий Тур
      </h1>
    );

  const photoSrc = type === "type1" ? photo : photo2;

  const content =
    type === "type1" ? (
      <p className="text-3xl md:text-5xl md:leading-14">
        Залиште заявку <span className="uppercase">сьогодні</span> і <br />
        отримаєте пляшку шампанського{" "}
        <span className="uppercase text-blue-600">для дорослих</span> <br />
        або <span className="uppercase text-blue-600">м`яку іграшку</span>{" "}
        <br />
        <span className="uppercase text-blue-600">для дитини</span> до вильоту
      </p>
    ) : (
      <p className="text-3xl md:text-5xl md:leading-14 text-black">
        Залиште заявку ЗАРАЗ і <br /> отримайте пропозицію на <br /> гарячий тур
      </p>
    );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone" && value.trim() && !value.startsWith("+380")) {
      if (/^\d/.test(value)) {
        newValue = "+380" + value.replace(/^\d+/, "");
      } else {
        newValue = value.replace(/^\+?38?0?/, "+380");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Введіть ім'я";
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Введіть телефон";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Ви ввели некоректний номер.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введіть email";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) return;

    setIsSubmitting(true);

    try {
      const result = await sendToBitrix24(formData);

      if (result.success) {
        alert(
          "Заявка успішно відправлена! Наші менеджери зв'яжуться з вами найближчим часом."
        );
        setFormData({
          name: "",
          phone: "",
          email: "",
          destination: "",
          wishes: "",
        });
      } else {
        console.error("Помилка при відправці:", result.error);
        alert(
          "Сталася помилка при відправці заявки. Будь ласка, спробуйте ще раз або зв'яжіться з нами по телефону."
        );
      }
    } catch (error) {
      console.error("Неочікувана помилка:", error);
      alert("Сталася неочікувана помилка. Будь ласка, спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formTitle =
    type === "type1"
      ? "Підібрати тур"
      : "Залиште заявку та отримайте Гарячий Тур від Join UP! To travel";

  return (
    <section className="relative pt-12 flex flex-col bg-white" id="form">
      <div className="relative z-10 w-full mx-auto flex flex-col">
        {title}
        <div className="flex flex-col-reverse md:flex-row items-center justify-end">
          <Image
            src={photoSrc}
            alt="Only With Us"
            className="h-auto md:h-64 w-auto"
          />
          <div className="text-white">
            <div
              className={`${
                type === "type1"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black text-start md:text-end"
              } md:p-12 mb-6 md:pr-55 relative p-6`}
            >
              {content}
              {type === "type1" ? (
                <Image
                  src={arrowBlackImage}
                  alt={"Стрілка"}
                  className="absolute -bottom-10 right-10 md:right-50 transform -translate-x-1/2 "
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src={arrowImage}
                  alt={"Стрілка"}
                  className="absolute -bottom-30 right-10 md:right-70 transform -translate-x-1/2 hidden md:block"
                  width={30}
                  height={30}
                />
              )}
            </div>
          </div>
        </div>
        {type === "type1" ? (
          <div className="w-full max-w-5xl self-center flex justify-center md:justify-end mt-4 md:mt-0 mb-8">
            <a
              href="#form"
              onClick={(e) => handleSmoothScroll(e, "#form")}
              className="bg-black md:py-3 py-1.5 px-2.5 md:px-5 text-lg md:text-2xl text-white"
            >
              Отримати зараз
            </a>
          </div>
        ) : null}
      </div>
      <div className="bg-slate-700 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center md:text-left">
            {formTitle}
          </h2>
          <form onSubmit={handleSubmit}>
            {type === "type1" ? (
              <>
                <div className="flex md:hidden flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex-1 min-w-[150px] max-w-[220px]">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше ім'я*"
                        className="w-full px-4 py-2 bg-white border border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 min-w-[150px] max-w-[220px]">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ваш телефон*"
                        className="w-full px-4 py-2 bg-white border border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex-1 min-w-[150px] max-w-[220px]">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ваш E-mail*"
                        className="w-full px-4 py-2 bg-white border border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 bg-white"
                      disabled={isSubmitting}
                    >
                      <option value="">Летимо в...</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Відправляємо..." : "Підібрати тур"}
                  </button>
                  <textarea
                    name="wishes"
                    value={formData.wishes}
                    onChange={handleInputChange}
                    placeholder="Ваші побажання"
                    className="w-full px-4 py-2 bg-white border border-gray-300 resize-none"
                    rows={2}
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <div className="hidden md:flex md:flex-row md:flex-wrap gap-2 justify-start">
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше ім'я*"
                      className="w-full px-4 py-2 bg-white border border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ваш телефон*"
                      className="w-full px-4 py-2 bg-white border border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ваш E-mail*"
                      className="w-full px-4 py-2 bg-white border border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 bg-white"
                      disabled={isSubmitting}
                    >
                      <option value="">Летимо в...</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Відправляємо..." : "Підібрати тур"}
                  </button>
                </div>
                <div className="hidden md:block mt-2 md:mt-2">
                  <textarea
                    name="wishes"
                    value={formData.wishes}
                    onChange={handleInputChange}
                    placeholder="Ваші побажання"
                    className="w-full px-4 py-2 bg-white border border-gray-300 resize-none"
                    rows={2}
                    disabled={isSubmitting}
                  ></textarea>
                </div>
              </>
            ) : (
              <>
                <div className="flex md:hidden flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex-1 min-w-[150px] max-w-[220px]">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше ім'я*"
                        className="w-full px-4 py-2 bg-white border border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 min-w-[150px] max-w-[220px]">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ваш телефон*"
                        className="w-full px-4 py-2 bg-white border border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex-1 min-w-[150px] max-w-[220px]">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ваш email*"
                        className="w-full px-4 py-2 bg-white border border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 bg-white"
                      disabled={isSubmitting}
                    >
                      <option value="">Летимо в...</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Відправляємо..." : "Підібрати тур"}
                  </button>
                </div>
                <div className="hidden md:flex flex-wrap gap-4 items-end justify-end">
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше ім'я*"
                      className="w-full px-4 py-2 bg-white border border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ваш телефон*"
                      className="w-full px-4 py-2 bg-white border border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ваш email*"
                      className="w-full px-4 py-2 bg-white border border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 min-w-[150px] max-w-[220px]">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 bg-white"
                      disabled={isSubmitting}
                    >
                      <option value="">Летимо в...</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 mt-4 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Відправляємо..." : "Підібрати тур"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

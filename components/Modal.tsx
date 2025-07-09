"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
// import { useRouter } from "next/navigation";
import { sendToBitrix24 } from "@/utils/sendToBitrix";

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: { name: string; phone: string }) => void;
}) {
  // const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Block scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    const newErrors = {
      name: "",
      phone: "",
    };

    // Валідація
    if (formData.name.trim() === "") {
      newErrors.name = "Поле Ваше ім'я є обов'язковим для заповнення.";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Поле Ваш телефон є обов'язковим для заповнення.";
    }

    setErrors(newErrors);

    // Якщо є помилки, не відправляємо форму
    if (newErrors.name || newErrors.phone) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Відправка до Bitrix24
      const bitrixResult = await sendToBitrix24({
        name: formData.name,
        phone: formData.phone,
        wishes: "Замовлення дзвінка через модальне вікно",
      });

      if (bitrixResult.success) {
        console.log("Форма успішно відправлена до Bitrix24");

        // Викликаємо callback якщо він переданий
        if (onSubmit) {
          onSubmit(formData);
        }

        // Очищаємо форму
        setFormData({ name: "", phone: "" });
        setErrors({ name: "", phone: "" });

        // Закриваємо модальне вікно
        onClose();

        // Перенаправляємо на сторінку подяки
        // router.push("/send-request");
      } else {
        console.error("Помилка при відправці до Bitrix24:", bitrixResult.error);
        alert("Сталася помилка при відправці форми. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Загальна помилка:", error);
      alert("Сталася помилка при відправці форми. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: "name" | "phone", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Очищуємо помилку при введенні тексту
    if (field === "name" || field === "phone") {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
      onClick={handleOverlayClick}
    >
      <div className="bg-slate-700 rounded-lg p-8 max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors p-1 bg-gray-400 rounded-full"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-medium leading-tight">
            Заповніть форму, щоб замовити дзвінок
          </h2>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Ваше ім'я*"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 bg-white border-0 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Ваш телефон*"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-4 py-3 bg-white border-0 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 font-medium py-3 px-6 rounded transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Відправляється..." : "Надіслати"}
          </button>
        </div>
      </div>
    </div>
  );
}

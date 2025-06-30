import Image from "next/image";
import logo from "@/public/logo.jpg";
import { FaTelegramPlane, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-4 border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Логотип */}
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="JoinUp Logo" className="h-50 w-auto" />
        </div>

        {/* Текст та контакти */}
        <div className="text-center md:text-right text-black text-md space-y-2">
          <p>
            м. Київ м. Академмістечко ТЦ Ашан Беличи,
            <br />
            вул. Берковецька, 6
          </p>
          <p>
            м. Київ м. Почайна ТЦ Gorodok Gallery,
            <br />
            пр-кт Степана Бандери, 23
          </p>
          <p>
            м. Київ м. Оболонь ТРЦ Караван Outlet,
            <br />
            вул. Лугова, 12
          </p>
          <a className="underline" href="tel:+380443933323">
            +38 (044) 393 33 23
          </a>

          {/* Іконки соцмереж */}
          <div className="flex justify-center md:justify-end gap-4 text-lg pt-2">
            <a
              href="#"
              aria-label="Telegram"
              className="text-white hover:scale-110 transition p-1.5 bg-[#0088cc] rounded-full"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:scale-110 transition p-1.5 bg-[#3b5998] rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:scale-110 transition p-1.5 bg-[#1da1f2] rounded-full"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

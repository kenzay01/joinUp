import Image from "next/image";
import logo from "@/public/logo.jpg";
import { FaTelegramPlane, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Логотип */}
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="JoinUp Logo" className="h-50 w-auto" />
        </div>

        {/* Текст та контакти */}
        <div className="text-center md:text-right text-black text-[10px] md:text-xs space-y-2">
          <div className="flex flex-wrap md:grid md:grid-cols-2 gap-2">
            <div>
              <p className="font-semibold">м. Київ</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                <Image src="/metro.svg" alt="Metro" width={10} height={10} />
                Мінська
              </p>
              <p>ТЦ Смарт Плаза, 1 поверх, біля повітряних кульок, Join Up</p>
            </div>
            <div>
              <p className="font-semibold">м. Київ</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                <Image src="/metro.svg" alt="Metro" width={10} height={10} />
                Шулявська
              </p>
              <p>
                ТЦ Мармелад, 1 поверх, вхід зі сторони Індустріального моста,
                вул. Борщагівська 154, Join Up
              </p>
            </div>
            <div>
              <p className="font-semibold">м. Київ</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                <Image src="/metro.svg" alt="Metro" width={10} height={10} />
                Площа Українських Героїв
              </p>
              <p>
                ТЦ Метроград, вул. Велика Васильківська 23, з метро ліворуч,
                вхід через магазин Єва, Join Up
              </p>
            </div>
            <div>
              <p className="font-semibold">м. Київ</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                <Image src="/metro.svg" alt="Metro" width={10} height={10} />
                Позняки
              </p>
              <p>
                ТЦ Піраміда, 1 поверх, біля входу зі сторони пр-ту Бажана, вул.
                Мішуги 4, Join Up
              </p>
            </div>
            <div>
              <p className="font-semibold">м. Київ</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                <Image src="/metro.svg" alt="Metro" width={10} height={10} />
                Осокорки
              </p>
              <p>
                ТЦ Аркадія, Дніпровська набережна 33, 1-й поверх, праве крило,
                біля золота, Join Up
              </p>
            </div>
            <div>
              <p className="font-semibold">м. Київ</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                <Image src="/metro.svg" alt="Metro" width={10} height={10} />
                Почайна
              </p>
              <p>
                ТЦ Gorodok Gallery, пр-т Степана Бандери 23, 1-й поверх, біля
                надувних кульок, Join Up
              </p>
            </div>
          </div>
          <a className="underline block mt-2" href="tel:+380443933323">
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

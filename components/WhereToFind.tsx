"use client";

import Image from "next/image";
import leftImage from "@/public/where_left.jpg";
import rightImage from "@/public/where_right.jpg";
import metroImg from "@/public/metro.svg";

export default function WhereToFind() {
  return (
    <section className="flex flex-col">
      <div
        className="flex flex-col md:flex-row md:h-[450px] bg-white"
        id="destinations"
      >
        {/* Ліве зображення */}
        <div className="md:flex-1 relative h-[350px] md:h-auto">
          <Image
            src={leftImage}
            alt="JoinUp Tour Office Left"
            fill
            className="object-cover"
          />
        </div>

        {/* Центральна частина */}
        <div className="md:flex-1 flex items-center justify-center bg-[#FF6600] text-white px-6 py-8">
          <div className="text-center space-y-2 text-xs md:text-sm max-w-lg">
            <h2 className="text-xl md:text-2xl font-semibold">
              Де нас можна знайти
            </h2>

            <div className="flex flex-wrap md:grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Мінська
                </p>
                <p className="text-xs md:text-sm">
                  ТЦ Смарт Плаза, 1 поверх, біля повітряних кульок, Join Up
                </p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Шулявська
                </p>
                <p className="text-xs md:text-sm">
                  ТЦ Мармелад, 1 поверх, вхід зі сторони Індустріального моста,
                  вул. Борщагівська 154, Join Up
                </p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Площа Українських Героїв
                </p>
                <p className="text-xs md:text-sm">
                  ТЦ Метроград, вул. Велика Васильківська 23, з метро ліворуч,
                  вхід через магазин Єва, Join Up
                </p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Позняки
                </p>
                <p className="text-xs md:text-sm">
                  ТЦ Піраміда, 1 поверх, біля входу зі сторони пр-ту Бажана,
                  вул. Мішуги 4, Join Up
                </p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Осокорки
                </p>
                <p className="text-xs md:text-sm">
                  ТЦ Аркадія, Дніпровська набережна 33, 1-й поверх, праве крило,
                  біля золота, Join Up
                </p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Почайна
                </p>
                <p className="text-xs md:text-sm">
                  ТЦ Gorodok Gallery, пр-т Степана Бандери 23, 1-й поверх, біля
                  надувних кульок, Join Up
                </p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>
            </div>
          </div>
        </div>

        {/* Праве зображення */}
        <div className="md:flex-1 relative h-[350px] md:h-auto">
          <Image
            src={rightImage}
            alt="JoinUp Tour Office Right"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

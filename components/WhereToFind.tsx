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
        <div className="md:flex-1 relative h-[450px] md:h-auto">
          <Image
            src={leftImage}
            alt="JoinUp Tour Office Left"
            fill
            className="object-cover"
          />
        </div>

        {/* Центральна частина */}
        <div className="md:flex-1 flex items-center justify-center bg-[#FF6600] text-white px-6 py-8">
          <div className="text-center space-y-6 text-sm md:text-base">
            <h2 className="text-xl md:text-2xl font-semibold">
              Де нас можна знайти
            </h2>

            <div className="space-y-4">
              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Академмістечко
                </p>
                <p>ТЦ Ашан Беличи, вул. Берковецька 6</p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Почайна
                </p>
                <p>ТЦ Gorodok Gallery, пр-т Степана Бандери, 23</p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>

              <div>
                <p className="font-semibold">м. Київ</p>
                <p className="flex items-center justify-center gap-2">
                  <Image src={metroImg} alt="Metro" width={16} height={16} />
                  Оболонь
                </p>
                <p>ТРЦ Караван Outlet, вул. Лугова, 12</p>
                <a href="tel:+380443933323">+38 (044) 393 33 23</a>
              </div>
            </div>
          </div>
        </div>

        {/* Праве зображення */}
        <div className="md:flex-1 relative h-[450px] md:h-auto">
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

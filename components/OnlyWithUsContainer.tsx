// "use client";
// import { useState } from "react";
import Image from "next/image";
import photo from "@/public/onlywithus.jpg";
import photo2 from "@/public/onlywithus2.jpg";

export default function OnlyWithUsContainer({ type }: { type?: string }) {
  const title =
    type === "type1" ? (
      <h1 className="text-center mb-6 text-black text-5xl">
        <span className="text-orange-500">Акція!</span> Тільки у нас!
      </h1>
    ) : (
      <h1 className="text-center mb-6 text-orange-500 text-5xl">Гарячий Тур</h1>
    );

  const photoSrc = type === "type1" ? photo : photo2;

  const content =
    type === "type1" ? (
      <p className="text-5xl leading-14">
        Залиште заявку <span className="uppercase">сьогодні</span> і <br />
        отримаєте сертифікат на <br />{" "}
        <span className="uppercase">безкоштовне таксі</span> в <br /> аеропорт і{" "}
        <span className="uppercase text-blue-600">м’яку іграшку</span> <br />
        <span className="uppercase text-blue-600">для дитини</span> до вильоту
      </p>
    ) : (
      <p className="text-5xl leading-14 text-black">
        Залиште заявку ЗАРАЗ і <br /> отримайте пропозицію на <br /> гарячий тур
        + трансфер в <br /> аеропорт
      </p>
    );
  return (
    <section className="relative py-12 flex items-center bg-white">
      <div className="relative z-10 w-full mx-auto flex flex-col ">
        {title}

        <div className="flex items-center justify-end">
          {/* Left Content */}

          <Image src={photoSrc} alt="Only With Us" className="h-64 w-auto" />

          {/* Right Content */}
          <div className="text-white">
            <div
              className={`${
                type === "type1"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black text-end"
              } p-12 mb-6 pr-55`}
            >
              {content}
            </div>
          </div>
        </div>
        {type === "type1" ? (
          <div className="w-full max-w-5xl self-center flex justify-end">
            <button className="bg-black py-3 px-5 text-2xl text-white">
              Отримати зараз
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

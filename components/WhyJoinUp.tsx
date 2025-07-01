import Image from "next/image";
import image1 from "@/public/whyJoinUs/img1.jpeg";
import image2 from "@/public/whyJoinUs/img2.jpg";
import image3 from "@/public/whyJoinUs/img3.jpg";
import logo from "@/public/logo.jpg";

export default function WhyJoinUp() {
  const textItems = [
    {
      id: 1,
      text: "Ви купуєте тур від найбільшого туроператора",
      img: image1,
    },
    {
      id: 2,
      text: "Індивідуальний підбір турів",
      img: image2,
    },
    {
      id: 3,
      text: "Вигідні умови покупки",
      img: image3,
    },
  ];

  return (
    <section className="bg-orange-500 flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center md:text-left">
        Чому Join UP! To travel?
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
        {textItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-80 h-54 mb-4 overflow-hidden rounded-lg shadow-lg">
              {/* Основне зображення */}
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="object-cover transition-opacity duration-300"
              />

              {/* Затемнення поверх зображення */}
              <div className="absolute inset-0 bg-black/50"></div>

              <p className="text-center text-white font-semibold text-lg max-w-xs z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0">
                {item.text}
              </p>

              {/* Лого, що з'являється при hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:bg-white">
                <Image
                  src={logo}
                  alt="Join UP Logo"
                  width={280}
                  height={280}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

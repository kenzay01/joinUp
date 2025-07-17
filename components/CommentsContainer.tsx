"use client";
import commentImg1 from "@/public/comments/rev-img-1.jpg";
import commentImg2 from "@/public/comments/rev-img-2.jpg";
import commentImg3 from "@/public/comments/rev-img-3.jpg";
import commentImg4 from "@/public/comments/rev-img-4.jpg";
import commentImg5 from "@/public/comments/rev-img-5.jpg";
import CommentItem from "./CommentItem";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CommentsContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const commentsContainerRef = useRef<HTMLDivElement>(null);

  const comments = [
    {
      id: 1,
      name: "Зуєва Анастасія",
      image: commentImg1,
      comment:
        "Літали з чоловіком в ОАЕ, а потім у Катар із туристичним агентством JoinUp – це було чудово! Серйозно, якість сервісу відчувалася на кожному етапі, починаючи від заявки на сайті й закінчуючи заселенням у готель!",
    },
    {
      id: 2,
      name: "Нестерова Ірина",
      image: commentImg2,
      comment:
        "Навесні літали з сім’єю до Туреччини, вирішили спробувати тур із JoinUp, тим більше, що їх порадив мій колега з роботи. За ціною вийшло чудово, сервіс, приїзд і заселення – усе без проблем. Задоволена нашим вибором! Дякую вам)",
    },
    {
      id: 3,
      name: "Тетерєв Ігор",
      image: commentImg3,
      comment:
        "Був в Італії від туристичного агентства JoinUp, готель підібрали нам чудовий, по прильоту зустріли в аеропорту й заселили. Якщо чесно, спочатку трохи бентежили ціни, бо вони трохи нижчі за середні, і я хвилювався, що можуть бути проблеми з сервісом, але ні. Відпочинок вийшов чудовим.",
    },
    {
      id: 4,
      name: "Панченко Денис",
      image: commentImg4,
      comment:
        "Вже не раз подорожував світом із туристичним агентством JoinUp, востаннє літав до Індії, щоб побачити Тадж-Махал. Усе, як завжди, на найвищому рівні. Якщо хочете відпочинок без зайвих клопотів і за адекватною вартістю, рекомендую їх.",
    },
    {
      id: 5,
      name: "Ломаков Артур",
      image: commentImg5,
      comment:
        "Літав із ними до Болгарії, вирішив обрати туристичне агентство JoinUp, бо на той момент це було найбюджетніше, а мені хотілося просто побувати в новому місці й відпочити без напруги. Не підвели, допомогли мені чудово відпочити й розслабитися, не думаючи про те, який готель забронювати і як туди дістатися.",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (commentsContainerRef.current) {
      const container = commentsContainerRef.current;
      const commentWidth =
        container.children[0]?.clientWidth || container.clientWidth;
      const scrollAmount = index * commentWidth;

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    let newIndex;
    if (direction === "left") {
      newIndex = currentIndex === 0 ? comments.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === comments.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentIndex === comments.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }, 5000); // Автопрокрутка кожні 5 секунд

    return () => clearInterval(interval);
  }, [currentIndex, comments.length]);

  return (
    <section className="bg-white flex items-center justify-center py-6 sm:py-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-6 sm:gap-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-light text-center text-black">
          Відгуки наших клієнтів
        </h2>
        <div className="relative w-full">
          <button
            onClick={() => scroll("left")}
            className="hidden sm:block absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors z-10 shadow-lg"
          >
            <ChevronLeft className="w-12 h-12 text-black" />
          </button>

          <div
            ref={commentsContainerRef}
            className="overflow-hidden w-full"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <CommentItem
                    name={comment.name}
                    image={comment.image}
                    comment={comment.comment}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden sm:block absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors z-10 shadow-lg"
          >
            <ChevronRight className="w-12 h-12 text-black" />
          </button>
        </div>

        <div className="flex space-x-2">
          {comments.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-[#FF6600]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

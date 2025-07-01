import Image from "next/image";
import logoImg from "@/public/logo.jpg";
export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Image
          src={logoImg}
          alt="Join Up Logo"
          width={400}
          height={250}
          className="h-14 md:h-28 w-auto"
        />
        <a
          href="tel:+380443933323"
          className="font-light text-lg md:text-2xl hover:underline text-black"
        >
          +38 (044) 393 33 23
        </a>
      </div>
    </header>
  );
}

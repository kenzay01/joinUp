import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import OnlyWithUsContainer from "@/components/OnlyWithUsContainer";
import SliderContainer from "@/components/SliderContainer";
import WhyJoinUp from "@/components/WhyJoinUp";
export default function Home() {
  return (
    <div>
      <Header />
      <MainBanner />
      <OnlyWithUsContainer type="type1" />
      <SliderContainer title="Гарячий Тур" />
      <SliderContainer title="Раннє Бронювання" />
      <WhyJoinUp />
      <OnlyWithUsContainer type="type2" />
    </div>
  );
}

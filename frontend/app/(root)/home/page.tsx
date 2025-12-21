import { fetchChefs, fetchDishes, fetchRestaurants, fetchTopRated } from "@/lib/api/fetch-api";
import { Card, CardType } from "@/components/card/card";
import TextButton from "@/components/text-button"; import Hero from "@/components/hero"
import { CardsSwiper } from "@/components/card-swiper";
import IconsBanner from "@/components/icons-banner";

const HomePage = async () => {
  const topRestaurants = await fetchTopRated(CardType.RESTAURANT);
  const topDishes = await fetchTopRated(CardType.DISH);
  const rest = topRestaurants[0];
  const dish = topDishes[0];


  return (
    <div className="w-full">

      <Hero title={"Epicure works with the top \n chef restaurants in Tel Aviv"} imageSrc={"/images/hero-food.png"} />

      <section className="flex-col p-page-inline space-y-3 md:px-page-inline-md md:space-y-[40px] md:px-page-inline-md md:pb-[48px]">

        <h2 className="text-section-title pt-section-homepage" >
          Popular restaurants in epicure:
        </h2>
        <CardsSwiper cards={topRestaurants} />
        <div className="mt-2 flex justify-start md:justify-end">
          <TextButton label="all restaurants" />
        </div>

        <h2 className="text-section-title pt-section-homepage" >
          Signature dish of:
        </h2>
        <CardsSwiper cards={topDishes} showIcons={true} className="md:w-[379px] md:h-[654px]" imageHightClassName="md:h-[306px]" descriptionClassName="md:h-[350px] md:space-y-[16px]" />
        <div className="mt-2 flex justify-start md:justify-end">
          <TextButton label="all restaurants" className="md:hidden" />
        </div>
      </section>
      <IconsBanner />
    </div >
  )
}

export default HomePage;


{/* <Card {...rest} className="w-[335px]" imageHightClassName="h-[207px]" descriptionClassName="px-[16px] py-[16px] space-y-[10px]" />
<Card {...dish} className="w-[335px]" imageHightClassName="h-[207px]" descriptionClassName="px-[16px] py-[16px] space-y-[10px]" /> */}
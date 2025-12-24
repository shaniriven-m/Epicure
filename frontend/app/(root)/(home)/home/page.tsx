import { fetchChefs, fetchDishes, fetchRestaurants, fetchTopRated, fetchChefOfTheWeek } from "@/lib/api/fetch-api";
import { Card, CardType } from "@/components/card/card";
import TextButton from "@/components/text-button"; import Hero from "@/components/homepage/hero"
import { CardsSwiper } from "@/components/homepage/card-swiper";
import IconsBanner from "@/components/homepage/icons-banner";
import ChefOfTheWeek from "@/components/homepage/chef-banner";

const HomePage = async () => {
  const topRestaurants = await fetchTopRated(CardType.RESTAURANT);
  const topDishes = await fetchTopRated(CardType.DISH);
  const chefOfTheWeek = await fetchChefOfTheWeek("c4");


  return (
    <div className="w-full pb-section-homepage">

      <Hero title={"Epicure works with the top \n chef restaurants in Tel Aviv"} imageSrc={"/images/hero-food.png"} />

      <section className="flex-col pl-page-inline pb-section-homepage space-y-3 md:px-page-swiper-md md:space-y-[40px] md:pb-[48px]">
        <h2 className="text-section-title uppercase pt-section-homepage whitespace-nowrap md:pt-page-inline-md" >
          Popular restaurants in epicure:
        </h2>
        <CardsSwiper cards={topRestaurants} showRating={true} className="md:w-[379px]" classNameImage="md:h-[236px]" classNameText="text-[18px] md:text-[40px]/[47px]" />
        <div className="mt-2 flex justify-start md:justify-end">
          <TextButton label="all restaurants" />
        </div>

        <h2 className="text-section-title uppercase pt-section-homepage" >
          Signature dish of:
        </h2>
        <CardsSwiper cards={topDishes} showIcons={true} className="md:w-[379px] md:h-[654px]" classNameImage="md:h-[306px]" classNameDescription="h-[236px] md:h-[350px] md:space-y-[16px]" classNameText="text-[18px] md:text-[40px]/[47px]" />
        <div className="mt-2 flex justify-start md:justify-end">
          <TextButton label="all restaurants" className="md:hidden" />
        </div>
      </section>

      <IconsBanner />

      <section className="flex-col p-page-inline py-section-homepage space-y-3 md:px-page-inline-md md:space-y-[40px] md:px-page-inline-md md:pb-[48px]">
        <ChefOfTheWeek {...chefOfTheWeek} />
        <div className="mt-2 flex justify-start md:justify-end">
          <TextButton label="all restaurants" className="md:hidden" />
        </div>
      </section>
    </div >
  )
}

export default HomePage;
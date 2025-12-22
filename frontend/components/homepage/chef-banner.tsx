import { fetchRestaurantsByChef } from "@/lib/api/fetch-api";
import { Card, CardProps } from "../card/card";
import { CardsSwiper } from "./card-swiper";

function getFirstWord(text: string): string {
    return text.trim().split(/\s+/)[0] ?? "";
}

export default async function ChefOfTheWeek(chefCard: CardProps) {
    const restaurants = await fetchRestaurantsByChef(chefCard.name);

    return (
        <div className="flex flex-col space-y-5 sm:space-y-[45px]">
            <h2 className="text-section-title uppercase pt-section-homepage" >chef of the week:</h2>
            <div className="flex flex-col gap-[24px] sm:flex-1 sm:flex-row sm:space-x-[40px]">

                <Card {...chefCard} className="w-full sm:h-[372px]" classNameText="text-[18px]/[47px]" />
                <p className="text-section-title text-[18px]/[28px] md:flex-1 md:text-left md:text-[24px]/[35px] md:pt-[20px]">
                    {chefCard.description}
                </p>
            </div>
            <p className="text-section-title uppercase pt-section-homepage">{`${chefCard.name.split(/\s+/)[0]}'s restaurants`}</p>

            <CardsSwiper cards={restaurants as CardProps[]} className="md:w-[231px] md:h-[357px]" classNameImage="md:h-[224px]" classNameDescription="h-[81px] md:h-[133px]" classNameText="sm:text-[30px]/[47px]" />
        </div >
    )
}
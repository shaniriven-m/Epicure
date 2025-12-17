import Image from "next/image";
import { Rating } from "@/components/card/rating";
import DishCardIcons, { IconType } from "./dish-card-icons";
import Price from "./price";

enum CardType {
    RESTAURANT = "restaurant",
    CHEF = "chef",
    DISH = "dish",
}


export type CardProps = {
    id: string,
    image: string,
    name: string,
    type: CardType,
    chef?: string;
    rating?: number, // desktop restaurant card only
    description?: string;
    price?: number;
    icons?: IconType[];
}



export function Card(props: CardProps) {
    return (
        <article className="w-[335px] md:w-[379px] ">

            <div className="relative w-full h-[207px] md:h-[236px]">
                <Image src={props.image} alt={props.name} fill className="object-cover" />
            </div>

            <div className="px-[16px] py-[14px] bg-secondary-100 space-y-[10px] text-left md:text-center md:space-y-[8px] md:py-[24px]">

                <h3>{props.name}</h3>

                {props.description && (
                    <h2 className="text-card">{props.description}</h2>
                )}

                {props.chef && (
                    <h2 className="text-card mb-0 md:mb-[8px]">{props.chef}</h2>
                )}

                {props.rating && (
                    <Rating value={props.rating} />
                )}

                {props.icons && (
                    <DishCardIcons icons={props.icons} />
                )}

                {props.price && (
                    <Price price={props.price} />
                )}

            </div>
        </article >
    );
}

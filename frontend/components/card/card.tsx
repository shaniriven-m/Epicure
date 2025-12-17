import Image from "next/image";
import { Rating } from "@/components/card/rating";
import DishCardIcons, { IconType } from "./dish-card-icons";
import Price from "./price";
import clsx from "clsx";

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
    className?: string;
    showIcons?: boolean;
}



export function Card(props: CardProps) {
    return (
        <article className={clsx("w-[335px]",
            props.type === CardType.RESTAURANT && "md:w-[379px]",
            props.type === CardType.DISH && "md:w-[272px] md:h-[413px] "
        )}>

            <div className={clsx("relative w-full h-[207px]",
                props.type === CardType.RESTAURANT && "md:h-[236px]",
                props.type === CardType.DISH && "md:h-[173px] "
            )}>
                <Image src={props.image} alt={props.name} fill className="object-cover" />
            </div>

            <div className={clsx("px-[16px] py-[16px] bg-secondary-100 space-y-[10px] text-left md:text-center md:space-y-[8px] md:p-[24px] md:pb-[8px]",
                props.showIcons && "space-y-[8px] md:pb-[8px]"
            )}>

                <h3 className={clsx(props.type === CardType.DISH && "md:text-[24px]/[26px]")}>
                    {props.name}
                </h3>

                {props.description && (
                    <h2 className={clsx("text-card", props.type === CardType.DISH && "md:text-[20px]/[24px]")}>
                        {props.description}
                    </h2>
                )}

                {props.chef && (
                    <h2 className="text-card mb-0 md:mb-[8px]">{props.chef}</h2>
                )}

                {props.rating && (
                    <Rating value={props.rating} />
                )}

                {props.showIcons && props.icons && (
                    <DishCardIcons icons={props.icons} />
                )}

                {props.price && (
                    <Price price={props.price} showBar={!props.showIcons} />
                )}

            </div>
        </article >
    );
}

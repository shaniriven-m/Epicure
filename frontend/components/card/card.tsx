import Image from "next/image";
import { Rating } from "@/components/card/rating";
import DishCardIcons, { IconType } from "./dish-card-icons";
import Price from "./price";
import clsx from "clsx";

export enum CardType {
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
    chef_id?: string;
    rating?: number, // desktop restaurant card only
    description?: string;
    price?: number;
    icons?: IconType[];
    className?: string;
    classNameImage?: string;
    classNameText?: string;
    classNameDescription?: string;
    showIcons?: boolean;
    showRating?: boolean;
}

export function Card(props: CardProps) {
    return (
        <article
            className={clsx(
                "w-[245px] flex flex-col",
                props.type === CardType.RESTAURANT && "md:w-[231px]",
                props.type === CardType.DISH && "md:w-[272px] md:h-[413px]",
                props.type == CardType.CHEF && "w-full md:w-[378px]",
                props.className,
            )}>

            <div
                className={clsx(
                    "relative w-full h-[157px]",
                    props.type === CardType.RESTAURANT && "md:h-[224px]",
                    props.type === CardType.DISH && "md:h-[173px]",
                    props.type === CardType.CHEF && "h-[262px] md:h-[338px]",
                    props.classNameImage,

                )}>

                <Image src={props.image} alt={props.name} fill className="object-cover" />
                {props.type === CardType.CHEF && (
                    <div className="absolute bottom-0 left-0 w-full h-[51px] bg-white/[0.75] backdrop-blur-[0px] flex items-center justify-center md:h-[78px]">
                        <h3 className={clsx("text-center", props.classNameText)}>
                            {props.name}
                        </h3>
                    </div>
                )}
            </div>

            {props.type !== CardType.CHEF && (
                <div className={clsx("flex flex-col px-[16px] py-[14px] bg-secondary-100 text-left md:text-center md:space-y-[8px] md:p-[24px]", props.showIcons && "space-y-[6px] md:pb-[8px]", props.classNameDescription)}>

                    <h3 className={clsx("text-[18px]/[30px]", props.type === CardType.DISH && "md:text-[24px]/[26px]", props.classNameText)}>
                        {props.name}
                    </h3>

                    <div className="flex flex-col md:gap-[12px]">
                        {props.description && (
                            <div className="h-[90px] order-1 md:order-2">
                                <h2 className={clsx("text-card", props.type === CardType.DISH && "md:text-[20px]/[24px]")}>
                                    {props.description}
                                </h2>
                            </div>
                        )}

                        {props.showIcons && props.icons && (
                            <div className="order-2 md:order-1">
                                <DishCardIcons icons={props.icons} />
                            </div>
                        )}
                    </div>
                    {props.chef && props.showRating && (
                        <h2 className="text-card mb-0 md:mb-[8px]">{props.chef}</h2>
                    )}

                    {props.rating && props.showRating && (
                        <Rating value={props.rating} />
                    )}


                    {props.price && (
                        <div className="mt-auto">
                            <Price price={props.price} showBar={!props.showIcons} />
                        </div>
                    )}

                </div>
            )}

        </article >
    );
}

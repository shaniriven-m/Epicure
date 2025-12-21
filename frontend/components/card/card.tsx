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
    rating?: number, // desktop restaurant card only
    description?: string;
    price?: number;
    icons?: IconType[];
    className?: string;
    classNameImage?: string;
    classNameText?: string;
    classNameDescription?: string;
    showIcons?: boolean;
}

export function Card(props: CardProps) {
    return (
        <article
            className={clsx(
                "w-[245px] flex flex-col",
                props.type === CardType.RESTAURANT && "md:w-[379px]",
                props.type === CardType.DISH && "md:w-[272px] md:h-[413px]",
                props.type == CardType.CHEF && "md:w-[378px]",
                props.className,
            )}>

            <div
                className={clsx(
                    "relative w-full h-[157px]",
                    props.type === CardType.RESTAURANT && "md:h-[236px]",
                    props.type === CardType.DISH && "md:h-[173px]",
                    props.type === CardType.CHEF && "h-[337px] md:h-[338px]",
                    props.classNameImage,

                )}>

                <Image src={props.image} alt={props.name} fill className="object-cover" />
                {props.type === CardType.CHEF && (
                    <div className="absolute bottom-0 left-0 w-full h-[78px] bg-white/[0.75] backdrop-blur-[0px] flex items-center justify-center">
                        <h3 className=" text-center">
                            {props.name}
                        </h3>
                    </div>
                )}
            </div>

            {props.type !== CardType.CHEF && (
                <div className={clsx("flex flex-col  px-[16px] py-[16px] bg-secondary-100 text-left md:text-center md:space-y-[8px] md:p-[24px]", props.showIcons && "space-y-[6px] md:pb-[8px]", props.classNameDescription)}>

                    <h3 className={clsx("text-[18px]/[30px]", props.classNameText, props.type === CardType.DISH && "md:text-[24px]/[26px]")}>
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
                        <div className="mt-auto">
                            <Price price={props.price} showBar={!props.showIcons} />
                        </div>
                    )}

                </div>
            )}

        </article >
    );
}

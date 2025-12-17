import Image from "next/image";
import clsx from "clsx";
import { Rating } from "@/components/rating";

type CardType = "restaurant" | "chef" | "dish";

type IconType = "spicy" | "vegan" | "vegetarian";

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
        <article className="w-[334px]  bg-secondary-100 md:w-[379px] ">

            <div className="relative w-full h-[207px] md:h-[236px]">
                <Image src={props.image} alt={props.name} fill className="object-cover" />
            </div>

            <div className="p-[16px] space-y-[8px] text-left md:text-center md:mt-3 md:space-y-3">

                <h3 className="md:text-[40px]">{props.name}</h3>

                {props.description && (
                    <h2>{props.description}</h2>
                )}

                {props.chef && (
                    <h2 className={clsx()}>{props.chef}</h2>
                )}

                {typeof props.rating === "number" && (
                    <div className="hidden md:flex justify-center">
                        <div className="flex items-center text-sm">
                            <Rating value={props.rating} />
                        </div>
                    </div>
                )}

                {!!props.icons?.length && (
                    <div className="flex justify-start gap-[8px] md:justify-start py-[8px]">
                        {props.icons.map((icon) => (
                            <div key={icon} className="relative w-[30px] h-[24px] shrink-0">
                                <Image
                                    src={`/icons/${icon}.svg`}
                                    alt={icon}
                                    className="object-contain"
                                    fill
                                />
                            </div>
                        ))}
                    </div>
                )}

                {typeof props.price === "number" && (
                    <div className="flex items-end gap-[3px] justify-start ">
                        <div className="relative w-[8px] h-[11px] mb-[1px]">
                            <Image
                                src="/icons/nis.svg"
                                alt="NIS"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[16px]/[19px] font-[400] tracking-[1.97px] text-primary">
                            {props.price}
                        </span>
                    </div>
                )}

            </div>


            {props.type === "chef" && (
                <h2>jj</h2>
            )}


        </article >
    );
}

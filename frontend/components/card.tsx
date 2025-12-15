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
        <article className={clsx("w-[245px] h-[232px]", "md:w-[379px] md:h-[405px]", "overflow-hidden bg-secondary-100")}>

            {props.type === "restaurant" && props.chef && typeof props.rating === "number" && (
                <>
                    <div className={clsx("relative w-full h-[153px]", "md:h-[236px]")}>
                        <Image src={props.image} alt={props.name} fill className="object-cover" />
                    </div>

                    <div className={clsx("p-4 ml-1 space-y-1 text-left", "md:text-center md:mt-3 md:space-y-3",)}>

                        <h3 className={clsx("md:text-[40px]")}>{props.name}</h3>
                        <p className="md:text-[24px]">{props.chef}</p>

                        <div className="hidden md:flex justify-center">
                            <div className="flex items-center text-sm">
                                <Rating value={props.rating} />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {props.type === "chef" && (
                <h2>{props.name}</h2>
            )}

            {props.type === "dish" && (
                <h3>{props.name}</h3>
            )}

        </article >
    );
}

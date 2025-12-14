import Image from "next/image";
import clsx from "clsx";
import { CardProps } from "@/types/card";
import { Rating } from "@/components/ui/rating";

export function Card(props: CardProps) {
    return (
        <article className={clsx("w-[245px] h-[232px]", "md:w-[379px] md:h-[405px]", "overflow-hidden bg-secondary-100")}>

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
        </article >
    );
}

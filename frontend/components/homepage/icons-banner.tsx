
import Image from "next/image";
import { IconType } from "../card/dish-card-icons";

const ICONS_CONFIG: { type: IconType; label: string; src: string }[] = [
    {
        type: IconType.SPICY,
        label: "spicy",
        src: "/icons/spicy.svg",
    },
    {
        type: IconType.VEGETARIAN,
        label: "vegetarian",
        src: "/icons/vegetarian.svg",
    },
    {
        type: IconType.VEGAN,
        label: "vegan",
        src: "/icons/vegan.svg",
    },
];

export default function IconsBanner() {
    return (
        <div className="flex flex-col items-center justify-start gap-[32px] bg-secondary-300 py-[39px]">

            <h2 className="text-section-title uppercase" >
                The meaning of our icons:
            </h2>

            <div className="flex flex-col justify-center items-center gap-[56px] md:flex-row ">
                {ICONS_CONFIG.map((icon) => (
                    <div key={icon.type} className="flex flex-col items-center gap-[32px] md:w-[136px]">
                        <div className="relative w-[46px] h-[36px] md:w-[77px] md:h-[60px]">
                            <Image
                                src={icon.src}
                                alt={icon.label}
                                className="object-contain"
                                fill
                            />
                        </div>
                        <h1 className="text-[18px]/[30px] md:text-[24px]/[30px] capitalize">{icon.label}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

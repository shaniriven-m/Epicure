import Image from "next/image";

export enum IconType {
    SPICY = "spicy",
    VEGAN = "vegan",
    VEGETARIAN = "vegetarian",
}

type DishCardIconsProps = {
    icons: IconType[];
}

export default function DishCardIcons({ icons }: DishCardIconsProps) {
    return (
        <div className="flex justify-start gap-[8px] md:justify-start py-[8px]">
            {icons.map((icon) => (
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
    )
}
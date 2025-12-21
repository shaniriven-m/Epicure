import clsx from "clsx";
import { Card, type CardProps } from "@/components/card/card"


type CardsSwiperProps = {
    cards: CardProps[];
    trackClassName?: string;
    ariaLabel?: string;
    showIcons?: boolean;
    classNameDescription?: string;
    className?: string;
    classNameImage?: string;
};

export function CardsSwiper(props: CardsSwiperProps) {

    return (
        <section className={clsx("w-full")} aria-label={props.ariaLabel}>
            <div
                className={clsx(
                    "flex w-full overflow-x-auto scroll-smooth",
                    "snap-x snap-mandatory",
                    "px-4",
                    "[-webkit-overflow-scrolling:touch]",
                    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    props.trackClassName
                )}
            >
                {props.cards.map((card) => (
                    <div key={card.id} className="shrink-0 grow-0 snap-start pr-[24px]">
                        <Card  {...card}
                            className={props.className}
                            classNameImage={props.classNameImage}
                            classNameText="text-[18px] md:text-[40px]/[47px]"
                            showIcons={props.showIcons}
                            classNameDescription={props.classNameDescription}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

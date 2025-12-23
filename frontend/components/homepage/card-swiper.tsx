import clsx from "clsx";
import { Card, type CardProps } from "@/components/card/card"


type CardsSwiperProps = {
    cards: CardProps[];
    trackClassName?: string;
    ariaLabel?: string;
    showIcons?: boolean;
    showRating?: boolean;
    classNameDescription?: string;
    className?: string;
    classNameImage?: string;
    classNameText?: string;

};

export function CardsSwiper(props: CardsSwiperProps) {

    return (
        <section className="w-full" aria-label={props.ariaLabel}>
            <div className="w-full max-w-[2015px] mx-auto">
                <div
                    className={clsx(
                        "flex overflow-x-auto scroll-smooth",
                        "snap-x snap-mandatory",
                        "px-4",
                        "[-webkit-overflow-scrolling:touch]",
                        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                        props.trackClassName
                    )}
                >
                    {props.cards.map((card: CardProps) => (
                        <div key={card.id} className="shrink-0 grow-0 snap-start pr-[24px]">
                            <Card  {...card}
                                className={props.className}
                                classNameImage={props.classNameImage}
                                classNameText={`${props.classNameText}`}
                                showIcons={props.showIcons}
                                classNameDescription={props.classNameDescription}
                                showRating={props.showRating}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

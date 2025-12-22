"use client";

import { useState } from "react";
import { Card, CardProps } from "../card/card";
import { FilterID, FILTERS_RESTAURANTS } from "./filter-constants";
import FilterBar from "./filter-bar";

type FilterSectionProps = {
    cards: CardProps[];
}

export default function FilterSection(props: FilterSectionProps) {
    const [activeFilter, setActiveFilter] = useState<FilterID>(FilterID.ALL);
    const visibleCards = props.cards;

    return (
        <div className="space-y-[16px]">
            <FilterBar
                className="md:py-section-homepage"
                activeFilter={activeFilter}
                filters={FILTERS_RESTAURANTS}
                onChange={setActiveFilter}
            />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 md:w-[1184px] ">
                    {visibleCards.map((restaurant) => (
                        <div key={restaurant.id} className="flex justify-center">
                            <Card {...restaurant} className="md:w-[379px]" titleClassName="text-[18px] md:text-[40px]/[47px]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );

}
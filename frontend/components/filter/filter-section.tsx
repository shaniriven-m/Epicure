"use client";

import { useState } from "react";
import { Card, CardProps } from "../card/card";
import { FilterID, FilterOptions, CustomFilterOptions } from "./filter-constants";
import FilterBar from "./filter-bar";
import CustomFilterBar from "./custom-filter-bar";

type FilterSectionProps = {
    cards: CardProps[];
    filters: FilterOptions[];
    advancedFilters?: CustomFilterOptions[];
}

export default function FilterSection({ cards, filters, advancedFilters }: FilterSectionProps) {
    const [activeFilter, setActiveFilter] = useState<FilterID>(FilterID.ALL);


    const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
    const [distanceRange, setDistanceRange] = useState<[number, number] | null>(null);
    const [rating, setRating] = useState<number | null>(null);

    const [visibleCards, setVisibleCards] = useState(cards);
    // add logic to display cards by activeFilter priceRange/distanceRange/rating

    return (
        <div className="space-y-[16px] md:space-y-[36px]">
            <FilterBar
                className="pb-[16px] md:pt-section-homepage md:pb-[0px]"
                activeFilter={activeFilter}
                filters={filters}
                onChange={setActiveFilter}
            />

            {advancedFilters &&
                <CustomFilterBar
                    filters={advancedFilters}
                    onPriceChange={setPriceRange}
                    onDistanceChange={setDistanceRange}
                    onRatingChange={setRating}
                />
            }

            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 md:w-[1184px] ">

                    {visibleCards.map((restaurant) => (
                        <div key={restaurant.id} className="flex justify-center">
                            <Card {...restaurant}
                                className="w-[335px] md:w-[379px]"
                                classNameText="md:text-[40px]/[47px]"
                                classNameImage="h-[207]"
                                classNameDescription="gap-[6px] md:gap[0px]"
                                showRating={true}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>

    );

}
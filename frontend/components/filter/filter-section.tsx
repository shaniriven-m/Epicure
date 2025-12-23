"use client";

import { useState } from "react";
import { Card, CardProps } from "../card/card";
import { FilterID, FilterOptions, AdvancedFilterOptions } from "./filter-constants";
import FilterBar from "./filter-bar";
import AdvancedFilterBar from "./advanced-filter-bar";

type FilterSectionProps = {
    cards: CardProps[];
    filters: FilterOptions[];
    advancedFilters?: AdvancedFilterOptions[];
}

export default function FilterSection({ cards, filters, advancedFilters }: FilterSectionProps) {
    const [activeFilter, setActiveFilter] = useState<FilterID>(FilterID.ALL);

    const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
    const [distanceRange, setDistanceRange] = useState<[number, number] | null>(null);
    const [rating, setRating] = useState<number | null>(null);

    const visibleCards = cards;

    return (
        <div className="space-y-[16px] md:space-y-[36px]">
            <FilterBar
                className="md:pt-section-homepage"
                activeFilter={activeFilter}
                filters={filters}
                onChange={setActiveFilter}
            />

            {advancedFilters &&
                <AdvancedFilterBar
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
                            <Card {...restaurant} className="md:w-[379px]" titleClassName="text-[18px] md:text-[40px]/[47px]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );

}
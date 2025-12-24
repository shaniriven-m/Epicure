'use client'

import { CustomFilterOptions } from "./filter-constants";
import Image from "next/image";
import clsx from "clsx";
import { useCustomFilterState } from "./useCustomFilterState";
import { FilterModal } from "./modal";

type CustomFilterBarProps = {
    filters: CustomFilterOptions[];
    onPriceChange: (range: [number, number]) => void;
    onDistanceChange: (range: [number, number]) => void;
    onRatingChange: (rating: number) => void;
};


export default function CustomFilterBar({ filters, onPriceChange, onDistanceChange, onRatingChange }: CustomFilterBarProps) {
    const { openModal, toggle, getSliderConfig, ratingValue, handleRatingChange } = useCustomFilterState({
        filters,
        onPriceChange,
        onDistanceChange,
        onRatingChange,
    });

    return (
        <div className="hidden md:flex w-full h-[60px] justify-center bg-secondary-300">

            {filters.map((filter) => {
                const isOpen = openModal === filter.id;
                const sliderConfig = getSliderConfig(filter);

                return (
                    <div key={filter.id} className={clsx("relative py-[18px] px-[22px] ", openModal === filter.id && "bg-button-active")}>

                        <button
                            key={filter.id}
                            type="button"
                            onClick={() => toggle(filter.id)}
                            className="flex items-center gap-[10px] whitespace-nowrap transition-all text-nav-links capitalize">
                            <span>{filter.label}</span>
                            <div className="relative flex items-center justify-center w-[24px] h-[24px]">
                                <Image
                                    src="/icons/down-arrow.svg"
                                    alt="arrow"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </button>

                        {isOpen && (
                            <FilterModal
                                filter={filter}
                                sliderConfig={sliderConfig}
                                ratingValue={ratingValue}
                                handleRatingChange={handleRatingChange}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
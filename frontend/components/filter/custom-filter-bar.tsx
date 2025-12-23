'use client'

import { CustomFilterOptions } from "./filter-constants";
import Image from "next/image";
import clsx from "clsx";
import RangeSlider from "./range-slider";
import { useCustomFilterState } from "./useCustomFilterState";

type CustomFilterBarProps = {
    filters: CustomFilterOptions[];
    onPriceChange: (range: [number, number]) => void;
    onDistanceChange: (range: [number, number]) => void;
    onRatingChange: (rating: number) => void;
};


export default function CustomFilterBar({ filters, onPriceChange, onDistanceChange }: CustomFilterBarProps) {
    const { openModal, toggle, getSliderConfig } = useCustomFilterState({
        filters,
        onPriceChange,
        onDistanceChange,
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
                            <div className="absolute left-1/2 top-full -translate-x-1/2 w-[353px] min-h-[137px] bg-white shadow-header z-20" >

                                <div className="flex flex-col h-full p-[18px] items-center justify-center gap-[6px]">
                                    <span className="text-nav-links font-[400] capitalize">
                                        {filter.title}
                                    </span>

                                    {sliderConfig && (
                                        <>
                                            <span className="flex flex-row gap-[3px] pb-[16px]">
                                                {sliderConfig.renderDetails}
                                            </span>

                                            <div className="flex flex-col justify-end pb-[18px] px-[32px] w-[309px] h-[56px] bg-range rounded-[8px]">
                                                <RangeSlider
                                                    {...sliderConfig}
                                                    values={sliderConfig.values}
                                                    min={filter.min_value}
                                                    max={filter.max_value}
                                                    step={sliderConfig.step}
                                                    onChange={sliderConfig.onChange}
                                                    renderValueLabel={sliderConfig.renderValueLabel}
                                                />
                                            </div>
                                        </>
                                    )}

                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
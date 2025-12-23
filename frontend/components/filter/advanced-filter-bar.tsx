'use client'

import { useState } from "react";
import { AdvancedFilterID, AdvancedFilterOptions } from "./filter-constants";
import Image from "next/image";

type AdvancedFilterBarProps = {
    filters: AdvancedFilterOptions[];
    onPriceChange: (range: [number, number]) => void;
    onDistanceChange: (range: [number, number]) => void;
    onRatingChange: (rating: number) => void;
};

export default function AdvancedFilterBar(props: AdvancedFilterBarProps) {

    const [openModal, setOpenModal] = useState<AdvancedFilterID>(AdvancedFilterID.NONE);

    const toggle = (type: AdvancedFilterID) => {
        setOpenModal((prev: AdvancedFilterID) =>
            (prev === type ? AdvancedFilterID.NONE : type)
        );
    };

    return (
        <div className="hidden md:flex w-full h-[60px] justify-center bg-secondary-300">

            {props.filters.map((filter) => (
                <div key={filter.id} className="relative py-[18px] px-[22px]">
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

                    {openModal === filter.id && (
                        <div className="absolute left-1/2 top-full -translate-x-1/2 w-[353px] h-[162px] bg-white shadow-header z-20 flex items-center justify-center" >
                            <span className="text-nav-links">
                                {filter.label}
                            </span>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );

}

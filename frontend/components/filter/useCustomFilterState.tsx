"use client";

import { useState, ReactNode } from "react";
import { CustomFilterID, CustomFilterOptions } from "./filter-constants";
import PriceLabel from "./price-label";
import { RangeSliderProps } from "./range-slider";

type HookArgs = {
    filters: CustomFilterOptions[];
    onPriceChange: (range: [number, number]) => void;
    onDistanceChange: (range: [number, number]) => void;
};

export function useCustomFilterState({ filters, onPriceChange, onDistanceChange, }: HookArgs) {
    const [openModal, setOpenModal] = useState<CustomFilterID>(
        CustomFilterID.NONE
    );

    const [priceValues, setPriceValues] = useState<[number, number]>(() => {
        const priceFilter = filters.find((f) => f.id === CustomFilterID.PRICE);
        if (!priceFilter) return [0, 100];
        return [priceFilter.min_value, priceFilter.max_value];
    });

    const [distanceValues, setDistanceValues] = useState<[number, number]>(() => {
        const distanceFilter = filters.find(
            (f) => f.id === CustomFilterID.DISTANCE
        );
        if (!distanceFilter) return [0, 4];
        return [distanceFilter.min_value, distanceFilter.max_value];
    });

    const toggle = (type: CustomFilterID) => {
        setOpenModal((prev) => (prev === type ? CustomFilterID.NONE : type));
    };

    const getSliderConfig = (filter: CustomFilterOptions): RangeSliderProps | null => {

        if (filter.id === CustomFilterID.PRICE) {
            return {
                min: filter.min_value,
                max: filter.max_value,
                values: priceValues,
                step: filter.step,
                renderDetails: (
                    <>
                        <PriceLabel price={priceValues[0]} />
                        <span>-</span>
                        <PriceLabel price={priceValues[1]} />
                    </>
                ),
                renderValueLabel: (value) => (
                    <PriceLabel price={value} className="font-[300]" />
                ),
                onChange: (tuple) => {
                    setPriceValues(tuple);
                    onPriceChange(tuple);
                },
            };
        }

        if (filter.id === CustomFilterID.DISTANCE) {
            return {
                min: filter.min_value,
                max: filter.max_value,
                values: distanceValues,
                step: filter.step,
                renderDetails: (<></>),
                renderValueLabel: (value) => (
                    <span className="text-price-range">{value}km</span>
                ),
                onChange: (tuple) => {
                    setDistanceValues(tuple);
                    onDistanceChange(tuple);
                },
                lockMinThumb: true,
                lockedLabel:
                    <div className="flex items-center ml-[32px] pl-[48px]">
                        <span className="text-price-range whitespace-nowrap"> My location</span>
                    </div>,
            };
        }
        return null;
    };

    return {
        openModal,
        toggle,
        getSliderConfig,
    };
}

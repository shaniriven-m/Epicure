"use client";

import clsx from "clsx";
import { FilterID, FilterOptions, AdvancedFilterID } from "./filter-constants";

type FilterBarProps = {
    activeFilter: FilterID;
    filters: FilterOptions[];
    onChange: (id: FilterID) => void;
    className?: string;
}

export default function FilterBar({ onChange, ...props }: FilterBarProps) {
    return (
        <div className={clsx("flex w-full gap-[19px] md:justify-center md:gap-[80px] ", props.className)}>
            {props.filters.map((filter) => (
                <button
                    key={filter.id}
                    type="button"
                    onClick={() => onChange?.(filter.id)}
                    className={clsx(
                        "whitespace-nowrap transition-all text-nav-links",
                        props.activeFilter === filter.id && "relative font-[400] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-rating", filter.className

                    )}
                    aria-pressed={props.activeFilter === filter.id}
                >
                    {filter.label}

                </button>
            ))}
        </div>
    );
}


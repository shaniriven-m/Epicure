export enum FilterID {
    ALL = "all",
    NEW = "new",
    POPULAR = "popular",
    OPEN = "open",
    MAP_VIEW = "map",
}

export enum AdvancedFilterID {
    PRICE = "price",
    DISTANCE = "distance",
    RATING = "rating",
    NONE = "none",
}

export type FilterOptions = {
    id: FilterID;
    label: string;
    className?: string;
}

export type AdvancedFilterOptions = {
    id: AdvancedFilterID;
    label: string;
    min_value: number;
    max_value: number;
    className?: string;
}

export const FILTERS_RESTAURANTS: FilterOptions[] = [
    { id: FilterID.ALL, label: "All" },
    { id: FilterID.NEW, label: "New" },
    { id: FilterID.POPULAR, label: "Most Popular" },
    { id: FilterID.OPEN, label: "Open Now" },
    { id: FilterID.MAP_VIEW, label: "Map View", className: "hidden md:flex" }
]

export const ADVANCED_FILTERS_RESTAURANTS: AdvancedFilterOptions[] = [
    { id: AdvancedFilterID.PRICE, label: "price range", min_value: 12, max_value: 357 },
    { id: AdvancedFilterID.DISTANCE, label: "distance", min_value: 0, max_value: 4 },
    { id: AdvancedFilterID.RATING, label: "rating", min_value: 1, max_value: 5 },
]
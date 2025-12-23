export enum FilterID {
    ALL = "all",
    NEW = "new",
    POPULAR = "popular",
    OPEN = "open",
    MAP_VIEW = "map",
}

export enum CustomFilterID {
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

export type CustomFilterOptions = {
    id: CustomFilterID;
    label: string;
    title: string;
    min_value: number;
    max_value: number;
    step?: number;
    className?: string;
}

export const FILTERS_RESTAURANTS: FilterOptions[] = [
    { id: FilterID.ALL, label: "All" },
    { id: FilterID.NEW, label: "New" },
    { id: FilterID.POPULAR, label: "Most Popular" },
    { id: FilterID.OPEN, label: "Open Now" },
    { id: FilterID.MAP_VIEW, label: "Map View", className: "hidden md:flex" }
]

export const ADVANCED_FILTERS_RESTAURANTS: CustomFilterOptions[] = [
    { id: CustomFilterID.PRICE, label: "price range", title: "price range selected", min_value: 12, max_value: 357, step: 1 },
    { id: CustomFilterID.DISTANCE, label: "distance", title: "distance", min_value: 0, max_value: 4, step: 0.25 },
    { id: CustomFilterID.RATING, label: "rating", title: "rating", min_value: 1, max_value: 5 },
]
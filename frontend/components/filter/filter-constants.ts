export enum FilterID {
    ALL = "all",
    NEW = "new",
    POPULAR = "popular",
    OPEN = "open",
}

export type FilterOptions = {
    id: FilterID;
    label: string;
}

export const FILTERS_RESTAURANTS: FilterOptions[] = [
    { id: FilterID.ALL, label: "All" },
    { id: FilterID.NEW, label: "New" },
    { id: FilterID.POPULAR, label: "Most Popular" },
    { id: FilterID.OPEN, label: "Open Now" },
]
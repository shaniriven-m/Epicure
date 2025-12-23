import { FILTERS_RESTAURANTS, ADVANCED_FILTERS_RESTAURANTS } from "@/components/filter/filter-constants";
import FilterSection from "@/components/filter/filter-section";
import { fetchRestaurants } from "@/lib/api/fetch-api";


const RestaurantsPage = async () => {
    const restaurants = await fetchRestaurants();

    return (
        <div className="w-full px-page-inline pt-page-top pb-page-bottom space-y-[16px] md:px-[0px]">
            <h2 className="text-[18px] tracking-[1.92px] pt-[6px] md:hidden">Restaurants</h2>
            <FilterSection cards={restaurants} filters={FILTERS_RESTAURANTS} advancedFilters={ADVANCED_FILTERS_RESTAURANTS} />
        </div >
    )
}

export default RestaurantsPage;
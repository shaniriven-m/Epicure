import clsx from "clsx";
import { CustomFilterID, CustomFilterOptions } from "./filter-constants";
import RangeSlider, { RangeSliderProps } from "./range-slider";
import { Rating } from "../card/rating";

type FilterMoalProps = {
    filter: CustomFilterOptions,
    sliderConfig: RangeSliderProps | null,
    ratingValue: number | null,
    handleRatingChange: (value: number) => void,


}

export function FilterModal({ filter, sliderConfig, ratingValue, handleRatingChange, ...props }: FilterMoalProps) {
    return (
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

                {filter.id === CustomFilterID.RATING && (
                    <div className="flex justify-centerw-full py-[8px]">
                        <div className="flex-col space-y-[14px]">

                            {[1, 2, 3, 4, 5].map((stars) => {
                                const isActive = ratingValue === stars;
                                return (
                                    <button
                                        key={stars}
                                        type="button"
                                        onClick={() => handleRatingChange(stars)}
                                        className="flex items-center w-full gap-[16px]"
                                    >
                                        <div className="flex items-center">
                                            <div className={clsx(
                                                "h-[18px] w-[18px] border border-[1px] border-primary flex items-center justify-center",
                                                isActive && "bg-black"
                                            )}>
                                            </div>
                                        </div>
                                        <Rating value={stars} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
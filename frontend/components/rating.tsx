import clsx from "clsx";

type RatingProps = {
    value: number;
    max?: number;
};

export function Rating({ value, max = 5 }: RatingProps) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: max }).map((_, index) => {
                const starValue = index + 1;
                const isFilled = value >= starValue;

                return (
                    <svg
                        key={index}
                        viewBox="0 0 24 24"
                        className={clsx(
                            "h-[40px] w-[40px]",
                            isFilled ? "fill-rating" : "fill-transparent",
                            "stroke-rating"
                        )}
                    >
                        <path
                            strokeWidth="2"
                            d="M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16l-6 3.4 1.5-6.5-5-4.3 6.6-.6L12 2z"
                        />
                    </svg>
                );
            })}
        </div>
    );
}

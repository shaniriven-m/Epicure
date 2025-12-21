import Image from "next/image";

type RatingProps = {
    value: number;
    max?: number;
};

enum StarIconSrc {
    FILLED = "/icons/star-filled.svg",
    EMPTY = "/icons/star-empty.svg",
}

export function Rating({ value, max = 5 }: RatingProps) {
    return (
        <div className="hidden md:flex justify-center">
            <div className="flex items-center text-sm">
                <div className="flex w-[216px] justify-evenly items-center">
                    {Array.from({ length: max }).map((_, index) => {
                        const starValue = index + 1;
                        const isFilled = value >= starValue;

                        const src = isFilled
                            ? StarIconSrc.FILLED
                            : StarIconSrc.EMPTY;

                        return (
                            <Image
                                key={index}
                                src={src}
                                alt={isFilled ? "Filled star" : "Empty star"}
                                width={40}
                                height={40}
                                className="block"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

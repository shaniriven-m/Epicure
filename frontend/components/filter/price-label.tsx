import clsx from "clsx";
import Image from "next/image";

type PriceLabelProps = {
    price: number;
    className?: string;
}

export default function PriceLabel({ price, ...props }: PriceLabelProps) {
    return (
        <div className="flex items-end gap-[2px]">
            <div className="relative w-[10px] h-[10px] mb-[3px]">
                <Image
                    src="/icons/nis.svg"
                    alt="NIS"
                    fill
                    className="object-contain"
                />
            </div>
            <span className={clsx("text-price-range", props.className)} >
                {price}
            </span>
        </div>
    );
}
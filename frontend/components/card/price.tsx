import clsx from "clsx";
import Image from "next/image";

type PriceProps = {
    price: number;
    showBar: boolean;
}

export default function Price({ price, showBar = true }: PriceProps) {
    return (
        <div className="flex w-full items-center gap-[12px] pt-[12px] justify-start md:justify-center">

            <div className="hidden md:block flex-1 h-[0.5px] bg-primary-100" />

            <div className="flex items-end gap-[2px] py-[2px] md:gap-[4px]">
                <div className="relative w-[7px] h-[7px] mb-[2px] md:w-[10px] md:h-[10px] md:mb-[6px]">
                    <Image
                        src="/icons/nis.svg"
                        alt="NIS"
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-[16px]/[19px] font-[400] tracking-[1.97px] text-primary md:text-[20px]/[30px]">
                    {price}
                </span>
            </div>

            <div className={clsx("flex-1 h-[0.5px] bg-primary-100 md:block", !showBar && "hidden")} />
        </div>
    );
}
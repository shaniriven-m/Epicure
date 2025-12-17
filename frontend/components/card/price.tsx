import Image from "next/image";

type PriceProps = {
    price: number;
}

export default function Price({ price }: PriceProps) {
    return (
        <div className="flex items-end gap-[12px] justify-start w-full">
            <div className="flex items-end gap-[2px]">
                <div className="relative w-[8px] h-[11px] mb-[1px]">
                    <Image
                        src="/icons/nis.svg"
                        alt="NIS"
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-[16px]/[19px] font-[400] tracking-[1.97px] text-primary">
                    {price}
                </span>
            </div>

            <div className="flex-1 h-[0.5px] bg-primary-100 self-center" />
        </div>
    )
}
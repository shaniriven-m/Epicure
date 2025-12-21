import Image from "next/image";

export default function SearchBox() {
    return (
        <div
            className="
                flex flex-row items-center
                w-[295px] h-[30px]
                md:w-[505px] md:h-[48px]
                py-[6px] px-[12px]
                gap-[8px]
                md:gap-[16px]
                focus-within:w-[315px]
                md:focus-within:w-[505px]
                rounded-[4px]
                outline outline-[0.5px] outline-black/70 
                transition-[width] duration-200
            "
        >
            <Image
                src="/icons/search.svg"
                alt="Search"
                width={32}
                height={32}
                className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]"
            />
            <div className="flex flex-1 h-full items-center pl-[10px]">
                <input
                    type="text"
                    placeholder="Search for restaurant cuisine, chef"
                    className="
                        h-full w-full
                        text-input 
                        placeholder:text-primary placeholder:opacity-100
                        focus:outline-none focus:ring-offset-0 focus:shadow-none focus:placeholder:opacity-20
                    "
                />
            </div>
        </div>
    )
}
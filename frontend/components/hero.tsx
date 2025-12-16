import Image from "next/image";
import SearchBox from "./search-box";

type HeroProps = {
    title?: string;
    placeholder?: string;
    imageSrc?: string;
};

export default function Hero({
    imageSrc = "/images/hero-food.png",
}: HeroProps) {
    return (
        <section >
            <div className="relative w-full overflow-hidden">

                <div className="relative w-full aspect-[1440/696] min-h-[273px]">
                    <Image
                        src={imageSrc}
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="h-[144px] w-[335px] flex flex-col justify-center items-center gap-[18px] bg-white/[0.88] backdrop-blur-[0px] px-[9px] py-[36px] md:w-[776px] md:h-[221px] md:px-[126px] md:py-[36px]">
                        <h1 className="text-center whitespace-pre-line">
                            {
                                `Epicure works with the top
                                chef restaurants in Tel Aviv`
                            }
                        </h1>
                        <SearchBox />
                    </div>
                </div>


            </div>
        </section>
    );
}


import Image
    from "next/image";
export default function IconsBanner() {
    return (
        <div className="flex flex-col items-center justify-start gap-[32px] bg-secondary-300 py-[39px]">

            <h2 className="text-section-title uppercase" >
                The meaning of our icons:
            </h2>

            <div className="flex flex-col justify-center items-center gap-[56px] md:flex-row ">

                <div className="flex flex-col items-center gap-[32px] md:w-[136px]">
                    <div className="relative w-[46px] h-[36px] md:w-[77px] md:h-[60px]">
                        <Image
                            src={`/icons/spicy.svg`}
                            alt="spicy"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <h1 className="text-[18px]/[30px] md:text-[24px]/[30px] capitalize">spicy</h1>
                </div>

                <div className="flex flex-col items-center gap-[32px] md:w-[136px]">
                    <div className="relative w-[56px] h-[56px] md:w-[77px] md:h-[60px]">
                        <Image
                            src={`/icons/vegetarian.svg`}
                            alt="spicy"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <h1 className="text-[18px]/[30px] md:text-[24px]/[30px] capitalize">vegetarian</h1>
                </div>

                <div className="flex flex-col items-center gap-[32px] md:w-[136px]">
                    <div className="relative w-[56px] h-[56px] md:w-[77px] md:h-[60px]">
                        <Image
                            src={`/icons/vegan.svg`}
                            alt="spicy"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <h1 className="text-[18px]/[30px] md:text-[24px]/[30px] capitalize">vegan</h1>
                </div>

            </div>


        </div>
    )
}

import Image from "next/image";

export default function FooterLogo() {
    return (
        <div className="relative w-[102px] h-[95px] md:w-[178px] md:h-[166px]">
            <Image
                src="/icons/about-logo.svg"
                alt="Epicure logo"
                fill
                className="object-contain"
            />
        </div>
    );
}

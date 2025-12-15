import Image from "next/image";
import clsx from "clsx";

enum StorePlatform {
    GOOGLE = "google",
    APPLE = "apple",
}

const STORE_CONFIG = {
    google: {
        src: "/icons/google-play.png",
        alt: "Get it on Google Play",
        href: "",
    },
    apple: {
        src: "/icons/app-store.png",
        alt: "Download on the App Store",
        href: "",
    },
}


function StoreButton({ platform }: { platform: StorePlatform }) {
    const store = STORE_CONFIG[platform];

    return (
        <a href={store.href} className="relative block w-[180px] h-[52px]">
            <Image
                src={store.src}
                alt={store.alt}
                fill
                sizes="180px"
                className="object-contain"
            />
        </a>
    );
}

export default function StoreButtons() {
    return (
        <>
            <div className="flex flex-col gap-4 mt-[32px] md:flex md:flex-row md:gap-4 md:mt-4">
                <StoreButton platform={StorePlatform.GOOGLE} />
                <StoreButton platform={StorePlatform.APPLE} />
            </div>
        </>
    )
}


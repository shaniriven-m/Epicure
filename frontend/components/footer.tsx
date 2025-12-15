
import FooterLinks from "@/components/footer-links"
import clsx from "clsx";
import Image from "next/image";

function StoreButton({ platform }: { platform: "google" | "apple" }) {
    const isGoogle = platform === "google";

    return (
        <button className="relative w-[180px] h-[52px]">
            <Image
                src={isGoogle ? "/icons/google-play.png" : "/icons/app-store.png"}
                alt={isGoogle ? "Get it on Google Play" : "Download on the App Store"}
                fill
                sizes="180px"
                className="object-contain"
            />
        </button>
    );
}

export default function Footer() {
    return (
        <footer className="w-full bg-secondary-300">
            <div className={clsx(
                "mx-auto flex flex-col items-start px-5 py-6",
                "md:flex-row md:items-center md:justify-between md:px-[132px]"
            )}>
                <div className={clsx(
                    "flex justify-start",
                    "md:flex-1 md:justify-end md:order-2"
                )}>
                    <div className={clsx(
                        "relative w-[102px] h-[95px]",
                        "md:w-[178px] md:h-[166px]"
                    )}>
                        <Image src="/icons/about-logo.svg" alt="Epicure logo" fill className="object-contain" />
                    </div>
                </div>

                <div className="md:flex md:flex-col md:flex-1 md:gap-[3px] md:w-[917px]">
                    <div className={clsx(
                        "flex flex-col gap-4 mt-[32px]",
                        "md:flex-row md:order-2 md:mt-4"
                    )}>
                        <div className="md:order-2">
                            <StoreButton platform="google" />
                        </div>
                        <div className="md:order-1">
                            <StoreButton platform="apple" />
                        </div>
                    </div>

                    <div className={clsx(
                        "flex flex-col my-[40px]",
                        "md:order-1 md:w-[569px] md:my-[0px]"
                    )}>
                        <h2 className={clsx(
                            "mb-[16px]",
                            "md:text-[30px] md:tracking-[2.14px]"
                        )}>
                            about us:
                        </h2>
                        <div className="md:space-y-[30px]">
                            <p className="text-footer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
                                vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
                                eros, eget blandit turpis suscipit at.
                            </p>
                            <p className="text-footer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
                                vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
                                eros, eget blandit turpis suscipit at.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <FooterLinks />
        </footer>
    );
}

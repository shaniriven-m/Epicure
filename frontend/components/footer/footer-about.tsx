import clsx from "clsx";

export default function FooterAbout() {
    return (
        <div className="flex flex-col my-[40px] md:w-[569px] md:my-[20px]">
            <h2 className="mb-[16px] text-[18px]/[35px] md:text-[30px]/[35px] md:text-left">
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

    )
}
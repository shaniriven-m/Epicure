import clsx from "clsx";

export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={clsx(
                "mx-auto w-full max-w-[375px] px-12",   // mobile
                "md:max-w-[1440px] md:px-24",          // desktop
                className
            )}
        >
            {children}
        </div>
    );
}

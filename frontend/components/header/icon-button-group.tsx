
import { HeaderActionButtons } from "./header";
import IconButton from "./icon-button";

type IconButtonGroupProps = {
    icons: HeaderActionButtons[];
    iconClassName?: string;
}


export default function IconButtonGroup({ icons, iconClassName = "w-[20px] h-[20px] md:w-[24px] md:h-[24px]" }: IconButtonGroupProps) {
    return (
        <div className="flex flex-1 items-center justify-end gap-5">
            {icons.map((iconSrc) => (
                <IconButton key={iconSrc} icon={iconSrc} iconClassName={iconClassName} />
            ))}
        </div>
    )
}

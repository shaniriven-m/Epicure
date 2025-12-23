"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { Range } from "react-range";

export type RangeSliderProps = {
    values: [number, number];
    min: number;
    max: number;
    step?: number;
    onChange: (values: [number, number]) => void;
    renderDetails?: ReactNode;
    renderValueLabel?: (value: any, index: number) => ReactNode;
    lockMinThumb?: boolean;
    lockedLabel?: ReactNode;
};

export default function RangeSlider({ step = 1, renderValueLabel, ...props }: RangeSliderProps) {
    return (
        <Range
            values={props.values}
            step={step}
            min={props.min}
            max={props.max}
            onChange={(next) => {
                if (props.lockMinThumb) {
                    props.onChange([props.min, next[1]] as [number, number]);
                } else {
                    props.onChange([next[0], next[1]] as [number, number]);
                }
            }}
            renderTrack={({ props: trackProps, children }) => (
                <div
                    onMouseDown={trackProps.onMouseDown}
                    onTouchStart={trackProps.onTouchStart}
                    className="w-full flex"
                >
                    <div
                        ref={trackProps.ref}
                        className="w-full h-[4px] self-center rounded-full bg-primary-100/50"
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props: thumbProps, index }) => {
                const { key, ...rest } = thumbProps as any;
                const isLockedThumb = props.lockMinThumb && index === 0;

                return (
                    <div
                        key={key}
                        {...rest}
                        className={clsx(
                            "relative flex items-center justify-center rounded-full",
                            isLockedThumb && "h-[13px] w-[13px] bg-range-locked-dot",
                            !isLockedThumb && "bg-black h-[23px] w-[23px]"
                        )}>
                        {isLockedThumb && props.lockedLabel && (
                            <div className="absolute -top-6 py-1 leading-none text-price-range font-[300]">
                                {props.lockedLabel}
                            </div>
                        )}
                        {!isLockedThumb && renderValueLabel && (
                            <div className="absolute -top-6 py-1 leading-none">
                                {renderValueLabel(props.values[index], index)}
                            </div>
                        )}
                    </div>
                )
            }}
        />
    )
}
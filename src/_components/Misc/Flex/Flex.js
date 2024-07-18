import React from "react";

import cva from '_utils/createVariantClassNames';


const flexVariants = cva(
    'flex',
    {
        variants: {
            direction: {
                row: '',
                column: 'flex-col',
                columnReverse: '',
                rowReverse: '',
            },
            justifyContent: {
                none: '',
                start: "",
                end: "justify-end",
                center: "justify-center",
                spaceBetween: "justify-between",
                spaceAround: "",
            },
            alignItems: {
                none: '',
                start: "items-start",
                end: "items-end",
                center: "items-center",
                spaceBetween: "",
                spaceAround: "",
            },
            width: {
                none: '',
                full: 'w-full',
                half: 'w-half',
            },
            wrap: {
                none: 'flex-nowrap',
            },
        },
        defaultVariants: {
            direction: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'full',
            wrap: '',
        }
    }
)

const Flex = ({ direction, justifyContent, alignItems, width, wrap, className, children, ...props }) => {
    const classNames = flexVariants({
        direction, justifyContent, width, wrap, alignItems,
        className,
    });

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    )
}

export default Flex;
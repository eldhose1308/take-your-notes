import React from "react";
import cva from "_utils/createVariantClassNames";

const variantsMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subheading1: "h6",
    subheading2: "h6",
    body1: "p",
    body2: "p",
  };


const typographyVariants = cva(
    'mt-1',
    {
        variants: {
            variant: {
                default: 'text-default',
                accent: 'text-accent',
                secondary: 'text-secondary',
                custom: 'text-custom',
                destructive: 'text-destructive',
                muted: 'text-default opacity-50',
            },
            size: {
                xs: "text-xs",
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
                xl: "text-xl",
            },
            textVariant: {
                default: "",
                bold: "font-bold",
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'sm',
            textVariant: 'bold'
        }
    }
)

const Typography = ({ variant, size, textVariant, type, className, children, ...props }) => {
    const classNames = typographyVariants({
        variant, size, textVariant,
        className,
    });

    const Component = variantsMapping[type] || 'p'

    return (
        <Component className={classNames} { ...props } >
            {children}
        </Component>
    )
}

export default Typography
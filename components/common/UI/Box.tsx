import {
    HTMLAttributes,
    ReactNode,
    forwardRef
} from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}


const Box = forwardRef<HTMLDivElement, BoxProps>(
    (
        {
            children,
            className = "",
            ...props
        },  
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={(className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

export default Box;
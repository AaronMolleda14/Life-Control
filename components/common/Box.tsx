import { HTMLAttributes } from "react"

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function Box({
    children,
    className,
    ...props
}: BoxProps) {
    return (
        <div
            className={(className)}
            {...props}
        >
            {children}
        </div>
    )
}
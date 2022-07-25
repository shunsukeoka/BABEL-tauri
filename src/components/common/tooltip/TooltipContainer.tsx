import clsx from 'clsx'

interface TooltipContainerProps {
    text?: string
    children: React.ReactNode
}

export const TooltipContainer: React.FC<TooltipContainerProps> = ({
    text,
    children,
    ...props
}: TooltipContainerProps) => (
    <div className="group relative w-max" {...props}>
        <div
            className={clsx(
                'absolute -top-full left-1/2 z-10 hidden w-max -translate-x-1/2 translate-y-[-13px] group-hover:block',
            )}
        >
            <div
                className="relative
                box-border
                inline-block
                h-full
                w-full
                rounded
                bg-white
                px-[10px]
                py-[6px]
                text-center
                text-xs
                text-black
                after:absolute
                after:bottom-[-7px]
                after:left-1/2
                after:h-[0]
                after:w-[0]
                after:translate-x-[-4px]
                after:border-4
                after:border-t-[6.9px]
                after:border-b-[0]
                after:border-solid
                after:border-x-transparent
                after:border-t-white
                after:border-b-transparent
                after:content-['']
            "
            >
                {text}
            </div>
        </div>
        {children}
    </div>
)

TooltipContainer.defaultProps = {
    text: '',
}

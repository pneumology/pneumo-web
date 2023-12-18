import cn from "classnames";
import { FC } from "react";

export enum ButtonType {
    Default = 0,
    Secondary = 1,
    Link = 2
}

interface Button {
    children: React.ReactNode
    type?: ButtonType
    className?: string
    onClick?: () => void
}

const Button: FC<Button> = ({ children, type, className, onClick }) => {
    if (type == ButtonType.Secondary)
        return <button className={cn("bg-white border border-black rounded-[10px] text-black py-3 w-full font-medium", className)} onClick={onClick}>
            {children}
        </button>;

    if (type == ButtonType.Link)
        return <button className={cn("underline text-black py-3 w-full font-medium", className)} onClick={onClick}>
            {children}
        </button>;

    return <button className={cn("bg-black rounded-[10px] text-white py-3 w-full font-medium", className)} onClick={onClick}>
        {children}
    </button>;
}

export default Button;

'use client'
import { FC, useState } from "react";
import Button, { ButtonType } from "./button";

interface Selector {
    selected: number,
    setSelected: (selected: number) => void
}
const Selector: FC<Selector> = ({ selected, setSelected }) => {

    return <div className="w-full h-auto flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[250px] gap-2.5">
            <Button type={selected == 0 ? ButtonType.Default : ButtonType.Link} onClick={() => setSelected(0)}>Praxis Erlangen</Button>
            <Button type={selected == 1 ? ButtonType.Default : ButtonType.Link} onClick={() => setSelected(1)}>Praxis Höchstadt/Aisch</Button>
            <Button type={selected == 2 ? ButtonType.Default : ButtonType.Link} onClick={() => setSelected(2)}>Schlaflabor Tennenlohe</Button>
        </div>
    </div>
}


export default Selector;
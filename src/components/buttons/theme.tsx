"use client"

import { useTheme } from "next-themes"
export function ThemeSwitch(){
    const {setTheme, resolvedTheme} = useTheme();
    function handleClick() {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
    return (
        <button className="z-10" onClickCapture={handleClick}>
            Switch theme
        </button>
    )
}
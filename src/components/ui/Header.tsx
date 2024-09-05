"use client";

import {motion} from "framer-motion";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import {Map, Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";
import React, {useEffect, useState} from "react";
import {useTooltip} from "@/components/ui/TooltipProvider";
import {TooltipAnchor} from "@/components/ui/Tooltip";
import {useHotkeys} from "react-hotkeys-hook";

export const Header = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
    const { addTooltip, removeTooltip } = useTooltip();

    useEffect(() => {
        setMounted(true);
    }, []);

    useHotkeys('ctrl+m', () => setTheme(theme === "dark" ? "light" : "dark"));

    return (
        <motion.div
            className={"flex flex-row justify-between items-center border-b border-zinc-300 dark:border-zinc-800 pb-4"}
            initial={{opacity: 0, filter: 'blur(10px)', y: -100}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
        >
            <div className={"flex flex-row space-x-2 items-center"}>
                <div className={"p-1 rounded-md bg-gradient-to-br from-[#2c5e3a] to-[#23eb58] text-white shadow-[#23eb58]/35 shadow-md"}>
                    <Map size={20}/>
                </div>
                <div className={"flex flex-row items-center space-x-1"}>
                    <span className={"text-lg"}>Explorations</span>
                    <span className={"text-sm text-zinc-500 pl-2"}>by</span>
                    <motion.span
                        className={"text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:underline cursor-pointer"}
                        whileHover={{y: -4}}
                        whileTap={{y: -4}}
                        onMouseEnter={(e) => addTooltip({
                            message: "Go to ahsmus.com",
                            anchor: "tc" as TooltipAnchor,
                            trigger: e.currentTarget.getBoundingClientRect()
                        })}
                        onMouseLeave={removeTooltip}
                    >
                        mvriu5
                    </motion.span>
                </div>
            </div>

            <button
                className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                type={"button"}
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    removeTooltip();
                }}
                onMouseEnter={(e) => addTooltip({
                    message: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                    anchor: "tc" as TooltipAnchor,
                    trigger: e.currentTarget.getBoundingClientRect(),
                    shortcut: "Ctrl + M"
                })}
                onMouseLeave={removeTooltip}
            >
                {mounted && theme === "dark" ? <Moon size={20}/> : <Sun size={20}/>}
            </button>
        </motion.div>
    );
}
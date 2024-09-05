"use client";

import {useTheme} from "next-themes";
import {AnimatePresence, motion} from "framer-motion";
import {Moon, Sun} from "lucide-react";
import {TooltipAnchor} from "@/components/ui/Tooltip";
import {useTooltip} from "@/components/ui/TooltipProvider";
import {useEffect, useState} from "react";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const { addTooltip, removeTooltip } = useTooltip();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
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
            <AnimatePresence mode={"wait"}>
                {mounted && (theme === "dark" ? (
                    <motion.div
                        className={""}
                        key="moon"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, y: '100%'}}
                        transition={{duration: 0.3}}
                    >
                        <Moon size={20}/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="size"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, y: '100%'}}
                        transition={{duration: 0.3}}
                    >
                        <Sun size={20}/>
                    </motion.div>
                ))}
            </AnimatePresence>
        </button>
    );
}
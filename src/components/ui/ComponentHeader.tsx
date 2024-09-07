"use client";

import {ArrowLeftFromLine, Code, RotateCcw} from "lucide-react";
import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {useRouter} from "next/navigation";
import {useHotkeys} from "react-hotkeys-hook";
import {useTooltip} from "./TooltipProvider";
import {TooltipAnchor} from "@/components/ui/Tooltip";
import Link from "next/link";
import {ThemeSwitcher} from "@/components/ui/ThemeSwitcher";

interface ComponentHeaderProps {
    title: string;
    link?: string;
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({title, link}) => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    const router = useRouter();
    const { addTooltip, removeTooltip } = useTooltip();

    useHotkeys('ctrl+m', () => setTheme(theme === "dark" ? "light" : "dark"));
    useHotkeys('ctrl+r', () => router.refresh());

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.div
            className={"flex flex-row justify-between items-center border-b border-zinc-300 dark:border-zinc-800 pb-4"}
            initial={{opacity: 0, filter: 'blur(10px)', y: -100}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
        >
            <div className={"flex flex-row space-x-2 items-center"}>
                <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"}
                        type={"button"}
                        onClick={() => {
                            removeTooltip();
                            router.replace("/");
                        }}
                        onMouseEnter={(e) => addTooltip({
                            message: "Go back",
                            anchor: "tc" as TooltipAnchor,
                            trigger: e.currentTarget.getBoundingClientRect()
                        })}
                        onMouseLeave={removeTooltip}
                >
                    <ArrowLeftFromLine size={20}/>
                </button>
                <span className={"text-lg"}>{title}</span>
            </div>

            <div className={"flex flex-row space-x-2 text-zinc-500 dark:text-zinc-400"}>
                <Link href={link || "/"} passHref>
                <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                        type={"button"}
                        onMouseEnter={(e) => addTooltip({
                            message: "View source code",
                            anchor: "tc" as TooltipAnchor,
                            trigger: e.currentTarget.getBoundingClientRect()
                        })}
                        onMouseLeave={removeTooltip}
                >
                    <Code size={20}/>
                </button>
                </Link>
                <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                        type={"button"}
                        onClick={() => router.refresh()}
                        onMouseEnter={(e) => addTooltip({
                            message: "Refresh component",
                            anchor: "tc" as TooltipAnchor,
                            shortcut: "Ctrl + R",
                            trigger: e.currentTarget.getBoundingClientRect()
                        })}
                        onMouseLeave={removeTooltip}
                >
                    <RotateCcw size={20}/>
                </button>
                <ThemeSwitcher/>
            </div>

        </motion.div>
    );
}
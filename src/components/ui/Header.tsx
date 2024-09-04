"use client";

import {motion} from "framer-motion";
import {Map, Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <motion.div
            className={"flex flex-row justify-between items-center border-b border-zinc-300 dark:border-zinc-800 pb-4"}
            initial={{opacity: 0, filter: 'blur(10px)', y: -100}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
        >
            <div className={"flex flex-row space-x-2 items-center"}>
                <Map size={20}/>
                <div className={"flex flex-row items-center space-x-1"}>
                    <span className={"text-lg"}>Explorations</span>
                    <span className={"text-sm text-zinc-500 pl-2"}>by</span>
                    <motion.span
                        className={"text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:underline cursor-pointer"}
                        whileHover={{y: -4}}
                        whileTap={{y: -4}}
                    >
                        mvriu5
                    </motion.span>
                </div>
            </div>

            <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? <Moon size={20}/> : <Sun size={20}/>}
            </button>
        </motion.div>
    );
}
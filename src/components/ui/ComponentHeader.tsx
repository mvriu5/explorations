"use client";

import {ArrowLeftFromLine, Code, Moon, RotateCcw, Sun} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";
import {useTheme} from "next-themes";
import {useRouter} from "next/navigation";

export const ComponentHeader: React.FC<{title: string}> = ({title}) => {
    const {theme, setTheme} = useTheme();
    const router = useRouter();

    return (
        <motion.div
            className={"flex flex-row justify-between items-center border-b border-zinc-300 dark:border-zinc-800 pb-4"}
            initial={{opacity: 0, filter: 'blur(10px)', y: -100}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
        >
            <div className={"flex flex-row space-x-2 items-center"}>
                <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"}
                        onClick={() => router.back()}
                >
                    <ArrowLeftFromLine size={20}/>
                </button>
                <span className={"text-lg"}>{title}</span>
            </div>

            <div className={"flex flex-row space-x-2 text-zinc-500 dark:text-zinc-400"}>
                <button className={"flex flex-row space-x-2 p-2 text-sm rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                        onClick={() => router.push("/code")}
                >
                    <Code size={20}/>
                    <span>View Code</span>
                </button>
                <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                        onClick={() => router.refresh()}
                >
                    <RotateCcw size={20}/>
                </button>

                <button className={"p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-800 hover:dark:text-white cursor-pointer"}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "dark" ? <Moon size={20}/> : <Sun size={20}/>}
                </button>
            </div>

        </motion.div>
    );
}
"use client"

import { motion } from "framer-motion";
import React, {ReactNode} from "react";

interface ComponentBoxProps {
    description: string;
    children: ReactNode
}

export const ComponentBox: React.FC<ComponentBoxProps> = ({description, children}) => {
    return (
        <motion.div
            className={"w-full flex flex-col space-y-1"}
            initial={{opacity: 0, filter: "blur(10px)", y: 100}}
            animate={{opacity: 1, filter: "blur(0px)", y: 0}}
            transition={{duration: 1}}
        >
            {description && <span className={"text-sm text-zinc-500 dark:text-zinc-400"}>{description}</span>}
            <div className={"w-full h-[600px] bg-zinc-200 dark:bg-black rounded-md border border-zinc-300 dark:border-zinc-800 flex justify-center items-center"}>
                {children}
            </div>
        </motion.div>

    );
}
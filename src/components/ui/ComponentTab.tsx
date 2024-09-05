import { motion } from "framer-motion";
import React, {HTMLAttributes, useEffect, useRef, useState} from "react";
import {cn} from "@/lib/cn";
import Particles from "@/components/ui/Particles";
import {useTheme} from "next-themes";

interface ComponentTabProps extends HTMLAttributes<HTMLDivElement>{
    title: string;
    description: string;
    date: string;
    onClick?: () => void;
    setPosition: React.Dispatch<React.SetStateAction<{ left: number; top: number; width: number; opacity: number }>>;
}

export const ComponentTab: React.FC<ComponentTabProps> = ({ title, description, date, onClick, setPosition }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={"relative z-50 group w-max flex flex-row justify-between items-center space-x-12 rounded-lg pl-4 pr-20 py-2 cursor-pointer font-medium"}
            ref={ref}
            onClick={onClick}
            initial={{opacity: 0, filter: 'blur(10px)', y: -30}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    top: ref.current.offsetTop,
                    width,
                    opacity: 1,
                });
            }}
        >
            <div className={"flex flex-col font-medium"}>
                <span className={"text-sm text-zinc-800 dark:text-zinc-300"}>{title}</span>
                <span className={"text-xs text-zinc-500 dark:text-zinc-400"}>{`${description} • ${date}`}</span>
            </div>
        </motion.div>
    );
};



export const Cursor: React.FC<{ position: {left: number, top: number, width: number, opacity: number} }> = ({ position }) => {
    return (
        <motion.div
            animate={{...position}}
            className={cn("absolute z-40 h-12 rounded-md bg-zinc-200 dark:bg-zinc-900 flex justify-end overflow-hidden")}
        >
            <Particles
                className="w-24"
                quantity={20}

            />
        </motion.div>
    );
};
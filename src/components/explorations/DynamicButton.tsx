"use client";

import React, {ReactNode, useEffect, useState} from "react";
import {cn} from "@/lib/cn";
import {useOutsideClick} from "@/lib/hooks/useOutsideClick";
import {AnimatePresence, motion} from "framer-motion";
import {Check} from "lucide-react";

interface DynamicButtonProps {
    text: string;
    description?: string;
    icon: ReactNode;
    agreeText: string;
    disagreeText: string;
    successMessage?: string;
    onAgree?: () => void;
    onDisagree?: () => void;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ text, icon, description, agreeText, disagreeText, successMessage, onAgree, onDisagree }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const menuRef = useOutsideClick(() => setIsExpanded(false));

    useEffect(() => {
        if (success) {
            setTimeout(() => setSuccess(false), 3000);
        }
    }, [success]);

    const handleAgree = () => {
        setButtonLoading(true);
        setTimeout(() => {
            setButtonLoading(false);
            setSuccess(true);
            setIsExpanded(false);
            onAgree?.();
        }, 3000);
    };

    return (
        <motion.div
            className={cn("flex flex-row space-x-2 items-center bg-zinc-100 dark:bg-zinc-900 " +
                "border border-zinc-300 dark:border-zinc-700 rounded-md overflow-hidden shadow-md",
                isExpanded && "pr-1")}
            ref={menuRef}
            animate={{ width: isExpanded ? 'auto' : 'fit-content' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {success ?
                    <motion.div
                        className={"h-10 flex flex-row items-center space-x-2 px-2 rounded-md"}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <Check size={18} className={"text-green-400"}/>
                        <span className={"text-nowrap"}>{successMessage}</span>
                    </motion.div>
                :
                    <motion.div
                        className={cn("h-10 flex flex-row items-center space-x-2 px-2 rounded-md cursor-pointer",
                            !isExpanded && "hover:bg-zinc-200 dark:hover:bg-zinc-800")}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        onClick={() => setIsExpanded(prev => !prev)}
                    >
                        {icon}
                        <span className={"text-nowrap"}>{text}</span>
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence>
                {isExpanded &&
                    <motion.div
                        className={"flex flex-row items-center space-x-2 p-1 rounded-md"}
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <span className={"text-zinc-500 text-sm text-nowrap"}>{description}</span>
                        <button
                            className={"h-6 px-2 rounded-md text-sm bg-red-500 hover:bg-red-400 text-zinc-200 hover:text-white"}
                            type={"button"}
                            onClick={() => {
                                setIsExpanded(false);
                                onDisagree?.();
                            }}
                        >
                            {disagreeText}
                        </button>
                        <button
                            className={cn("h-6 flex flex-row items-center space-x-1 px-2 bg-zinc-900 dark:bg-zinc-100 " +
                                "hover:bg-zinc-700 dark:hover:bg-zinc-300 " +
                                "text-zinc-200 dark:text-zinc-900 rounded-md text-sm",
                                buttonLoading && "bg-zinc-700 dark:bg-zinc-400 hover:bg-zinc-700 dark:hover:bg-zinc-400 cursor-not-allowed")}
                            type={"button"}
                            onClick={handleAgree}
                        >
                            {buttonLoading && <ButtonSpinner/>}
                            <span>{agreeText}</span>
                        </button>

                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    );
}

const ButtonSpinner = () => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
        className={"animate-spin h-3 w-3 text-white dark:text-zinc-800"}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
);

export {DynamicButton};
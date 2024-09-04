"use client";

import React, {useState} from "react";
import {Header} from "@/components/ui/Header";
import {ComponentTab, Cursor} from "@/components/ui/ComponentTab";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
    const [selectedComponent, setSelectedComponent] = useState<number | null>(null);
    const [position, setPosition] = useState({ left: 0, top: 0, width: 0, opacity: 0 });
    const router = useRouter();

    const components = [
        { key: 1, title: "Scheduler", description: "Create a schedule by writing natural language", date: "2024", link: "scheduler"},
        { key: 2, title: "Component 2", description: "This is a description", date: "2024", link: null},
    ];


    return (
        <div className={"flex flex-col p-4 lg:px-[25%] md:py-32 md:px-[15%]"}>
            <Header/>

            <motion.div
                initial={{opacity: 0, filter: "blur(10px)", y: 100}}
                animate={{opacity: 1, filter: "blur(0px)", y: 0}}
                transition={{duration: 1}}
            >
                <div className={"flex flex-col space-y-4 mt-16"}
                     onMouseLeave={() => setPosition({ left: position.left, top: position.top, width: position.width, opacity: 0 })}
                >
                    {components.map((component) => (
                        <ComponentTab
                            key={component.key}
                            title={component.title}
                            description={component.description}
                            date={component.date}
                            onClick={() => component.link && router.push(component.link)}
                            onMouseEnter={() => setSelectedComponent(component.key)}
                            onMouseLeave={() => setSelectedComponent(null)}
                            setPosition={setPosition}
                        />
                    ))}
                </div>
                <Cursor position={position}/>
            </motion.div>
        </div>
    );
}

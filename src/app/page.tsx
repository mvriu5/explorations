import React from "react";
import {Map} from "lucide-react";

export default function Home() {
    return (
        <div className={"flex flex-col space-y-4 p-4 lg:px-[25%] md:py-32 md:px-[15%]"}>

            <div className={"flex flex-row justify-between items-center border-b border-zinc-200 pb-4"}>
                <div className={"flex flex-row space-x-4 items-center"}>
                    <Map size={20}/>
                    <div className={"flex flex-col space-y-1"}>
                        <span className={"text-lg text-zinc-700 font-medium"}>Griller</span>
                        <span className={"hidden sm:block text-sm text-zinc-500"}>A fully customizable React Toast Component</span>
                    </div>
                </div>

                <span>Made by mvriu5</span>
            </div>
        </div>
    );
}

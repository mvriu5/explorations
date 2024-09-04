import React, {ReactNode} from "react";

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div className={"lg:px-[25%] md:py-32 md:px-[15%] bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-white"}>
            {children}
        </div>
    );
}
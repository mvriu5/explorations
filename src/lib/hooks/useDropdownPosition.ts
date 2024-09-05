import {MutableRefObject, RefObject, useEffect, useState} from "react";

const useDropdownPosition = (menuRef: RefObject<HTMLDivElement>) => {
    const [position, setPosition] = useState("left");

    useEffect(() => {
        if (menuRef.current) {
            const rect = menuRef.current.getBoundingClientRect();
            const spaceOnRight = window.innerWidth - rect.right;
            setPosition(spaceOnRight < 300 ? "right" : "left");
        }
    }, [menuRef]);

    return position;
};

export {useDropdownPosition};
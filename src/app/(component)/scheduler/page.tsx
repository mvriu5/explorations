import {ComponentBox} from "@/components/ui/ComponentBox";
import {ComponentHeader} from "@/components/ui/ComponentHeader";

export default function Scheduler() {

    return (
        <div className={"flex flex-col p-4 space-y-16"}>
            <ComponentHeader title={"Scheduler"}/>
            <ComponentBox description={"desc"}>
                <div></div>
            </ComponentBox>
        </div>
    );
}
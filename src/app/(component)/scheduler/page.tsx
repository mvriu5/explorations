import {ComponentBox} from "@/components/ui/ComponentBox";
import {ComponentHeader} from "@/components/ui/ComponentHeader";
import {Scheduler} from "@/components/explorations/Scheduler";
import {CalendarDays} from "lucide-react";

export default function SchedulerPage() {

    return (
        <div className={"flex flex-col p-4 space-y-16"}>
            <ComponentHeader title={"Scheduler"} link={"https://github.com/mvriu5/explorations/blob/master/src/components/explorations/Scheduler.tsx"}/>
            <ComponentBox description={"Select a time or a timespan whenever you want by just typing natural language."}>
                <Scheduler
                    label={"When is your meeting?"}
                    icon={<CalendarDays size={16}/>}
                />
            </ComponentBox>
        </div>
    );
}
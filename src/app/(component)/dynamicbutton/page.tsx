import {ComponentHeader} from "@/components/ui/ComponentHeader";
import {ComponentBox} from "@/components/ui/ComponentBox";
import {GitMerge} from "lucide-react";
import {DynamicButton} from "@/components/explorations/DynamicButton";

export default function DynamicButtonPage() {

    return (
        <div className={"flex flex-col p-4 space-y-16"}>
            <ComponentHeader title={"Dynamic Button"} link={"https://github.com/mvriu5/explorations/blob/master/src/components/explorations/DynamicButton.tsx"}/>
            <ComponentBox description={"This button questions your decision by giving you options to agree & deny."}>
                <DynamicButton
                    text={"Merge"}
                    icon={<GitMerge size={18}/>}
                    description={"Are you sure?"}
                    agreeText={"Merge"}
                    disagreeText={"Cancel"}
                    successMessage={"Merged successfully"}
                />
            </ComponentBox>
        </div>
    );
}
import React from "react";
import {motion} from "framer-motion";
import Manage from "@/components/manage/Manage";
import Develop from "@/components/Develop/Develop";
import Design from "@/components/Design/Design";

const Main = () => {

    return (
        <main className="flex flex-col items-center">
            <Design/>
        </main>
    )
}

export default Main
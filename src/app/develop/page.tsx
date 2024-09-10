import React from "react";
import {motion} from "framer-motion";
import Manage from "@/components/Manage/Manage";
import Develop from "@/components/Develop/Develop";
import Marquee from "@/components/Marquee/Marquee";

const Main = () => {

    return (
        <main className="flex flex-col items-center">
            <Develop/>
        </main>
    )
}

export default Main
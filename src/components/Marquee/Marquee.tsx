'use client';
import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import useStore from "@/Store";
import Card from "@/components/Card/Card";

interface MarqueeProps {
    content: any
    show: boolean
    delay: number
}

const Marquee: React.FC<MarqueeProps> = ({show, delay, content}) => {
    const trackElement = React.useRef<HTMLDivElement>(null);
    const pause= useStore((state:any)=> state.pause);
    const [isMarqueePaused, setIsMarqueePaused] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsMarqueePaused(pause);
    }, [pause]);

    React.useEffect(() => {
        if (trackElement.current) {
            trackElement.current.style.animationPlayState = isMarqueePaused ? 'paused' : 'running';
        }
    }, [isMarqueePaused]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div className={`overflow-hidden h-[100vh] w-[100vw] absolute`}
                            initial={{transform: `translateY(100vh)`, opacity: 0}}
                            animate={{transform: `translateY(0)`, opacity: 1}}
                            exit={{transform: `translateY(-100vh)`, opacity: 0}}
                            transition={{duration: 1, delay: delay}}>
                    <div className={`track`} ref={trackElement}>
                        {
                            content.map((item:any) => {
                                return (<Card key={``} title={item.name} id={item.id}/>)
                            })
                        }
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    )
        ;
};

export default Marquee;
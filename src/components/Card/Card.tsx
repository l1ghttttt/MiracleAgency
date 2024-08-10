'use strict'
import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import useStore from "@/Store";

interface CardProps {
    title: string;
    id: number;
}

const Card: React.FC<CardProps> = ({ title, id }) => {

    const [isClient, setIsClient] = React.useState(false);
    const [scale1, setScale1] = React.useState<boolean>(false);
    const [scale2, setScale2] = React.useState<boolean>(false);
    const [scale100, setScale100] = React.useState<boolean>(false);
    const [isMarqueePaused, setIsMarqueePaused] = React.useState<boolean>(false);
    const toggleZoom = useStore((state: any) => state.toggleZoom);
    const togglePause = useStore((state: any) => state.togglePause);
    const zoom = useStore((state: any) => state.zoom);
    const pause = useStore((state: any) => state.pause);
    const trackElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    let portalRoot: HTMLElement | null = null;

    if (isClient) {
        portalRoot = document.getElementById('portal');
    }

    useEffect(() => {
        setIsMarqueePaused(pause);
    }, [pause]);

    useEffect(() => {
        if (trackElement.current) {
            trackElement.current.style.animationPlayState = isMarqueePaused ? 'paused' : 'running';
        }
    }, [isMarqueePaused]);

    if (scale2 && portalRoot) {
        return ReactDOM.createPortal(
            <AnimatePresence>
                {scale2 && (
                    <motion.div
                        initial={{ transform: `translate(-50%, -50%) scale(0)`, opacity: 0 }}
                        animate={{ transform: `translate(-50%, -50%) scale(2)`, opacity: 1 }}
                        exit={{ transform: `translate(-50%, -50%) scale(0)`, opacity: 0 }}
                        transition={{ duration: 1 }}
                        key={id}
                        onClick={() => {
                            if (!zoom) {
                                toggleZoom(true);
                            }
                            if (!scale1) {
                                setScale1(true);
                            }
                        }}
                        className={`w-[400px] absolute left-[50%] top-[50%] delay-500 duration-500 aspect-video border-solid border-2 border-white bg-[#404040] flex justify-center items-center font-bold text-[32px] text-[#ffffff]`}>
                        {title}
                        <div
                            className={`absolute top-0 left-0 bg-[#000000] rounded-br-full w-[40px] h-[40px] pl-[5px] pt-[7px] hover:w-[45px] hover:h-[45px] hover:pl-[8px] hover:pt-[10px] duration-200`}>
                            <Image src={`/arrowleftbold.svg`} alt={``} width={`25`} height={`10`} onClick={() => {
                                setScale1(false);
                                setScale2(false);
                                toggleZoom(false);
                                setScale100(false);
                                togglePause(false);
                            }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>,
            portalRoot
        );
    }

    if (scale1) {
        setTimeout(() => {
            setScale100(true);
        }, 500);
        togglePause(true);
    }

    return (
        <div key={id}
             onClick={() => {
                 if (!zoom) {
                     setScale1(true);
                     setTimeout(() => setScale2(true), 500);
                 }
                 toggleZoom(true);
             }}
             className={`w-[400px] ${scale100 ? `hidden` : `flex`} ${scale1 && `scale-110`} duration-500 aspect-video border-solid border-2 border-white bg-[#404040] flex justify-center items-center font-bold text-[32px] text-[#ffffff]`}>
            {title}
        </div>
    );
};

export default Card;
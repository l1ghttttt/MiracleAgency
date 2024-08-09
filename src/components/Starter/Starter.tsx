'use client'
import Image from "next/image";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {useRef} from "react";
import React from 'react';
import useStore from "@/Store";
import Lottie from "lottie-react";
import StarAnimka from "../../../public/StarAnimka.json";

const Starter = () => {
    const toggleCatalog = useStore((state:any)=> state.toggleCatalog);
    const logo = useRef<HTMLDivElement>(null);
    const miracle = useRef<HTMLParagraphElement>(null);
    const agency = useRef<HTMLParagraphElement>(null);
    const styling = useRef<HTMLParagraphElement>(null);
    const arrow = useRef<HTMLImageElement>(null);
    const arrowCont = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (logo.current !== null) {
            logo.current.style.transform = `translateX(${latest}px)`;
            if (latest > 100) {
                logo.current.style.opacity = `0`;
            } else {
                logo.current.style.opacity = `1`;
            }
        }
        if (miracle.current !== null) {
            miracle.current.style.transform = `translateX(-${latest}px)`;
            if (latest > 100) {
                miracle.current.style.opacity = `0`;
            } else {
                miracle.current.style.opacity = `1`;
            }
        }
        if (agency.current !== null) {
            agency.current.style.transform = `translateX(${latest}px)`;
            if (latest > 100) {
                agency.current.style.opacity = `0`;
            } else {
                agency.current.style.opacity = `1`;
            }
        }
        if (styling.current !== null) {
            styling.current.style.transform = `translateX(-${latest}px)`;
            if (latest > 100) {
                styling.current.style.opacity = `0`;
            } else {
                styling.current.style.opacity = `1`;
            }
        }
        if (arrow.current !== null) {
            arrow.current.style.transform = `translateY(-${latest}px)`;
            if (latest > 100) {
                arrow.current.style.opacity = `0`;
            }
        }
    })

    setTimeout(() => {toggleCatalog(true)}, 1000)

    return (
            <div className={`w-[100vw] h-[100vh] select-none relative overflow-hidden`}>
                <div className={`absolute flex flex-col top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2`}>
                    <div className={`flex items-end justify-between`}>
                        <motion.div initial={{transform: "translateX(-500px)", opacity: 0, filter: `blur(3px)`}}
                                    animate={{transform: "translateX(0)", opacity: 1, filter: `blur(0)`}}
                                    transition={{duration: 1, ease: [0.04, 0.77, 0.17, 1.00]}}
                        >
                            <p className={`text-[96px] font-bold tracking-wider align-sub flex items-end leading-[96px] duration-500`}
                               ref={miracle}>Miracle</p>
                        </motion.div>
                        <motion.div initial={{opacity: 0, filter: `blur(3px)`}}
                                    animate={{opacity: 1, filter: `blur(0)`}}
                                    transition={{duration: 1, ease: [0.04, 0.77, 0.17, 1.00]}}
                        >
                            <div className={`flex duration-500`} ref={logo}>
                                <Lottie animationData={StarAnimka} loop={false} className={`rotate-[-15deg] w-[200px] h-[200px] translate-x-[-2.5vw] -translate-y-[-5vh]`}/>
                            </div>
                        </motion.div>
                    </div>
                    <div className={`flex gap-[50px] items-start`}>
                        <div className={`flex flex-col duration-500`} ref={styling} >
                            <div className={`overflow-hidden`}>
                                <motion.div initial={{transform: "translateY(50px)", filter: `blur(3px)`}}
                                            animate={{transform: "translateY(0)", filter: `blur(0)`}}
                                            transition={{duration: 1, ease: [0.04, 0.77, 0.17, 1.00]}}
                                            className={`overflow-hidden`}>
                                    <p className={`text-[30px] font-semibold leading-[30px]`}>стильно и</p>
                                </motion.div>
                            </div>
                            <div className={`overflow-hidden`}>
                                <motion.div initial={{transform: "translateY(50px)", filter: `blur(3px)`}}
                                            animate={{transform: "translateY(0)", filter: `blur(0)`}}
                                            transition={{duration: 1, ease: [0.04, 0.77, 0.17, 1.00]}}
                                            className={`overflow-hidden`}>
                                    <p className={`text-[30px] font-semibold leading-[30px]`}>прибыльно</p>
                                </motion.div>
                            </div>

                        </div>

                        <motion.div initial={{transform: "translateX(500px)", opacity: 0, filter: `blur(3px)`}}
                                    animate={{transform: "translateX(0)", opacity: 1, filter: `blur(0)`}}
                                    transition={{duration: 1, ease: [0.04, 0.77, 0.17, 1.00]}}
                        >
                            <p className={`text-[96px] font-bold tracking-wider leading-[70px] duration-500`} ref={agency}>agency</p>
                        </motion.div>
                    </div>
                </div>

                <div className={`absolute left-[50%] top-[100%] -translate-x-1/2 -translate-y-full pb-[3vh]`}>
                    <motion.div initial={{transform: "translateY(350px)", opacity: 0, filter: `blur(3px)`}}
                                animate={{transform: "translateY(0)", opacity: 1, filter: `blur(0)`}}
                                transition={{duration: 1, ease: [0.04, 0.77, 0.17, 1.00]}}
                                ref={arrowCont}
                    >
                            <Image ref={arrow} src="/arrow_down.svg" loading={`lazy`} width={`350`} height={`350`} alt={""} className={`duration-500`}/>
                    </motion.div>
                </div>


            </div>
    );
};

export default Starter;
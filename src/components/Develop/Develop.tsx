'use client'
import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Marquee from "@/components/Marquee/Marquee";
import useStore from "@/Store";

const ContinueManage = () => {

    const zoom = useStore((state:any)=> state.zoom)
    const content= useStore((state:any)=> state.Content);
    const [show, setShow] = React.useState<boolean>(true);
    const router = useRouter();
    const [delay, setDelay] = React.useState<number>(1);
    setTimeout(() => {setDelay(0)}, 1000)
    const toggleZoom = useStore((state:any)=> state.toggleZoom);
    const toggleOut = useStore((state:any)=> state.toggleOut);

    return (
        <>
            <Marquee show={show} delay={delay} content={content}/>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{transform: `translateY(-150%)`, opacity: 0}}
                        animate={{transform: `translateY(0)`, opacity: 1}}
                        exit={{transform: `translateY(-150%)`, opacity: 0}}
                        transition={{duration: 1, delay: delay}}
                        className="absolute top-[25px] left-[25px]">
                        <Image
                            src="/arrowleft.svg"
                            loading={`lazy`}
                            width={`95`}
                            height={`45`} alt={""}
                            className={`hoverEffectArrow duration-500 pb-[20px]`}
                            onClick={() => {
                                setShow(false)
                                toggleOut(false)
                                setTimeout(() => {
                                    router.push("/#catalog")
                                    toggleOut(true)
                                }, 1000)
                                toggleZoom(false)
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {show && (
                    <motion.aside
                        initial={{transform: `translateX(-50%) translateY(60vw)`, opacity: 0}}
                        animate={{transform: `translateX(-50%) translateY(-50%) ${zoom ? `scale(0.5)` : `scale(1)`}`, opacity: 1}}
                        exit={{transform: `translateX(-50%) translateY(60vw)`, opacity: 0}}
                        transition={{duration: 1}}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 top-[${zoom ? `50%` : `50%`}] ${zoom ? `left-[300px]` : `left-[50%]`} flex flex-col items-center justify-between gap-[40px] p-[2%] w-[600px] aspect-[1.2] bg-[#888888] bg-cover hover:z-[50] duration-500 `}>
                        <h2 className={`font-semibold text-[40px] text-[#ffffff]`}>Ведение существующего</h2>
                        <p className={`font-medium text-[22px] w-[100%] text-start text-[#ffffff]`}>Lorem ipsum dolor
                            sit
                            amet, consectetur adipisicing elit. Fugiat fugit libero quam rem sit, velit vitae. Ab
                            adipisci,
                            aut corporis ea nemo officiis omnis placeat quisquam repellat sed. Consequuntur, ratione?
                            Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere id impedit ipsam porro
                            quasi quos sunt unde. Aut, beatae dolor eius eligendi et fuga labore officiis unde veritatis
                            voluptatum.</p>
                        <button
                            className={`text-[#ffffff] button-animation relative h-[75px] rounded-[10px] w-[60%] flex justify-center items-center font-semibold text-[24px] border-solid border-[#ffffff] border-[2px]`}>
                            <span className={`z-[20] duration-100`}>Связаться с нами</span>
                        </button>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>

    );
};

export default ContinueManage;
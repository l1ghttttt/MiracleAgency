'use client'
import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Marquee from "@/components/Marquee/Marquee";
import useStore from "@/Store";

const Manage = () => {
    const content= useStore((state:any)=> state.Content);
    const [show, setShow] = React.useState(true);
    const router = useRouter();
    const [delay, setDelay] = React.useState(1);
    setTimeout(() => {setDelay(0)}, 1000)
    return (
        <>
            <Marquee side={`left`} show={show} delay={delay} content={content}/>
            <Marquee side={`right`} show={show} delay={delay} content={content}/>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{transform: `translateY(-150%) rotate(180deg)`, opacity: 0}}
                        animate={{transform: `rotate(180deg)`, opacity: 1}}
                        exit={{transform: `translateY(-150%) rotate(180deg)`, opacity: 0}}
                        transition={{duration: 1, delay: delay}}>
                        <Image
                            src="/arrow_down.svg"
                            loading={`lazy`}
                            width={`350`}
                            height={`350`} alt={""}
                            className={`hoverEffectArrow duration-500 pb-[20px]`}
                            onClick={() => {
                                setTimeout(() => {
                                    router.push("/#catalog")
                                }, 1000)
                                setShow(false)
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {show && (
                    <motion.aside
                        initial={{transform: `translateX(-50%) translateY(60vw)`, opacity: 0}}
                        animate={{transform: `translateX(-50%) translateY(-50%)`, opacity: 1}}
                        exit={{transform: `translateX(-50%) translateY(60vw)`, opacity: 0}}
                        transition={{duration: 1}}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] flex flex-col items-center justify-between gap-[40px] p-[2%] w-[600px] aspect-[1.2] bg-[#000000] bg-cover hover:z-[50] duration-100 `}>
                        <h2 className={`font-semibold text-[40px] text-[#ffffff]`}>Дизайн</h2>
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

export default Manage;
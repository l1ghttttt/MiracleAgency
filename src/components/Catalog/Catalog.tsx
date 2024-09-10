'use client'

import React from 'react';
import {useMotionValueEvent, useScroll, motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/navigation";
import Image from "next/image";

const Catalog = () => {
    const [show, setShow] = React.useState(false);
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= window.innerHeight * 0.4) {
            setShow(true);
        } else {
            setShow(false);
        }
    })
    const router = useRouter();

    return (
        <section className={`w-[100vw] h-[100vh] relative`} id={`catalog`}>
            <div className={`absolute flex flex-col  top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 `}>
                <div className={`flex`}>
                    <AnimatePresence>z
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(-100px) translateY(-100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(-100px) translateY(-100px)`, opacity: 0}}
                                transition={{duration: .8}}
                                className={`hoverEffect flex flex-col items-end justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[#C59F3D] bg-cover hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/manage")}, 800)
                                    setShow(false)
                                }}>
                                <Image src={'/Programming.svg'} alt={'Programming'} width={200} height={200}/>
                                <h2 className={`font-semibold w-[100%] text-start text-[22px] text-[#ffffff]`}>Программирование</h2>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(100px) translateY(-100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(100px) translateY(-100px)`, opacity: 0}}
                                transition={{duration: .8}}
                                className={`hoverEffect flex flex-col items-end justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[#E14662] bg-cover hover:scale-110 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/develop")}, 800)
                                    setShow(false)
                                }}>
                                <Image src={'/Business.svg'} alt={'Programming'} width={200} height={200}/>
                                <h2 className={`font-semibold w-[100%] text-start text-[22px] text-[#ffffff]`}>Ведение бизнеса</h2>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className={`flex`}>
                    <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(-100px) translateY(100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(-100px) translateY(100px)`, opacity: 0}}
                                transition={{duration: .8}}
                                className={`hoverEffect flex flex-col items-end justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[#8146E1] bg-cover hover:scale-110 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/design")}, 800)
                                    setShow(false)
                                }}>
                                <Image src={'/Design.svg'} alt={'Programming'} width={220} height={220}/>
                                <h2 className={`font-semibold w-[100%] text-start text-[22px] text-[#ffffff]`}>Дизайн</h2>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(100px) translateY(100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(100px) translateY(100px)`, opacity: 0}}
                                transition={{duration: .8}}
                                className={`hoverEffect flex flex-col items-end justify-center p-[3%] w-[20vw] aspect-[1.33] bg-[#4697E1] bg-cover hover:scale-110 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/continue_manage")}, 800)
                                    setShow(false)
                                }}>
                                <Image src={'/MVP.svg'} alt={'Programming'} width={220} height={220}/>
                                <h2 className={`font-semibold w-[100%] text-start text-[22px] text-[#ffffff]`}>Создание MVP</h2>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
};

export default Catalog;
'use client'

import React from 'react';
import {useMotionValueEvent, useScroll, motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/navigation";

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
                    <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(-100px) translateY(-100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(-100px) translateY(-100px)`, opacity: 0}}
                                transition={{duration: 1}}
                                className={`hoverEffect flex flex-col items-start justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[url('/business.jpg')] bg-cover grayscale hover:grayscale-0 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/manage")}, 1000)
                                    setShow(false)
                                }}>
                                <h2 className={`font-semibold text-[30px] text-[#ffffff]`}>Ведение</h2>
                                <p className={`font-medium text-[24px] text-[#ffffff]`}>Подробнее →</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(100px) translateY(-100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(100px) translateY(-100px)`, opacity: 0}}
                                transition={{duration: 1}}
                                className={`hoverEffect flex flex-col items-start justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[url('/sites.jpg')] bg-cover grayscale hover:grayscale-0 hover:scale-110 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/develop")}, 1000)
                                    setShow(false)
                                }}>
                                <h2 className={`font-semibold text-[30px] text-[#ffffff]`}>Разработка</h2>
                                <p className={`font-medium text-[24px] text-[#ffffff]`}>Подробнее →</p>
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
                                transition={{duration: 1}}
                                className={`hoverEffect flex flex-col items-start justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[url('/design.jpg')] bg-cover grayscale hover:grayscale-0 hover:scale-110 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/design")}, 1000)
                                    setShow(false)
                                }}>
                                <h2 className={`font-semibold text-[30px] text-[#ffffff]`}>Дизайн</h2>
                                <p className={`font-medium text-[24px] text-[#ffffff]`}>Подробнее →</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{transform: `translateX(100px) translateY(100px)`, opacity: 0}}
                                animate={{transform: `none`, opacity: 1}}
                                exit={{transform: `translateX(100px) translateY(100px)`, opacity: 0}}
                                transition={{duration: 1}}
                                className={`hoverEffect flex flex-col items-start justify-between p-[3%] w-[20vw] aspect-[1.33] bg-[url('/control.jpg')] bg-cover grayscale hover:grayscale-0 hover:scale-110 hover:z-[50] duration-100`}
                                onClick={() => {
                                    setTimeout(() => {router.push("/continue_manage")}, 1000)
                                    setShow(false)
                                }}>
                                <h2 className={`font-semibold text-[24px] text-[#ffffff]`}>Ведение и развитие <br/> существующих проектов</h2>
                                <p className={`font-medium text-[24px] text-[#ffffff]`}>Подробнее →</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
};

export default Catalog;
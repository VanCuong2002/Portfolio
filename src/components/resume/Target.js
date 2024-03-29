import React from "react";
import { motion } from "framer-motion";

const Target = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <section className="p-6 bg-teal-800 dark:text-gray-100 rounded-xl">
                    <div className="container mx-auto ">
                        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">
                            Set goals
                        </span>
                        <h2 className="text-5xl font-bold text-center dark:text-gray-50">
                            Try to achieve the goal
                        </h2>
                        <div className="grid gap-4 my-16 lg:grid-cols-3">
                            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                                    1
                                </div>
                                <p className="text-lg">
                                    <b>Short-term.</b>
                                    <br />
                                    - The goal after six months is to be able to
                                    listen, speak, read and write English
                                    fluently. Learn more about specialized
                                    English.
                                    <br />
                                    - have a stable job (target 500-1000
                                    usd/month) learn, accumulate a lot of
                                    experience, train thinking ability to handle
                                    work effectively and accurately.
                                    <br />
                                    - Learn intensive programming that your own
                                    orientation has given, master fontend
                                    programming skills and learn more about
                                    backend.
                                    <br />
                                </p>
                            </div>
                            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                                    2
                                </div>
                                <p className="text-lg">
                                    <b>Long-term.</b>
                                    <br />
                                    - Learn English, read self-development
                                    books, learn about business models, build
                                    long-term development plans.
                                    <br />
                                    - Achieved the title of excellent student
                                    upon graduation.
                                    <br />
                                    - Developing a growing company, creating
                                    many useful values for society.
                                    <br />
                                    - Improve self-worth, prestige level, learn
                                    new knowledge, renew thinking in a positive
                                    direction.
                                    <br />
                                    - Improve your user experience design
                                    thinking as well as your programming ability
                                    by creating your own meaningful personal
                                    projects/
                                    <br />
                                </p>
                            </div>
                            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                                    3
                                </div>
                                <p className="text-lg">
                                    <b>Determination.</b>
                                    <br />- Determined 2023 is a boom year for
                                    myself, determined to achieve 5,000usd this
                                    year.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Target;

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            className="py-12"
        >
            <section className="p-6 bg-teal-800 dark:text-gray-100 rounded-xl">
                <div className="container mx-auto">
                    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">
                        work experience
                    </span>
                    <h2 className="text-5xl font-bold text-center dark:text-gray-50">
                        Building in the process of self-development
                    </h2>
                    <div className="grid gap-4 my-16 lg:grid-cols-2">
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                                1
                            </div>
                            <p className="text-lg ">
                                <b>Working group</b>
                                <br />
                                - Ability to interact and connect well:
                                Experience in joining a university club.
                                <br />
                                - Strong teamwork ability, adaptable to all
                                units of the enterprise.
                                <br />
                                - Always listen to the opinions and suggestions
                                of others. Respect the opinions and always help
                                the members of the group.
                                <br />
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                                2
                            </div>
                            <p className="text-lg">
                                <b>Focus</b>
                                <br />- Don't learn multiple languages at once,
                                just focus on a specific language and focus on
                                building specific projects. Always have to learn
                                new technologies to improve yourself.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Experience;

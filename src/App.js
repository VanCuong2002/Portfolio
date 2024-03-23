import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import { motion } from "framer-motion";
function App() {
    return (
        <div className="w-full h-auto bg-bodyColor text-lightText px-4">
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    transition={{ duration: 0.5 }}
                    animate={{
                        scale: [1.25, 1],
                    }}
                >
                    <Banner />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Features />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Projects />
                </motion.div>

                <Resume />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Contact />
                </motion.div>
            </div>
        </div>
    );
}

export default App;

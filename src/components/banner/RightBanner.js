import React from "react";
import { bannerImg } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <motion.div
                animate={{
                    scale: [1.1, 1],
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
            >
                <img
                    className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 rounded-3xl"
                    src={bannerImg}
                    alt="bannerImg"
                />
            </motion.div>
        </div>
    );
};

export default RightBanner;

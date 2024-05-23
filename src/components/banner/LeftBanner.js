import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaNodeJs,
    FaReact,
    FaTiktok,
} from "react-icons/fa";
import {
    SiAdobeillustrator,
    SiGmail,
    SiInstagram,
    SiNestjs,
    SiRedux,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["FullStack Developer", "SEO Website"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal uppercase">
                    welcome to my profile
                </h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi. I'm{" "}
                    <span className="uppercase font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                        Văn Cường
                    </span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
                    Fullstack developers are not just programmers, they are
                    artists of the code, connecting every aspect of the
                    application from the frontend to the backend, turning ideas
                    into reality on the screen and in the system.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/profile.php?id=100038687656028"
                        >
                            <span className="bannerIcon">
                                <FaFacebookF />
                            </span>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://zalo.me/0965469714"
                        >
                            <span className="bannerIcon">Zalo</span>
                        </a>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.tiktok.com/@cuongcoca050102"
                        >
                            <span className="bannerIcon">
                                <FaTiktok />
                            </span>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="mailto:cuongcoca12345@gmail.com"
                        >
                            <span class="bannerIcon">
                                <SiGmail />
                            </span>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/cuongcoca17/?igsh=bGI5MWVxd29taG0w&utm_source=qr"
                        >
                            <span className="bannerIcon">
                                <SiInstagram />
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <FaNodeJs />
                        </span>
                        <span className="bannerIcon">
                            <SiNestjs />
                        </span>
                        <span className="bannerIcon">
                            <DiMongodb />
                        </span>
                        <span className="bannerIcon">
                            <SiRedux />
                        </span>
                        <span className="bannerIcon">
                            <SiAdobeillustrator />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBanner;

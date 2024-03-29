import React from "react";
import Title from "../layouts/Title";
import {
    card,
    music,
    crush,
    profile,
    shoppingCart,
    weatherApp,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    const url = {
        pr1: "https://github.com/VanCuong2002/My-Card",
        pr2: "https://github.com/VanCuong2002/Portfolio",
        pr3: "https://github.com/VanCuong2002/Weather-App",
        pr4: "https://github.com/VanCuong2002/Shopping-Cart",
        pr5: "https://github.com/VanCuong2002/Music",
        pr6: "https://github.com/VanCuong2002/Crush",
    };
    const website = {
        wb1: "https://my-card-ruby.vercel.app/",
        wb2: "https://cuongdev.id.vn/",
        wb3: "https://weather-app-three-gold-23.vercel.app/",
        wb4: "https://shopping-cart-eta-coral.vercel.app/",
        wb5: "https://music-wine-eight.vercel.app/",
        wb6: "https://crush-mu-peach.vercel.app/",
    };
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="MY CARD"
                    des="The My card website is built from HTML & CSS and designed with Neumorphism UI style. A place to store information so people can contact me quickly."
                    src={card}
                    url={url.pr1}
                    website={website.wb1}
                />
                <ProjectsCard
                    title="MY PROFILE"
                    des="The My Profile website, that's the website you're showing right in front of your eyes, built using reactjs and tailwind CSS. A place full of information about myself."
                    src={profile}
                    url={url.pr2}
                    website={website.wb2}
                />
                <ProjectsCard
                    title="Weather App"
                    des="The Weather App website, a project about weather forecasting in cities around the world using OpenWeatherMap API and Reactjs."
                    src={weatherApp}
                    url={url.pr3}
                    website={website.wb3}
                />
                <ProjectsCard
                    title="Shopping Cart"
                    des="The Shopping Cart website is the ideal destination for people who want to shop online conveniently and easily. The combination of HTML, CSS and JavaScript creates an enjoyable online shopping experience."
                    src={shoppingCart}
                    url={url.pr4}
                    website={website.wb4}
                />
                <ProjectsCard
                    title="Music Play"
                    des="The Music Play website provides an enjoyable and convenient experience for users to enjoy music online. With a sophisticated combination of HTML, CSS, and JavaScript, the site is a great destination to explore unique features."
                    src={music}
                    url={url.pr5}
                    website={website.wb5}
                />
                <ProjectsCard
                    title="Crush"
                    des="The website Crush Confession is not only a place to share feelings but also a unique and interesting experience for users. Using a sophisticated combination of HTML, CSS and JavaScript, this website offers eye-catching animations and features."
                    src={crush}
                    url={url.pr6}
                    website={website.wb6}
                />
            </div>
        </section>
    );
};

export default Projects;

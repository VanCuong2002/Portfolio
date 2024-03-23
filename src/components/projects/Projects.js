import React from "react";
import Title from "../layouts/Title";
import { card, profile, shoppingCart, weatherApp } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    const url = {
        pr1: "https://github.com/VanCuong2002/My-Card",
        pr2: "https://github.com/danglinh2k1/my_card.git",
        pr3: "https://github.com/VanCuong2002/Weather-App",
        pr4: "https://github.com/VanCuong2002/Shopping-Cart",
    };
    const website = {
        wb1: "https://my-card-peach.vercel.app/",
        wb2: "https://my-card-peach.vercel.app/",
        wb3: "https://weather-app-three-gold-23.vercel.app/",
        wb4: "https://shopping-cart-eta-coral.vercel.app/",
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
                    title="MY-CARD"
                    des=" Project : My card is built from HTML & CSS and designed with Neumorphism UI style. A place to store information so people can contact me quickly."
                    src={card}
                    url={url.pr1}
                    website={website.wb1}
                />
                <ProjectsCard
                    title="MY-PROFILE"
                    des=" Project : My-Profile, that's the website you're showing right in front of your eyes, built using reactjs and tailwind CSS. A place full of information about myself."
                    src={profile}
                    url={url.pr2}
                    website={website.wb2}
                />
                <ProjectsCard
                    title="Weather-App"
                    des=" Project : Weather-App, a project about weather forecasting in cities around the world using OpenWeatherMap API and Reactjs."
                    src={weatherApp}
                    url={url.pr3}
                    website={website.wb3}
                />
                <ProjectsCard
                    title="Shopping-Cart"
                    des=" Project : Shopping-Cart, a small shopping cart project used mostly for sales websites using HTML CSS and Javascript."
                    src={shoppingCart}
                    url={url.pr4}
                    website={website.wb4}
                />
            </div>
        </section>
    );
};

export default Projects;

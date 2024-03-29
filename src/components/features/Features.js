import React from "react";
import { AiFillAppstore, AiFillNotification } from "react-icons/ai";
import { FaGlobe, FaIdCardAlt } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
    return (
        <section
            id="features"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title="FEATURED" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                <Card
                    title="Business Stratagy"
                    des="I used to start a business with clothes, because I had little experience and it was my first time starting a business, so there were many mistakes, so I failed. But after that failure, it left me with a lot of experience and knowledge. I will be determined to start a business again.."
                    icon={<FaIdCardAlt />}
                />
                <Card
                    title="App Development"
                    des="In the university environment, I used to develop web-based applications with a number of small and medium projects."
                    icon={<AiFillAppstore />}
                />
                <Card
                    title="SEO Optimisation"
                    des="Self-taught SEO and embarked on keyword SEO when doing some sales website projects and keyword SEO for developing my YOUTUBE channel.."
                    icon={<SiProgress />}
                />
                <Card
                    title="Communication Development"
                    des="Build and develop the communication segment through social networks such as TIkTOk & FACEBOOK... Develop channels, build fanpages, groups and run ads for business."
                    icon={<AiFillNotification />}
                />
                <Card
                    title="UI/UX Design"
                    des="Design research, customer analysis. Build visual tools and prototypes, design user interfaces to enhance the product's user experience."
                    icon={<SiAntdesign />}
                />
                <Card
                    title="Websites"
                    des="Website development using ReactJS, BootstrapCSS, TailwindCSS technologies. The website, mobile app and landing page were taken from concept to implementation. Standardize all output with strategy and approach and strategy New, responsive, mobile-first strategy. UX and UI designs are evaluated for technical feasibility."
                    icon={<FaGlobe />}
                />
            </div>
        </section>
    );
};

export default Features;

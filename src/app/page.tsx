import { Metadata } from "next";
import Skill from "~/components/content/Skill";
import Experiences from "~/components/content/Experiences";
import Introduction from "~/components/content/Introduction";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "My personal portfolio showcasing key projects and professional skills in programming, web development, and UI design.",
};

export default function HomePage() {
    return (
        <>
            <Introduction />
            <Experiences />
            <Skill />
        </>
    );
}

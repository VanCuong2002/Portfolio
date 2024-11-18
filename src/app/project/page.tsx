import { Metadata } from "next";
import Project from "~/components/content/Project";

export const metadata: Metadata = {
    title: "Project",
    description:
        "My personal portfolio showcasing key projects and professional skills in programming, web development, and UI design.",
};

export default function ProjectPage() {
    return <Project />;
}

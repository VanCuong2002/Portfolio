import { Metadata } from "next";
import About from "~/components/content/About";

export const metadata: Metadata = {
    title: "About",
    description:
        "My personal portfolio showcasing key projects and professional skills in programming, web development, and UI design.",
};

export default function AboutPage() {
    return <About />;
}

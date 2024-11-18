"use client";

import Link from "next/link";
import { useState } from "react";
import { scrollToSection } from "~/utils";
import Loading from "~/components/shared/Loading";
import { codeString, socials } from "~/constant/data";
import SyntaxHighlighter from "react-syntax-highlighter";
import TypingEffect from "~/components/shared/TypingEffect";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Button, Grid2, keyframes, Typography } from "@mui/material";
import { AVATAR_MYSELF, BG_INTRODUCTION, ICON_DOWNLOAD } from "~/constant";

const waveAnimation = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;

export default function Introduction() {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const imageUrl =
            "https://inkythuatso.com/uploads/thumbnails/800/2023/01/13-anh-meme-meo-bua-inkythuatso-17-10-37-10.jpg";

        try {
            const response = await fetch(
                proxyUrl + encodeURIComponent(imageUrl),
            );
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "meme_image.jpg";
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box
                sx={{
                    mb: "20px",
                    pt: { xs: "30px", sm: "60px" },
                    background: `url(${BG_INTRODUCTION}) center / cover no-repeat`,
                }}
            >
                <Grid2
                    container
                    spacing={{ xs: 2, sm: 5, md: 7, lg: 10 }}
                    sx={{
                        px: { xs: 2, sm: 3 },
                    }}
                >
                    <Grid2
                        size={{ xs: 12, sm: 5.5 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", sm: "flex-start" },
                        }}
                    >
                        <Box
                            sx={{
                                gap: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 24,
                                    fontWeight: 500,
                                }}
                            >
                                Hi There !
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 30,
                                    animation: `${waveAnimation} 2.1s infinite`,
                                    animationDuration: "2.1s",
                                    animationIterationCount: "infinite",
                                    transformOrigin: "70% 70%",
                                    display: "inline-block",
                                }}
                            >
                                👋🏻
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                my: 2,
                                fontSize: 22,
                                fontWeight: 500,
                                lineHeight: 1.2,
                            }}
                        >
                            I&lsquo;M{" "}
                            <span
                                style={{
                                    fontWeight: 600,
                                    fontSize: 25,
                                    color: "var(--brand-name-200)",
                                }}
                            >
                                Cuong Dev
                            </span>
                        </Typography>
                        <TypingEffect
                            words={[
                                "Software Developer",
                                "Freelancer",
                                "MERN Stack Developer",
                                "Open Source Contributor",
                            ]}
                        />
                        <Box
                            sx={{
                                mt: 4,
                                display: {
                                    xs: "none",
                                    md: "block",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    lineHeight: 1.6,
                                    textIndent: "1em",
                                    textAlign: "center",
                                    fontStyle: "italic",
                                }}
                            >
                                {`"${" "}Fullstack developers are not just programmers,
                                they are artists of the code, connecting every
                                aspect of the application from the frontend to
                                the backend, turning ideas into reality on the
                                screen and in the system${" "}"`}
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
                                    width: "100%",
                                    display: "block",
                                    fontStyle: "italic",
                                    textAlign: "right",
                                    color: "var(--brand-name-100)",
                                }}
                                className="font-secondary"
                            >
                                -- Alexsandro Cuong Dev --
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                gap: 2,
                                display: "flex",
                                alignItems: "center",
                                mt: { xs: 2, sm: 6 },
                            }}
                        >
                            {socials.map((social) => (
                                <Link
                                    target="_blank"
                                    key={social.name}
                                    href={social.url}
                                >
                                    <Box
                                        component="img"
                                        src={`icons/${social.name}.png`}
                                        sx={{
                                            height: { xs: 28, sm: 32 },
                                            transition: "transform 0.3s ease",
                                            "&:hover": {
                                                cursor: "pointer",
                                                transform: "rotate(360deg)",
                                            },
                                        }}
                                    />
                                </Link>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                my: 2,
                                gap: 2,
                                alignItems: "center",
                                display: { xs: "none", sm: "flex" },
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    p: "8px 20px",
                                    color: "var(--brand-name-100)",
                                    border: "1px solid var(--brand-name-100)",
                                    "&:hover": {
                                        cursor: "pointer",
                                        transform: "scale(1.05)",
                                    },
                                }}
                                onClick={() => scrollToSection("skill")}
                            >
                                My Skills
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    p: "8px 20px",
                                    gap: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#fff",
                                    border: "1px solid transparent",
                                    background:
                                        "linear-gradient(to right, #ec4899, #8b5cf6)",
                                    "&:hover": {
                                        cursor: "pointer",
                                        transform: "scale(1.05)",
                                    },
                                }}
                                onClick={handleDownload}
                            >
                                <span>Get Resume </span>
                                <Box
                                    height={14}
                                    alt="dowload"
                                    component="img"
                                    src={ICON_DOWNLOAD}
                                />
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2
                        size={{ xs: 12, sm: 6.5 }}
                        sx={{
                            width: "100%",
                            borderRadius: 2,
                            border: "1px solid #eee",
                            background: "linear-gradient(to right, #fff, #eee)",
                        }}
                    >
                        <Box
                            sx={{
                                gap: 1,
                                padding: 2,
                                display: "flex",
                                alignItems: "center",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {Array.from({ length: 3 }).map((_, index) => (
                                <span
                                    key={index}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        background:
                                            index === 1
                                                ? "#f96f73"
                                                : index === 2
                                                  ? "#fa9348"
                                                  : "#b6f9d2",
                                    }}
                                />
                            ))}
                        </Box>

                        <SyntaxHighlighter
                            style={github}
                            language="javascript"
                            wrapLongLines={true}
                            customStyle={{
                                margin: 0,
                                background: "transparent",
                                padding: "0 16px 16px 24px",
                            }}
                            lineProps={{
                                style: {
                                    display: "block",
                                    marginLeft: "40px",
                                    textIndent: "-50px",
                                },
                            }}
                        >
                            {codeString}
                        </SyntaxHighlighter>
                    </Grid2>
                    <Box
                        sx={{
                            my: 1,
                            m: "0 auto",
                            display: { xs: "block", sm: "none" },
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                p: "8px 20px",
                                gap: 1,
                                display: "flex",
                                alignItems: "center",
                                color: "#fff",
                                border: "1px solid transparent",
                                background:
                                    "linear-gradient(to right, #ec4899, #8b5cf6)",
                                "&:hover": {
                                    cursor: "pointer",
                                    transform: "scale(1.05)",
                                    transition: "transform 0.3s ease",
                                },
                            }}
                        >
                            <span>Get Resume </span>
                            <Box
                                width={20}
                                alt="dowload"
                                component="img"
                                src={ICON_DOWNLOAD}
                            />
                        </Button>
                    </Box>
                </Grid2>
            </Box>
            <Typography
                sx={{
                    mt: 4,
                    fontWeight: 600,
                    textAlign: "center",
                    fontSize: { xs: 23, sm: 30 },
                    display: { xs: "block", sm: "none" },
                }}
            >
                LET ME{" "}
                <span style={{ color: "var(--brand-name-100)" }}>
                    INTRODUCE
                </span>{" "}
                MYSELF
            </Typography>
            <Grid2 container spacing={{ xs: 1, sm: 4 }} px={{ xs: 2, sm: 3 }}>
                <Grid2
                    size={{ xs: 12, sm: 4 }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src={AVATAR_MYSELF}
                        sx={{
                            width: "100%",
                            height: { xs: "90%", sm: "100%" },
                            borderRadius: 3,
                            "&:hover": {
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                transition: "transform 0.5s ease-in-out",
                            },
                        }}
                    />
                </Grid2>
                <Grid2
                    size={{ xs: 12, sm: 8 }}
                    sx={{
                        flex: 1,
                        display: "flex",
                        fontStyle: "italic",
                        gap: { xs: 2, sm: 3 },
                        flexDirection: "column",
                        justifyContent: "center",
                        fontSize: { xs: 14, sm: 16 },
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontStyle: "normal",
                            mb: { xs: 1, sm: 1.5 },
                            fontSize: { xs: 23, sm: 28 },
                            textTransform: "uppercase",
                            display: { xs: "none", sm: "block" },
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        LET ME{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            INTRODUCE
                        </span>{" "}
                        MYSELF
                    </Typography>
                    <span>
                        🤷‍♂️ I fell in love with programming and I have at least
                        learnt something, I think…
                    </span>
                    <span>
                        🌱 I am fluent in classics like{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            Java and Javascript
                        </span>
                    </span>
                    <span>
                        💡 My field of Interest&apos;s are building new{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            Technologies and Product
                        </span>
                    </span>
                    <span>
                        🛠️ Whenever possible, I also apply my passion for
                        developing products with{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            Java
                        </span>{" "}
                        and{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            Node.js
                        </span>
                    </span>
                    <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                        🚀 Whenever possible, I channel my passion into{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            creating new solutions
                        </span>
                        , experimenting with technologies, and collaborating on
                        projects that push boundaries
                    </Typography>
                </Grid2>
            </Grid2>
            <Loading open={loading} />
        </>
    );
}

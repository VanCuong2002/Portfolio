"use client";

import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
import { useAppContext } from "~/components/shared/AppProvider";
import { skills } from "~/constant/data";

export default function Skill() {
    const { mode } = useAppContext();

    return (
        <Box
            id="skill"
            sx={{
                px: { xs: 2, sm: 3 },
            }}
        >
            <Typography
                sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    mb: { xs: 3, sm: 6 },
                    fontSize: { xs: 23, sm: 30 },
                }}
            >
                Skills
            </Typography>
            <Marquee pauseOnHover>
                {skills.map((skill, index) => (
                    <Box
                        key={index}
                        sx={{
                            m: { xs: "6px 12px", sm: "12px 20px" },
                            borderTopWidth: mode === "dark" ? 1 : 0,
                            borderRightWidth: 0,
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderImage:
                                "linear-gradient(to right, transparent,#8b5cf6, #8b5cf6, transparent) 1",
                            borderStyle: "solid",
                            borderRadius: 2,
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: 2,
                                p: 2,
                                gap: 1.5,
                                display: "flex",
                                flexDirection: "column",
                                minWidth: 150,
                                minHeight: 130,
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid var(--border-color)",
                                background: "var(--skill-card-background)",
                                transition: "transform .5s ease",
                                "&:hover": {
                                    cursor: "pointer",
                                    transform: "scale(1.15)",
                                    color: "var(--brand-name-100)",
                                    border: "1px solid var(--brand-name-100)",
                                },
                            }}
                        >
                            <Box
                                alt="skill"
                                width={40}
                                height={40}
                                component="img"
                                src={skill.icon}
                            />
                            <Typography fontSize={15} fontWeight={600}>
                                {skill.name}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Marquee>
        </Box>
    );
}

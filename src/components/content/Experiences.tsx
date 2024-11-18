"use client";

import { BG_EXPERIENCES } from "~/constant";
import Divider from "~/components/shared/Divider";
import { Box, Grid2, Typography } from "@mui/material";
import { useAppContext } from "~/components/shared/AppProvider";
import { experiences } from "~/constant/data";

export default function Experiences() {
    const { mode } = useAppContext();

    return (
        <Box
            sx={{
                px: { xs: 2, sm: 3 },
            }}
        >
            <Divider />
            <Typography
                sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    mb: { xs: 3, sm: 6 },
                    fontSize: { xs: 23, sm: 30 },
                }}
            >
                Experiences
            </Typography>
            <Grid2 container spacing={{ xs: 1, sm: 2 }}>
                <Grid2 size={{ xs: 12, sm: 5, md: 6 }} display="flex">
                    <Box
                        component="img"
                        src="images/lap.svg"
                        sx={{
                            m: "0 auto",
                            objectFit: "contain",
                            filter: "drop-shadow(0 0 12px #ec489942)",
                            animation: "floatAnimation 3s ease-in-out infinite",
                            "@keyframes floatAnimation": {
                                "0%": {
                                    transform: "translateY(0) scale(1)",
                                },
                                "50%": {
                                    transform: "translateY(-10px) scale(1.1)",
                                },
                                "100%": {
                                    transform: "translateY(0) scale(1)",
                                },
                            },
                            transition: "all 0.3s ease-in-out",
                        }}
                        width="100%"
                    />
                </Grid2>
                <Grid2
                    size={{ xs: 12, sm: 7, md: 6 }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 2, sm: 4 },
                    }}
                >
                    {experiences.map((experience, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: 3,
                                p: { xs: 2, sm: 2.5 },
                                background:
                                    mode === "dark"
                                        ? `url(${BG_EXPERIENCES}) center / cover no-repeat`
                                        : "#f5f6f7",
                                "&:hover": {
                                    cursor: "pointer",
                                    transform: {
                                        xs: "scale(1.02)",
                                        sm: "scale(1.05)",
                                    },
                                    transition: "transform 0.5s ease",
                                    border: "1px solid var(--brand-name-100)",
                                },
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 1.5,
                                    fontSize: 16,
                                    textAlign: "center",
                                    color: "var(--brand-name-100)",
                                }}
                            >
                                {experience.time}
                            </Typography>
                            <Box
                                sx={{
                                    gap: 2,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    width={30}
                                    component="img"
                                    src="icons/referral.png"
                                />
                                <Box
                                    sx={{
                                        gap: 0.5,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography>
                                        {experience.position}
                                    </Typography>
                                    <Typography>
                                        {experience.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid2>
            </Grid2>
            <Divider />
        </Box>
    );
}

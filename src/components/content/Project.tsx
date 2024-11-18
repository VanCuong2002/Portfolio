import { projects } from "~/constant/data";
import { ICON_DEMO, ICON_GITHUB } from "~/constant";
import { Box, Button, Grid2, Typography } from "@mui/material";

export default function Project() {
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 3 },
            }}
        >
            <Box sx={{ textAlign: "center", my: 4 }}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: { xs: 0.5, sm: 1.4 },
                        fontSize: { xs: 23, sm: 28 },
                    }}
                >
                    My Recent{" "}
                    <span style={{ color: "var(--brand-name-100)" }}>
                        Works
                    </span>
                </Typography>
                <Typography fontSize={{ xs: 16, sm: 18 }}>
                    Here are a few projects I&apos;ve worked on recently.
                </Typography>
            </Box>
            <Grid2 container spacing={3}>
                {projects.map((project) => (
                    <Grid2
                        key={project.id}
                        size={{ xs: 12, sm: 6, md: 4 }}
                        sx={{
                            borderRadius: 2,
                            overflow: "hidden",
                            border: "1px solid var(--primary-color)",
                            boxShadow: "0 0 20px var(--boxshadow-color)",
                            "&:hover": {
                                transform: {
                                    xs: "scale(1.01)",
                                    sm: "scale(1.05)",
                                },
                                transition: "transform .3s ease",
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={project.image}
                            alt={project.title}
                            sx={{
                                width: "100%",
                                height: { xs: 160, sm: 180, md: 240 },
                            }}
                        />
                        <Box p={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 1,
                                    color: "var(--brand-name-100)",
                                }}
                            >
                                {project.title}
                            </Typography>

                            <Typography variant="body1">
                                {project.description}
                            </Typography>
                            <Box
                                sx={{
                                    mt: 2,
                                    gap: 2,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        p: "6px 20px",
                                        gap: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#fff",
                                        border: "1px solid transparent",
                                        background: "#ec4899",
                                        "&:hover": {
                                            cursor: "pointer",
                                            transform: "scale(1.05)",
                                            transition: "transform 0.3s ease",
                                        },
                                    }}
                                >
                                    <Box
                                        height={14}
                                        alt="dowload"
                                        component="img"
                                        src={ICON_GITHUB}
                                    />
                                    <span>Github</span>
                                </Button>

                                <Button
                                    variant="outlined"
                                    sx={{
                                        p: "6px 20px",
                                        gap: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#fff",
                                        border: "1px solid transparent",
                                        background: "#1e88e5",
                                        "&:hover": {
                                            cursor: "pointer",
                                            transform: "scale(1.05)",
                                            transition: "transform 0.3s ease",
                                        },
                                    }}
                                >
                                    <Box
                                        height={14}
                                        alt="dowload"
                                        component="img"
                                        src={ICON_DEMO}
                                    />
                                    <span>Demo</span>
                                </Button>
                            </Box>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

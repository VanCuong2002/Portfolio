import { QR_CODE } from "~/constant";
import { maskEmail, maskPhoneNumber } from "~/utils";
import { Box, Grid2, Typography } from "@mui/material";

export default function About() {
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 3 },
                pt: { xs: 2, sm: 5 },
            }}
        >
            <Grid2
                container
                spacing={{ xs: 1, sm: 4 }}
                direction={{ xs: "column-reverse", sm: "row" }}
            >
                <Grid2
                    size={{ xs: 12, sm: 4 }}
                    sx={{
                        gap: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        component="img"
                        src={QR_CODE}
                        sx={{
                            width: "100%",
                            height: { xs: "90%", sm: "100%" },
                            borderRadius: 3,
                        }}
                    />
                    <Box
                        sx={{
                            gap: 2,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <span style={{ fontSize: 23 }}> Văn Cường</span>
                        <span>
                            Please contact me through the social networks below.
                            Thanks a lot!
                        </span>
                        <span>
                            Phone:{" "}
                            <span style={{ color: "var(--brand-name-100)" }}>
                                {maskPhoneNumber("+84 965469714")}
                            </span>
                        </span>
                        <span>
                            Email:{" "}
                            <span style={{ color: "var(--brand-name-100)" }}>
                                {maskEmail("cuongdev2002@gmail.com")}
                            </span>
                        </span>
                    </Box>
                </Grid2>
                <Grid2
                    size={{ xs: 12, sm: 8 }}
                    sx={{
                        flex: 1,
                        display: "flex",
                        fontStyle: "italic",
                        flexDirection: "column",
                        gap: { xs: 1.5, sm: 2.5 },
                        justifyContent: "center",
                        fontSize: { xs: 14, sm: 16 },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontStyle: "normal",
                            mb: { xs: 1, sm: 1.5 },
                            fontSize: { xs: 23, sm: 28 },
                            textTransform: "uppercase",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        Know Who{" "}
                        <span style={{ color: "var(--brand-name-100)" }}>
                            I&apos;M
                        </span>
                    </Typography>
                    <span>
                        Hi Everyone, I am Cuong Dev from Hanoi, VietNam.
                    </span>
                    <span>
                        I am currently employed as a a freelance dev (start-up).
                    </span>
                    <span>
                        I have completed a Bachelor&apos;s degree in Software
                        Engineering at Hanoi University of Natural Resources and
                        Environment.
                    </span>
                    <span>
                        In my free time, I enjoy playing football, badminton,
                        listening to music, and reading books. These activities
                        help me relax and stay inspired in both my personal and
                        professional life.
                    </span>
                    <Box
                        sx={{
                            color: "#ec4899",
                            mt: { xs: 2, sm: 4 },
                            mb: { xs: 3, sm: 0 },
                            textAlign: "center",
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
                            {`"${" "}Not every time you try will you succeed, but you must always try so that you won’t regret it when you fail.${" "}"`}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 1,
                                width: "100%",
                                display: "block",
                                fontStyle: "italic",
                            }}
                            className="font-secondary"
                        >
                            -- Alexsandro Cuong Dev --
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

import { Box, Typography } from "@mui/material";

export default function Footer() {
    const getYearCurrent = new Date().getFullYear();
    return (
        <Box
            sx={{
                mx: { xs: 0, sm: 3 },
                mt: { xs: 4, sm: 8 },
                background: { xs: "var(--bg-footer)", sm: "none" },
                borderTop: { xs: "none", sm: "1px solid var(--border-color)" },
            }}
        >
            <Typography
                sx={{
                    height: 100,
                    fontStyle: "italic",
                    textAlign: "center",
                    px: { xs: 2, sm: 3 },
                    fontSize: { xs: 16, sm: 18 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1.6,
                }}
            >
                Copyright © {getYearCurrent} Văn Cường IT. Made with in VietNam
                ❤️
            </Typography>
        </Box>
    );
}

import { Metadata } from "next";
import { BG_404 } from "~/constant";
import { Box, Button, Container, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "404 - Page Not Found",
};

export default function NotFound() {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <img
                    alt="404"
                    src={BG_404}
                    style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                />
                <Typography variant="h4">
                    The page you are looking for does not exist.
                </Typography>
                <Button variant="contained" color="primary" href="/">
                    Go to Home
                </Button>
            </Box>
        </Container>
    );
}

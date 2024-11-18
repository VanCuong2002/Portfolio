import { Backdrop, CircularProgress, Typography } from "@mui/material";

export default function Loading({ open }: { open: boolean }) {
    return (
        <Backdrop
            open={open}
            sx={{
                gap: 3,
                zIndex: 10000,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography fontSize={20} fontWeight={600}>
                Loading...
            </Typography>

            <CircularProgress
                size={50}
                thickness={4}
                sx={{
                    color: "var(--brand-name-100)",
                    filter: "drop-shadow(0 0 8px var(--brand-name-100))",
                }}
            />
        </Backdrop>
    );
}

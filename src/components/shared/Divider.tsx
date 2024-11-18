import { Box } from "@mui/material";

export default function Divider() {
    return (
        <Box
            sx={{
                height: 2,
                width: "100%",
                my: { xs: 4, sm: 6 },
                background: "var(--border-color)",
            }}
        />
    );
}

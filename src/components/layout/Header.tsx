"use client";

import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AVATAR_MYSELF, LOGO_DEFAULT } from "~/constant";
import MaterialUISwitch from "~/components/shared/MUISwitch";
import { useAppContext } from "~/components/shared/AppProvider";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
    {
        text: "Home",
        pathname: "/",
        icon: "icons/house.png",
    },
    {
        text: "Projet",
        pathname: "/project",
        icon: "icons/project.png",
    },
    {
        text: "About",
        pathname: "/about",
        icon: "icons/about.png",
    },
];

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const pathname = usePathname();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const { toggleMode } = useAppContext();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Link href="/">
                <Box
                    component="img"
                    src={AVATAR_MYSELF}
                    sx={{ my: 1, height: 80, width: 80, borderRadius: "50%" }}
                />
            </Link>
            <Divider sx={{ borderColor: "#ffe6f2" }} />
            <Box m="16px 8px">
                {navItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            mb: 0.5,
                            borderRadius: 2,
                            backgroundColor:
                                pathname === item.pathname ? "#ffe6f2" : "",
                            "&:hover": {
                                backgroundColor: "#ffe6f2",
                            },
                        }}
                    >
                        <Link
                            href={item.pathname}
                            style={{
                                gap: 12,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 16,
                                textDecoration: "none",
                                textTransform: "capitalize",
                                color: "#000",
                            }}
                        >
                            <Box height={20} component="img" src={item.icon} />
                            <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                                {item.text}
                            </Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <AppBar
                component="nav"
                sx={{
                    boxShadow: "none",
                    background: "var(--bg-header)",
                    position: { xs: "relative", sm: "static" },
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        pl: { xs: 2, sm: 3 },
                        pr: { xs: 2, sm: 3 },
                        justifyContent: "space-between",
                        minHeight: "var(--height-header) !important",
                    }}
                >
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { sm: "none", color: "var(--text-color)" },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
                        <Link href="/">
                            <Box
                                alt="Logo"
                                component="img"
                                src={LOGO_DEFAULT}
                                sx={{
                                    height: 50,
                                    display: { xs: "none", sm: "block" },
                                }}
                            />
                        </Link>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navItems.map((item, index) => (
                                <Link
                                    href={item.pathname}
                                    key={index}
                                    style={{
                                        display: "inline-block",
                                        padding: "8px 16px",
                                        textDecoration: "none",
                                        textTransform: "capitalize",
                                        color:
                                            pathname === item.pathname
                                                ? "var(--brand-name-100)"
                                                : "var(--text-color)",
                                    }}
                                >
                                    <Typography
                                        sx={{ fontSize: 18, fontWeight: 500 }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <MaterialUISwitch onClick={toggleMode} />
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            bgcolor: "#fff",
                            width: drawerWidth,
                            color: "#000",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

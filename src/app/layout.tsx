"use client";

import { Box } from "@mui/material";
import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import "../styles/global.scss";
import theme from "~/theme/theme";
import { LOGO_DEFAULT } from "~/constant";
import { usePathname } from "next/navigation";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
// import Heartfall from "~/components/shared/Heartfall";
import { AppProvider } from "~/components/shared/AppProvider";
import Script from "next/script";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isShowFooter = useMemo(() => {
        return ["/", "/project", "/about"].includes(pathname);
    }, [pathname]);

    return (
        <html lang="en">
            <head>
                <link rel="icon" href={LOGO_DEFAULT} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
                />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-7CNQP1SZ84"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7CNQP1SZ84');
          `,
                    }}
                />
            </head>
            <body>
                <AppProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {/* <Heartfall /> */}
                        <Box
                            sx={{
                                m: "0 auto",
                                maxWidth: {
                                    xs: "100%",
                                    sm: "var(--width-desktop)",
                                },
                            }}
                        >
                            <Header />
                            {children}
                            {isShowFooter && <Footer />}
                        </Box>
                    </ThemeProvider>
                </AppProvider>
            </body>
        </html>
    );
}

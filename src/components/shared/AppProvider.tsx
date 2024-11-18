"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";

type ThemeMode = "dark" | "light";

interface AppContextProps {
    mode: ThemeMode;
    toggleMode: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [mode, setMode] = useState<ThemeMode>("dark");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("themeMode") as ThemeMode;
            if (savedMode) {
                setMode(savedMode);
            }
            setIsReady(true);
        }
    }, []);

    const toggleMode = useCallback(() => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("themeMode", mode);

            if (mode === "dark") {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
        }
    }, [mode]);

    if (!isReady) return null;

    return (
        <AppContext.Provider value={{ mode, toggleMode }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

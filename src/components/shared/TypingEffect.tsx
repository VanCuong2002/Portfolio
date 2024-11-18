import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
    words: string[];
    typingSpeed?: number;
    pauseTime?: number;
}

export default function TypingEffect({
    words,
    typingSpeed = 150,
    pauseTime = 1000,
}: TypingEffectProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
            if (displayedText.length > 0) {
                setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, typingSpeed / 2);
            } else {
                setIsDeleting(false);
                setCurrentWordIndex(
                    (prevIndex) => (prevIndex + 1) % words.length,
                );
            }
        } else {
            if (displayedText.length < currentWord.length) {
                setTimeout(() => {
                    setDisplayedText(
                        currentWord.slice(0, displayedText.length + 1),
                    );
                }, typingSpeed);
            } else {
                setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        }
    }, [
        displayedText,
        isDeleting,
        currentWordIndex,
        words,
        typingSpeed,
        pauseTime,
    ]);

    return (
        <Typography
            sx={{ color: "var(--brand-name-100)", fontSize: 15, minHeight: 24 }}
        >
            {displayedText}
        </Typography>
    );
}

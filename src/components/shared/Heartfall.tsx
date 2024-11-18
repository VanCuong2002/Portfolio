import { useEffect, useMemo } from "react";
import {
    ICON_HEART_1,
    ICON_HEART_2,
    ICON_HEART_3,
    ICON_HEART_4,
} from "~/constant";

export default function Heartfall() {
    const heartImages = useMemo(() => {
        return [ICON_HEART_1, ICON_HEART_2, ICON_HEART_3, ICON_HEART_4];
    }, []);

    useEffect(() => {
        const heartContainer = document.createElement("div");
        heartContainer.className = "heart-container";
        document.body.appendChild(heartContainer);

        const createHeartflake = () => {
            const heartflake = document.createElement("img");
            const randomImage =
                heartImages[Math.floor(Math.random() * heartImages.length)];
            heartflake.src = randomImage;
            heartflake.className = "heartflake";
            heartflake.style.left = `${Math.random() * 100}vw`;
            heartflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
            heartflake.style.width = `${Math.random() * 10 + 10}px`;
            heartContainer.appendChild(heartflake);

            setTimeout(() => {
                heartflake.remove();
            }, 5000);
        };

        const interval = setInterval(createHeartflake, 200);

        return () => {
            clearInterval(interval);
            heartContainer.remove();
        };
    }, [heartImages]);

    return null;
}

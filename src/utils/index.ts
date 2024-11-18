export const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
    }
};

export const maskPhoneNumber = (phoneNumber: number | string) => {
    const phoneStr = phoneNumber.toString();

    if (phoneStr.length < 3) {
        return "Invalid phone number";
    }

    const maskedNumber = phoneStr.slice(0, -3) + "***";
    return maskedNumber;
};

export const maskEmail = (email: string) => {
    const [localPart, domainPart] = email.split("@");

    if (localPart.length < 4) {
        return "Invalid email address";
    }

    const maskedLocalPart = localPart.slice(0, -4) + "****";

    return `${maskedLocalPart}@${domainPart}`;
};

export const handleDownload = async () => {
    const proxyUrl = "https://api.allorigins.win/raw?url=";
    const imageUrl =
        "https://inkythuatso.com/uploads/thumbnails/800/2023/01/13-anh-meme-meo-bua-inkythuatso-17-10-37-10.jpg";

    try {
        const response = await fetch(proxyUrl + encodeURIComponent(imageUrl));
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "meme_image.jpg";
        link.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {}
};

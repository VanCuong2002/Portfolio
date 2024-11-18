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

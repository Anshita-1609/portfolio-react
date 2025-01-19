import { useState, useEffect } from "react";

const TextChange = () => {
    const texts = ["Hi, I'm Anshita"]; // Texts to display
    const typingSpeed = 100; // Speed of typing (in ms)
    const deletingSpeed = 200; // Speed of deleting (in ms)

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isForward, setIsForward] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the current text
            setCurrentText(texts[currentIndex].substring(0, charIndex));

            // Control typing and deleting
            if (isForward) {
                setCharIndex((prev) => prev + 1);
                if (charIndex >= texts[currentIndex].length) {
                    setIsForward(false); // Switch to deleting
                }
            } else {
                setCharIndex((prev) => prev - 1);
                if (charIndex === 0) {
                    setIsForward(true); // Switch to typing next text
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isForward ? typingSpeed : deletingSpeed);

        return () => clearInterval(interval); // Cleanup
    }, [charIndex, isForward, currentIndex, texts, typingSpeed, deletingSpeed]);

    return <div className="text-wrap text-pink-600 text-6xl">{currentText}</div>;
};

export default TextChange;

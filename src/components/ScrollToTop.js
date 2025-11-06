import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (visible && (_jsx("button", { onClick: scrollToTop, className: "fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition", children: _jsx(ArrowUp, { size: 20 }) })));
};
export default ScrollToTop;

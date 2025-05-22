import React from "react";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import SuccessMessage from "./components/SuccessMessage";
import "./sass/style.scss";

function App() {
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
            
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    return (
        <>
            <Contact onSuccess={() => setShowSuccess(true)} />
            <SuccessMessage visible={showSuccess} />
        </>
    )
}

export default App;
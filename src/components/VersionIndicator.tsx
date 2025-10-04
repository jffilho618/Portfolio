import { useState, useEffect } from "react";

export default function VersionIndicator() {
  const [buildTime] = useState(new Date().toISOString());
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "#1C2535",
        color: "#00ff00",
        padding: "10px 15px",
        borderRadius: "8px",
        fontSize: "12px",
        zIndex: 9999,
        fontFamily: "monospace",
        border: "2px solid #ff0000",
        boxShadow: "0 0 10px rgba(0,255,0,0.3)",
      }}
      onClick={() => setIsVisible(false)}
    >
      <div>🔄 BUILD TIME: {buildTime}</div>
      <div style={{ marginTop: "5px", fontSize: "10px", opacity: 0.7 }}>
        Click para fechar
      </div>
    </div>
  );
}

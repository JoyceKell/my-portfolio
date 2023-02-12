import React, { useState } from "react";
import "./downloadButton.css";
const DownloadButton = ({ file }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const response = await fetch(file);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    setLoading(false);
  };

  return (
    <button onClick={handleDownload} disabled={loading} className="button-13">
      {loading ? "Downloading..." : "Download My CV"}
    </button>
  );
};

export default DownloadButton;

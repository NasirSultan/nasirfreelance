import { useState } from "react";

export default function UrlTextFetcher() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchText = async () => {
    if (!url.trim()) {
      alert("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setText("");
    setHtml("");

    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
      console.log("⏳ Fetching from:", proxyUrl);

      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const htmlContent = await response.text();
      setHtml(htmlContent); // Save raw HTML
      console.log("✅ HTML fetched. Length:", htmlContent.length);

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const bodyText = doc.body?.innerText || "⚠️ No visible content found.";

      setText(bodyText.slice(0, 10000));
    } catch (error) {
      console.error("❌ Error fetching text:", error);
      setText("❌ Failed to fetch content. Site might block scraping or CORS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>🌐 URL Text Fetcher (Client Only)</h2>

      <input
        type="text"
        placeholder="Enter a full URL like https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={fetchText}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: loading ? "#999" : "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "⏳ Fetching..." : "🔍 Fetch Text"}
      </button>

      <div
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f0f0f0",
          padding: "15px",
          marginTop: "20px",
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          fontSize: "14px",
          borderRadius: "6px",
        }}
      >
        <strong>📝 Parsed Text Output:</strong>
        <div>{loading ? "⏳ Loading..." : text || "📄 Nothing extracted"}</div>
      </div>

      <div
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#fffbe6",
          padding: "15px",
          marginTop: "20px",
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #e0c97f",
          fontSize: "12px",
          borderRadius: "6px",
        }}
      >
        <strong>🔍 Raw HTML Fetched:</strong>
        <div>{html || "📦 HTML will appear here..."}</div>
      </div>
    </div>
  );
}

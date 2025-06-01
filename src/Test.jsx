import React from "react";
import { generateUploadButton } from "@uploadthing/react";

// Make sure this URL points to your backend API (with CORS enabled)
const UploadButton = generateUploadButton({
  url: "http://localhost:3000/api/uploadthing",
});

export default function UploadComponent() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Upload an Image</h2>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Upload complete! Response:", res);
          alert("Upload successful!");
        }}
        onUploadError={(error) => {
          console.error("Upload failed:", error);
          alert("Upload failed! Check console for details.");
        }}
      />
    </div>
  );
}

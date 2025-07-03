// src/components/Seo.jsx
import React, { useEffect } from "react";

const setMetaTag = (attr, value, content) => {
  if (!content) return;

  let element = document.querySelector(`meta[${attr}="${value}"]`);
  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attr, value);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
};

export default function Seo({
  title = "My Website",
  description = "Welcome to my website",
  keywords = "portfolio, developer, React, Node.js",
  url = window.location.href,
  image = "https://example.com/default-image.png", // Optional Open Graph & Twitter image
}) {
  useEffect(() => {
    if (title) document.title = title;

    // SEO meta tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // Open Graph (Social Media) tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:image", image);

    // Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // Canonical link
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, keywords, url, image]);

  return (
    <>
      {/* Static fallback (for SSR/JSX rendering) */}
      <title>{title}</title>
    <meta name="google-site-verification" content="e5179427455dc941" />


      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

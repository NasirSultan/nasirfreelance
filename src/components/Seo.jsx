import { useEffect } from "react";

const setMetaTag = (attrName, attrValue, content) => {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
};

export default function Seo({ title, description, keywords, url }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);
    if (url) setMetaTag("property", "og:url", url);
    if (title) setMetaTag("property", "og:title", title);
    if (description) setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    if (url) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    }
  }, [title, description, keywords, url]);

  return null; // Nothing rendered in JSX tree
}

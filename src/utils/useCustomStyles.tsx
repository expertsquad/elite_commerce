// hooks/useCustomStyles.tsx
import { useEffect } from "react";

const useCustomStyles = (content: string) => {
  useEffect(() => {
    const applyCustomStyles = () => {
      const smallTextElements = document.querySelectorAll(".ql-size-small");
      const largeTextElements = document.querySelectorAll(".ql-size-large");
      const hugeTextElements = document.querySelectorAll(".ql-size-huge");
      const textAlignRight = document.querySelectorAll(".ql-align-right");
      const textAlignCenter = document.querySelectorAll(".ql-align-center");
      const textAlignJustify = document.querySelectorAll(".ql-align-justify");

      const orderedListElements = document.querySelectorAll("ol");
      const unOrderedListElements = document.querySelectorAll("ul");
      const blockquoteElements = document.querySelectorAll("blockquote");

      textAlignRight.forEach((element) => {
        (element as HTMLElement).style.textAlign = "right";
      });
      textAlignCenter.forEach((element) => {
        (element as HTMLElement).style.textAlign = "center";
      });
      textAlignJustify.forEach((element) => {
        (element as HTMLElement).style.textAlign = "justify";
      });

      smallTextElements.forEach((element) => {
        (element as HTMLElement).style.fontSize = "12px";
      });
      largeTextElements.forEach((element) => {
        (element as HTMLElement).style.fontSize = "20px";
      });
      hugeTextElements.forEach((element) => {
        (element as HTMLElement).style.fontSize = "26px";
        (element as HTMLElement).style.fontWeight = "bold";
      });

      orderedListElements.forEach((element) => {
        // (element as HTMLElement).style.marginLeft = "20px";
        (element as HTMLElement).style.listStyleType = "decimal";
      });
      unOrderedListElements.forEach((element) => {
        // (element as HTMLElement).style.marginLeft = "20px";
        (element as HTMLElement).style.listStyleType = "disc";
      });
      blockquoteElements.forEach((element) => {
        (element as HTMLElement).style.borderLeft = "4px solid #ccc";
        (element as HTMLElement).style.paddingLeft = "16px";
        (element as HTMLElement).style.margin = "8px 0";
        (element as HTMLElement).style.color = "#555";
        (element as HTMLElement).style.fontStyle = "italic";
        (element as HTMLElement).style.backgroundColor = "#f9f9f9";
      });
    };

    applyCustomStyles();

    const observer = new MutationObserver(applyCustomStyles);
    const previewContainer = document.querySelector("#preview");
    if (previewContainer) {
      observer.observe(previewContainer, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [content]);
};

export default useCustomStyles;

import React from "react";
import Paragraph from "./Paragraph";

interface ImageParagraphProps {
  imageSrc: string;
  title: string;
  paragraph: string;
}

function ImageParagraph({ imageSrc, paragraph, title }: ImageParagraphProps) {
  return (
    <div className="flex gap-8">
      <div className="w-1/2">
        <img src={imageSrc} />
      </div>
      <div className="w-1/2">
        <Paragraph title={title}>{paragraph}</Paragraph>
      </div>
    </div>
  );
}

export default ImageParagraph;

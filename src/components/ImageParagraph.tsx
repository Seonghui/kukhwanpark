import React from "react";
import Paragraph from "./Paragraph";

interface ImageParagraphProps {
  imageSrc: string;
  title: string;
  paragraph: string;
}

function ImageParagraph({ imageSrc, paragraph, title }: ImageParagraphProps) {
  return (
    <div className="md:flex md:gap-8">
      <div className="md:w-1/2">
        <img src={imageSrc} />
      </div>
      <div className="md:w-1/2 mt-5 md:mt-0">
        <Paragraph title={title}>{paragraph}</Paragraph>
      </div>
    </div>
  );
}

export default ImageParagraph;

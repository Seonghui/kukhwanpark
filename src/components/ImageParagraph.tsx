import React from "react";
import Paragraph from "./Paragraph";

interface ImageParagraphProps {
  imageSrc: string;
  title: string;
  paragraph: string;
}

function ImageParagraph({ imageSrc, paragraph, title }: ImageParagraphProps) {
  return (
    <div className="xl:flex xl:gap-8">
      <div className="xl:w-1/2">
        <img className="block mx-auto" src={imageSrc} />
      </div>
      <div className="xl:w-1/2 mt-5 xl:mt-0">
        <Paragraph title={title}>{paragraph}</Paragraph>
      </div>
    </div>
  );
}

export default ImageParagraph;

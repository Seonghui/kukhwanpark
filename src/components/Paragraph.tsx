import React from "react";

interface ParagraphProps {
  title: string;
  children: React.ReactNode;
}

function Paragraph({ title, children }: ParagraphProps) {
  return (
    <div className="pt-5">
      <h6 className="text-lg pb-2">{title}</h6>
      <p className="break-keep whitespace-pre-wrap">{children}</p>
    </div>
  );
}

export default Paragraph;

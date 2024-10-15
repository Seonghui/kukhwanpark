import React from "react";

interface ParagraphProps {
  title?: string;
  children: React.ReactNode;
}

function Paragraph({ title, children }: ParagraphProps) {
  return (
    <div>
      {!!title && <h6 className="text-lg pb-2">{title}</h6>}
      <p className="break-keep whitespace-pre-wrap font-light">{children}</p>
    </div>
  );
}

export default Paragraph;

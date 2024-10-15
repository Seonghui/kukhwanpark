import React from "react";

interface ParagraphProps {
  title?: string;
  children: React.ReactNode;
}

function Paragraph({ title, children }: ParagraphProps) {
  return (
    <div>
      {!!title && <h6 className="text-lg font-semibold">{title}</h6>}
      <p className="break-keep whitespace-pre-wrap xl:text-lg">{children}</p>
    </div>
  );
}

export default Paragraph;

import React from "react";

interface AltProps {
  alt: string;
}

const Alt: React.FC<AltProps> = ({ alt }) => {
  return (
    <div>
      <p>Alternative Text: {alt}</p>
    </div>
  );
};

export default Alt;

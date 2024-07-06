import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Ilya-Linh Nguen XKCD Comic Fetcher.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

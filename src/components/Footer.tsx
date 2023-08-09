import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-6 md:h-16 lg:p-20 xl:p-4 text-red-500 flex  items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        DELCO
      </Link>
      <p>ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;

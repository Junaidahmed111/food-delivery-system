import Link from "next/link";
import Image from "next/image";
import React from "react";

const Carticon = () => {
  return (
    <Link href="/cart" className="flex items-center gp-4 ">
      <div className="relative w-8 h-8 md:w-5 md:h-5 ">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span className="mx-2"> Cart (3)</span>
    </Link>
  );
};

export default Carticon;

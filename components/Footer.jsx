import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-between p-5 b align-middle border-t-2 border-black dark:bg-black dark:border-white bg-[#B0FFFF] ">
      <div className="flex flex-col gap-3">
        <p>Social Media </p>
        <Link href={"/www.facebook.com"}>
          <BsFacebook className="text-3xl text-blue-500" />
        </Link>
        <Link href={"/www.facebook.com"}>
          <BsYoutube className="text-3xl text-red-600" />
        </Link>
        <Link href={"/www.facebook.com"}>
          <BsInstagram className="text-3xl text-pink-500" />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <p>Pages</p>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/about"}>Privacy Policy</Link>
        <Link href={"/about"}>Terms and Conditions</Link>
        <Link href={"/about"}>About Us</Link>
      </div>
    </footer>
  );
};

export default Footer;

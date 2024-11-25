import React from "react";
import Link from "next/link";
import Image from "next/image";

import footerLogo from "../../../public/footer-logo.png";
import facebook from "../../../public/social-icon/facebook.png";
import twitter from "../../../public/social-icon/twitter.png";
import linkedin from "../../../public/social-icon/linkedin.png";

function Footer() {
  return (
    <footer>
      <div className="bg-primary-black text-default-color text-sm px-4 lg:px-20 py-4 flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full  lg:w-2/5">
            <Link href="/">
              <Image src={footerLogo} alt="Brand Logo" width={130} priority />
            </Link>
            <p className="mt-5">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          <div className="w-full lg:w-2/5">
            <h3 className="text-xl font-bold">Sign Up For Our Newsletter!</h3>
            <p>
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className="mt-5 flex">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full bg-default-color p-2 rounded-lg rounded-r-none"
              />
              <button className="flex-shrink-0 w-36 bg-primary-600 p-2 rounded-lg rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-1">
            <p>support@we5ive.com</p>
            <h4 className="font-bold">Contact Us</h4>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/">Privacy policy</Link>
            <Link href="/">Terms & Condition</Link>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">Social Link</h4>
            <div className="flex items-center gap-3">
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="Facebook" width={20} priority />
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="Twitter" width={20} priority />
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="Linkedin" width={20} priority />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-600 text-default-color text-sm px-4 lg:px-20 py-4 flex justify-center items-center">
        <p>© 2024 | We5ive</p>
      </div>
    </footer>
  );
}

export default Footer;

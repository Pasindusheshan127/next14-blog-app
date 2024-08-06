"use client";
import { useState } from "react";
import style from "./links.module.css";
import Navbvarlink from "./navbarLink/NavbarLink";
import Image from "next/image";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link) => (
          <Navbvarlink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <Navbvarlink item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <Navbvarlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        className={style.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={style.mobilelinks}>
          {links.map((link) => (
            <Navbvarlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

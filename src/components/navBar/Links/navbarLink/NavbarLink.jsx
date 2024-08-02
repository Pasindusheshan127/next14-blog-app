"use client";
import Link from "next/link";
import style from "./navbarLink.module.css";
import { usePathname } from "next/navigation";
const Navbvarlink = ({ item }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={item.path}
        className={`${style.container} ${
          pathName === item.path && style.active
        }`}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default Navbvarlink;

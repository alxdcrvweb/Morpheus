import cn from "classnames";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConnect } from "@/store/useConnect";

export const links = [
  {
    title: "Journey",
    link: "/journey",
  },
  {
    title: "Backstory",
    link: "/backstory",
  },
  {
    title: "Gallery",
    link: "/gallery",
    loginRequired: true,
  },
  {
    title: "Showdown",
    link: "/showdown",
  },
];
const Menu: FC = () => {
  const pathname = usePathname();
  const { address } = useConnect();
  return (
    <div className={"header__actions"}>
      {links.map((row, i) => (
        <Link
          href={!row.loginRequired || address !== "" ? row.link : "/connect"}
          key={i}
        >
          <div
            className={cn(
              "header__menu",
              pathname == row.link && "header__active",
              i == 0 && "first",
              i == links.length - 1 && "last"
            )}
          >
            {row.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;

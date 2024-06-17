import cn from "classnames";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Journey",
    link: "/",
  },
  {
    title: "Story",
    link: "/story",
  },
  {
    title: "Factions",
    link: "/sleeping",
  },
  {
    title: "Gallery",
    link: "/gallery",
    loginRequired: true,
  },
  {
    title: "Leaderboard",
    link: "/leaderboard",
  },
];
const Menu: FC = () => {
  const pathname = usePathname();
  return (
    <div className={"header__actions"}>
      {links.map((row, i) => (
        <Link href={row.link} key={i}>
          <div
            className={cn(
              "header__menu",
              pathname == row.link && "header__active",
              i == 0 && "first",
              i == links.length - 1 && "last",
              row.loginRequired && "header__disabled"
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

import "@/styles/header.scss";
import { FC } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { useConnect } from "@/store/useConnect";
import Image from "next/image";
import closeImg from "@/public/close.svg";
import { links } from "./menu";
interface HeaderMobileMenuProps {
  setOpenMenu: (b: boolean) => void;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ setOpenMenu }) => {
  const router = useRouter();
  const { address, warpcastUser } = useConnect();
  const handleClick = (pushTo: string) => {
    setOpenMenu(false);
    router.push(pushTo);
  };

  return (
    <div className="menu">
      <div className="menu__box">
        <div className="menu__head">
          <div className="menu__title">MORPHEUS</div>
          <Image
            alt="close"
            src={closeImg}
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <div className="menu__main">
          {links.map((el) => {
            return (
              <div
                key={el.title}
                className={classNames(
                  "menu__route",
                  el.loginRequired && !warpcastUser && !address && "disabled"
                )}
                onClick={() => {
                  handleClick(el.link);
                }}
              >
                {el.title}
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default HeaderMobileMenu;

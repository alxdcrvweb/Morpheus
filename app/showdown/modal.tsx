import "@/styles/tower.scss";
import AddChar from "./addChar";
import TowerInfo from "./towerInfo";
import { useConnect } from "@/store/useConnect";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Modal = ({
  setAnimation,
  setHud,
}: {
  setAnimation: (a: string) => void;
  setHud: (h: boolean) => void;
}) => {
  const aa = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const [active, setActive] = useState(false);
  const [view, setView] = useState(0);
  const [max, setMax] = useState(0);

  const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onTop = () => {
    if (ref?.current) {
      ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const dd = (e: any) => {
    setView(e?.target?.scrollTop);
    // console.log(view, max, (max - view) / 1000);
  };

  useEffect(() => {
    if (active) {
      setMax(view + 500);
    }
  }, [active]);
  useEffect(() => {
    setActive(aa.inView);
  }, [aa.inView]);
  return (
    <div className="modal" onScroll={dd} ref={containerRef}>
      <div ref={ref}>
        <TowerInfo />
        <AddChar />
        <div className="lastTopic" ref={aa.ref}>
          <img src="/background/tower/tower112.png" className="tower11" />
          <img
            src="/background/tower/tower12.png"
            className="tower12"
            style={{ opacity: max == 0 ? 0 : 1 - (max - view) / 500 }}
          />

          <div className="description5">
            The imposing Tower of Agreement rises in the center of the Ayyon,
            dividing it into two conventional parts and reminding each
            inhabitant of what must not be forgotten in this unfriendly world
            despite differences of opinion.
          </div>
          <div className="return">
            <img src="/background/tower/tower10.png" className="tower10" />
            <div className="description6" onClick={onTop}>
              Return to the top
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

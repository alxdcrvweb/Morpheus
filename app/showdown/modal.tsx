import "@/styles/tower.scss";
import AddChar from "./addChar";
import TowerInfo from "./towerInfo";

const Modal = ({
  setAnimation,
  setHud,
}: {
  setAnimation: (a: string) => void;
  setHud: (h: boolean) => void;
}) => {
  return (
    <div>
      <TowerInfo />
      <AddChar setAnimation={setAnimation} setHud={setHud}/>
    </div>
  );
};
export default Modal;

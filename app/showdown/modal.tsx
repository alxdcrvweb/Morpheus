import "@/styles/tower.scss";
import AddChar from "./addChar";
import TowerInfo from "./towerInfo";
import { useConnect } from "@/store/useConnect";

const Modal = ({
  setAnimation,
  setHud,
}: {
  setAnimation: (a: string) => void;
  setHud: (h: boolean) => void;
}) => {
  const { address } = useConnect();
  return (
    <div>
      <TowerInfo setAnimation={setAnimation} setHud={setHud} />
      {address && <AddChar />}
    </div>
  );
};
export default Modal;

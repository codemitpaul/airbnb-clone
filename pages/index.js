import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Appartements from "../components/Appartements";
import Header from "../components/Header";
import Icons from "../components/Icons";
import PopupPlayer from "../components/PopupPlayer";
import Update from "../components/Update";

export default function Home() {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <div className="overflow-x-hidden z-0 h-screen w-screen">
      {modal && <PopupPlayer />}
      <Update />
      <Header />
      <Icons />
      <Appartements />
    </div>
  );
}

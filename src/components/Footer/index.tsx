import Image from "next/image";
import ButtonActions from "../ButtonActions";
import TimeMusic from "../TimeMusic";
import ActionsPlayer from "../ActionsPlayer";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          className="rounded"
          src={"/album.jpg"}
          alt="Capa do Charlie brown Jr"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <strong className="font-normal">Como tudo deve ser</strong>
          <span className="text-xs text-zinc-400">Charlie Brown Jr</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ButtonActions />
        <TimeMusic />
      </div>
      <ActionsPlayer />
    </footer>
  );
}

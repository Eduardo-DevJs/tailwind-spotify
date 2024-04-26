import { Play } from "lucide-react";
import Image from "next/image";
import PLayAlbum from "../PlayAlbum";

export default function Album() {
  return (
    <div>
      <a
        href="#"
        className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
      >
        <Image
          src={"/album.jpg"}
          alt="Capa do Charlie brown Jr"
          width={104}
          height={104}
        />
        <strong>Charlie Brown Jr</strong>
        <button className=" w-12 h-12 flex items-center justify-center pl-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <PLayAlbum />
        </button>
      </a>
    </div>
  );
}

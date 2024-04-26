import Image from "next/image";

export default function CardDone() {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded-md p-3 flex flex-col gap-2  hover:bg-white/10"
    >
      <Image
        src={"/album.jpg"}
        className="w-full"
        alt="Capa do Charlie brown Jr"
        width={120}
        height={120}
      />
      <strong>Dauly Mix 1</strong>
      <span className="text-sm text-zinc-500">Charlie Brown Jr - Chorão</span>
    </a>
  );
}

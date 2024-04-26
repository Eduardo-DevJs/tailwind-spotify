import { HomeIcon, Library, Search } from "lucide-react";
import React from "react";

export default function Aside() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Pesquisa
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Sua biblioteca
        </a>
      </nav>

      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Hot Hits Brasil{" "}
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Aniver Funk
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          My playlist 13
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Charlie Brown Jr
        </a>
      </nav>
    </aside>
  );
}

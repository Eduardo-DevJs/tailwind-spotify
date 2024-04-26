import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Title from "../Title";
import CardDone from "../CardDone";
import Album from "../Albuns";
import { useState } from "react";

export default function Main() {
  let quantidadeDeAlbuns = 5;
  let quantidadeCardDone = 5;

  function getAllAlbuns() {
    const albuns = [];
    for (let i = 0; i <= quantidadeDeAlbuns; i++) {
      albuns.push(<Album key={i} />);
    }

    return albuns;
  }

  function getAllCardDone() {
    const cardDone = [];
    for (let i = 0; i <= quantidadeCardDone - 1; i++) {
      cardDone.push(<CardDone key={i} />);
    }

    return cardDone;
  }

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-6">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <Title>Bom dia Eduardo</Title>
      <div className="grid grid-cols-3 gap-4 mt-4">{getAllAlbuns()}</div>

      <Title>Feito para Eduardo de Oliveira</Title>
      <div className="grid grid-cols-5 gap-4 mt-4">{getAllCardDone()}</div>
    </main>
  );
}

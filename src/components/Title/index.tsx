import { PropsWithChildren } from "react";

export default function Title({children}: PropsWithChildren) {
  return (
    <h1  className="font-semibold text-3xl mt-10">
      {children}
    </h1>
  )
}

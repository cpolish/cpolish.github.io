import type { JSX, PropsWithChildren } from "react";

import "./Page.css";


type PageProps = PropsWithChildren<{ id: string }>;


export default function Page({ children, id }: PageProps): JSX.Element {
  return (
    <section id={id}>
      {children}
    </section>
  );
}

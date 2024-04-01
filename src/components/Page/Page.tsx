import "./Page.css";

import type { JSX, PropsWithChildren } from "react";


type PageProps = PropsWithChildren<{ id: string }>;


export default function Page({ children, id }: PageProps): JSX.Element {
  return (
    <section id={id}>
      {children}
    </section>
  );
}

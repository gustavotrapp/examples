import React from "react";

type Props = {
  title: string;
};
export const ComponenteComProps = ({ title }: Props) => {
  return <h1>{title}</h1>;
};

type PropsChildren = {
  children: React.ReactNode;
};

export const ComponenteComChildren = ({ children }: PropsChildren) => {
  return <div>{children}</div>;
};

export const ExemploDePassamentoDeProps = () => {
  return (
    <main>
      <ComponenteComProps title="Eu sou um título" />
      <ComponenteComChildren>
        <h1>Eu sou uma children</h1>
      </ComponenteComChildren>
    </main>
  );
};

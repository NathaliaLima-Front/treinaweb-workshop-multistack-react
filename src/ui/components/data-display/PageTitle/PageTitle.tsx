import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;

/*
  * Para importar, caso o componente seja exportado como default não precisa colocar entre chaves

  * Caso tenha mais de um componente é necessário colocar entre {}

  * Para que uma propriedade seja opcional deve-se colocar '?' na frente da mesma - exemplo: subtitle?: string

  * Para que uma propriedade tenha mais de um tipo disponível colocar pipe como separador - exemplo: subtitle?: string | JSX.Element

  * Caso a propriedade necessite de tags, exemplo, <h2>Olá</h2>, colocar como tipo JSX.Element, assim ele consegue fazer a leitura como elemento

  ** PARA PROPS:

    * Para colocar tipagem, colocar : na frente

    * React.FC (tipagem própria do React) - functional component - componente criado com uma função

    * Após colocar tipagem, deve-se declarar interface, onde colocamos as propriedades do componente e seus respectivos tipos (string, number, ...)

    * Após isso deve-se colocar no React.FC<PageTitleProps>, para que seja ligado
*/

import { experimentalStyled as styled } from "@material-ui/core";
import { Avatar, Rating } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;

/*
    * Para colocar o numero de colunas da grid, utilizar a propriedade grid-template-columns
        Exemplo: grid-template-columns: 60px 1fr (onde 60px é da primeira coluna e 1fr é uma fração, ele vai preencher o restante do elemento)

    * Para repetir um valor com css, ao invés de colocar por exemplo:
        grid-template-rows: auto auto auto;
        utilizar o repeat, onde passa o número de vezes que será repetido e o valor
        grid-template-rows: repeat(3, auto);
        grid-template-rows: repeat(3, 40px);

    * grid-template-areas separa e especifica cada elemento do grid para poder alinhar e separar corretamente
        colocar entre aspas o nome e pular linha, finalizar com ;
        * Em seguida, em cada elemento, colocar a propriedade grid-area com o nome escolhido em grid-template-areas

    * gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
        Espaçamento entre os elementos, no caso acima está 0.5 nas linhas (vertical) e 2 nas colunas (horizontal)

    * aspect-ratio: 1
        Para sempre manter a proporção do elemento, no caso 1 a largura e altura serão sempre iguais
*/

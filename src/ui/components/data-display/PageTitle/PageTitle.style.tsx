import { experimentalStyled as styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5) + " " + 0};
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + 0};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

/* 
    * ${({theme}) => theme.spacing(5) + ' ' + 0}
        substitui margin - de 8px em 8px - concatenando ficaria margin: 40px 0;

    * ${({theme}) => theme.spacing(2)} 0;
        também é uma forma de concatenar, mesmo sem colocar o espaço
    
    * color: ${(props) => props.theme.palette.primary.main}
        passando caminho completo da documentação do material

    * color: ${({theme}) => theme.palette.primary.main}
        dessa forma extrai do proprio props, no caso theme
*/

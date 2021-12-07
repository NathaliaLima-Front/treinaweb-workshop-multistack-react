import { experimentalStyled as styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;

/*
    * Podemos estilizar um elemento comum do html como div, h2, etc, passando em styled()

    * Também podemos estilizar um componente, para estilizar algo que já existe, por exemplo: styled(AppBar) - que é do próprio Material

    * Para estilizar os elementos que estão dentro de HeaderAppBar, sem precisar especificar cada um utilizar o seguinte:
        dentro de HeaderAppBar = styled(AppBar)`:
        começa a classe com .Mui (classe Material ui - sempre começa assim, padrão do Material)
        no exemplo para Toolbar: .MuiToolbar-root (assim acessa a raiz do elemento)

        * Ele estiliza automaticamente para o meio
*/

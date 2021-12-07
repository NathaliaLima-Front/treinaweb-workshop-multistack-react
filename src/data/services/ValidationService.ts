export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8;
  },
};

/*
    * .replace(/\D/g,  '') -> começa a expressão regular com /;
        para pegar somente o que não for número, utilizar o D (maiúsculo);
        para pegar todos os dígitos do input, utilizar /g, ou seja, pega de forma global;
        por fim, substitui tudo que não for número por string vazia
*/

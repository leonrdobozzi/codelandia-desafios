export interface StateFromApi {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  id: string;
}

export interface ISelect {
  childs: String[];
  name: string;
  id: string;
  text: string | undefined;
}

export interface ISideTitleSelect {
  childs: String[];
  title: string;
  id: string;
}

export interface ITabTitle {
  title: string;
}

export interface IWayChecker {
  page: string;
}

export interface ILinks {
  text: string;
  destiny: string;
  buttonText: string;
}

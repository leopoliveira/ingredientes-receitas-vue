import type { Categoria } from "../interfaces/Categoria"

export async function obterCategorias():Promise<Categoria[]> {
  const url = "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json";

  const response = await fetch(url);

  return await response.json();
}



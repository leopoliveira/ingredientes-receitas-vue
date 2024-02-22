import type { Receita } from "@/interfaces/Receita";
import type { Categoria } from "../interfaces/Categoria"

export async function obterCategorias(): Promise<Categoria[]> {
  const url = "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json";

  const response = await fetch(url);

  const categorias: Categoria[] = await response.json();

  return categorias;
}

export async function obterReceitas(ingredientes: string[] = []): Promise<Receita[]> {
  const url = "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json";

  const response = await fetch(url);

  const receitas:Receita[] = await response.json();

  if(ingredientes.length > 0){
    return receitas.filter(rec => rec.ingredientes.filter(ing => ingredientes.includes(ing)));
  }

  return receitas;
}



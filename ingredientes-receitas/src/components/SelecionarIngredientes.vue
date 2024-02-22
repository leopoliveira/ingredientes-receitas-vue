<script lang="ts">
import type { Categoria } from "../interfaces/Categoria";
import { obterCategorias } from "../data/receitas";
import CardCategoria from "../components/CardCategoria.vue";
import BotaoPrincipal from "../components/BotaoPrincipal.vue";

export default {
  data() {
    return {
      listaCategorias: [] as Categoria[],
      textoBtnPrincipal: "Buscar receitas!" as string,
    };
  },
  async created() {
    this.listaCategorias = await obterCategorias();
  },
  components: {
    CardCategoria,
    BotaoPrincipal,
  },
  emits: ["adicionarIngrediente", "removerIngrediente"],
};
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta
      receita.
    </p>
    <ul class="categorias">
      <li
        v-for="(categoria, index) in listaCategorias"
        :key="index">
        <CardCategoria
          :categoria="categoria"
          @adicionar-ingrediente="
            $emit('adicionarIngrediente', $event)
          "
          @remover-ingrediente="
            $emit('removerIngrediente', $event)
          " />
      </li>
    </ul>
    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <BotaoPrincipal :texto="textoBtnPrincipal" />
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>

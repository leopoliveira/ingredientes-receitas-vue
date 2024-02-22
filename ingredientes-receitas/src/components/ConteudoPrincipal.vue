<script lang="ts">
import MostrarReceitas from "./MostrarReceitas.vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "./SuaLista.vue";

type Page = "SelecionarIngredientes" | "MostrarReceitas";

export default {
  data() {
    return {
      ingredientes: [] as string[],
      paginaAtual: "SelecionarIngredientes" as Page,
    };
  },
  components: {
    SelecionarIngredientes,
    SuaLista,
    MostrarReceitas,
  },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      if (this.ingredientes.includes(ingrediente)) {
        return;
      }
      this.ingredientes.push(ingrediente);
    },
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(
        (itemDaLista) => ingrediente != itemDaLista
      );
    },
    navegar(pagina: Page) {
      this.paginaAtual = pagina;
    },
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes
        v-if="paginaAtual === 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente($event)"
        @remover-ingrediente="removerIngrediente($event)"
        @buscar-receitas="navegar('MostrarReceitas')" />
      <MostrarReceitas
        v-else-if="paginaAtual === 'MostrarReceitas'"
        :ingredientes="ingredientes"
        @editar-receitas="navegar('SelecionarIngredientes')" />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>

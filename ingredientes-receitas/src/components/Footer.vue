<script lang="ts">
export default {};
</script>

<template>
  <footer>
    <p class="rodape paragrafo">
      <a
        class="link-github"
        href="https://github.com/leopoliveira"
        target="_blank"
        >Desenvolvido por Leonardo Oliveira | 2024 - Projeto fictício
        sem fins comerciais.</a
      >
    </p>
  </footer>
</template>

<style scoped>
.rodape {
  background: var(--verde-escuro, #263a29);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}

.link-github {
  color: inherit;
  text-decoration: none;
}
</style>

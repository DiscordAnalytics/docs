<script setup lang="ts">

interface Card {
  title: string;
  description: string;
  image?: string;
  link: string;
}
defineProps<{
  cards: Card[]
}>()
</script>

<template>
  <div class="cards">
    <div
      v-for="card in $props.cards"
      :key="card.title"
      class="card"
    >
      <a :href="card.link">
        <img
          v-if="card.image"
          :src="card.image"
          :alt="card.title"
        >
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
}

.card {
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.cards .card img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}

.card a {
  text-decoration: none;
}

.card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.card p {
  font-size: 1rem;
  color: var(--vp-c-text-2);
}
</style>
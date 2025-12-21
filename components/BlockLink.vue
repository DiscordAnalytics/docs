<script setup lang="ts">
defineProps<{
  href: string;
  title: string;
  description?: string;
}>()
</script>

<template>
  <a :href="$props.href">
    <h3>{{ $props.title }}</h3>
    <p v-if="$props.description">{{ $props.description }}</p>
  </a>
</template>

<style scoped>
a {
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
  padding: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  width: 100%;
  display: block;
  margin-block: 1em;
}

a:hover {
  background-color: var(--vp-code-block-bg);
}


a h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
a p {
  font-size: 1rem;
  color: var(--vp-c-text-2);
}
</style>
<script setup lang="ts">
defineProps<{
  href: string
  title: string
  description?: string
}>()
</script>

<template>
  <a :href="$props.href">
    <p v-if="$props.description">{{ $props.description }}</p>
    <h3>{{ $props.title }}</h3>
  </a>
</template>

<style scoped>
a {
  border-radius: 0.5em;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
  padding: 1em 0.75rem;
  cursor: pointer;
  transition: all 0.2s linear;
  text-decoration: none;
  width: 100%;
  display: block;
  margin-block: 1em;
}

a:hover {
  border: 1px solid var(--accent-foreground);
}

a h3 {
  font-size: 1em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
a p {
  font-size: 0.8em;
  color: var(--vp-c-text-2);
}
</style>

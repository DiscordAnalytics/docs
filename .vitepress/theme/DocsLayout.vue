<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {ref, onMounted} from "vue";

const { Layout } = DefaultTheme

const logoPath = ref(`/brand/long_logo_dark.webp`);

onMounted(() => {
  const html = document.querySelector("html");

  if (html) {
    html.classList.add('theme-blue')
    if (html.classList.contains('dark')) logoPath.value = `/brand/long_logo_light.webp`
  }
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <img
        :src="logoPath"
        alt="Discord Analytics"
        class="logo"
      >
    </template>
  </Layout>
</template>

<style>
.VPNavBarTitle {
  display: flex;
}

.logo {
  width: 4em;
}
</style>
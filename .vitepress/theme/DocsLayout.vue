<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {onMounted} from "vue";
import {useData} from "vitepress";

const { Layout } = DefaultTheme
const { isDark } = useData();

onMounted(() => {
  const html = document.querySelector("html");

  if (html) {
    html.classList.add('theme-blue')
  }
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <img
        :src="isDark ? '/brand/long_logo_light.webp' : '/brand/long_logo_dark.webp'"
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
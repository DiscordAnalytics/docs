<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {useData} from "vitepress";
import {onMounted} from "vue";

const { Layout } = DefaultTheme
const { isDark } = useData()

function getLogoPath (): string {
  const variant = isDark.value ? 'light' : 'dark';

  return `/brand/long_logo_${variant}.webp`
}

onMounted(() => {
  const html = document.querySelector("html");

  if (html) html.classList.add('theme-blue')
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <img
        :src="getLogoPath()"
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
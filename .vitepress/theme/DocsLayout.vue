<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {useData} from "vitepress";
import {computed, onMounted} from "vue";

const { Layout } = DefaultTheme
const { isDark } = useData()

const logoPath = computed(() => {
  return `/brand/long_logo_${isDark.value ? 'light' : 'dark'}.webp`
})

onMounted(() => {
  const html = document.querySelector("html");

  if (html) html.classList.add('theme-blue')
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
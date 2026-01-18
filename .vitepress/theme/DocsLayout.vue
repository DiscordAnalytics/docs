<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {onMounted, ref, watch} from "vue";
import {useData} from "vitepress";

const { Layout } = DefaultTheme
const { isDark } = useData();

const imageLink = ref<string>(isDark ? '/brand/long_logo_light.webp' : '/brand/long_logo_dark.webp')

onMounted(() => {
  const html = document.querySelector("html");

  if (html) {
    html.classList.add('theme-blue')
  }
})

watch(isDark, (value) => {
  imageLink.value = value ? '/brand/long_logo_light.webp' : '/brand/long_logo_dark.webp'
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <img
        :src="imageLink"
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
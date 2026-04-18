<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme

onMounted(() => {
  const html = document.querySelector('html')

  if (html) {
    html.classList.add('theme-blue')
  }
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <img
        src="https://r2.discordanalytics.xyz/images/brand/long_logo_dark.webp"
        alt="Discord Analytics"
        class="logo dark-only"
      />
      <img
        src="https://r2.discordanalytics.xyz/images/brand/long_logo_light.webp"
        alt="Discord Analytics"
        class="logo light-only"
      />
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

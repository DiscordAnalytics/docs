<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { isDark } = useData()

const imageLink = computed(() =>
  isDark.value
    ? 'https://r2.discordanalytics.xyz/images/brand/long_logo_dark.webp'
    : 'https://r2.discordanalytics.xyz/images/brand/long_logo_light.webp',
)

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
      <img :src="imageLink" alt="Discord Analytics" class="logo" />
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

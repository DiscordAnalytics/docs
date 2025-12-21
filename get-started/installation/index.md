# Installation

:::info
We've provided some code snippets for your information to make it easier for you to understand how to integrate Discord Analytics into your project.

**It's up to you to adapt these examples to your current code.**
:::

<script setup>
import { ref } from 'vue';
import Cards from '../../components/Cards.vue';

const cards = ref([
  {
    title: 'Discord.js',
    description: 'JavaScript/TypeScript',
    image: 'https://r2.discordanalytics.xyz/images/docs/get-started/installation/djs_banner.png',
    link: '/docs/get-started/installation/discordjs',
  },
  {
    title: 'Eris',
    description: 'JavaScript/TypeScript',
    image: 'https://r2.discordanalytics.xyz/images/docs/get-started/installation/eris_banner.png',
    link: '/docs/get-started/installation/eris',
  },
  {
    title: 'Oceanic.js',
    description: 'JavaScript/TypeScript',
    image: 'https://r2.discordanalytics.xyz/images/docs/get-started/installation/oceanic_banner.png',
    link: '/docs/get-started/installation/oceanicjs',
  },
  {
    title: 'Java',
    description: 'Discord4J, Javacord, JDA',
    image: 'https://r2.discordanalytics.xyz/images/docs/get-started/installation/java_banner.png',
    link: '/docs/get-started/installation/java',
  },
  {
    title: 'Discord.py',
    description: 'Python',
    image: 'https://r2.discordanalytics.xyz/images/docs/get-started/installation/discordpy_banner.png',
    link: '/docs/get-started/installation/discordpy',
  },
]);
</script>

<Cards :cards="cards" />
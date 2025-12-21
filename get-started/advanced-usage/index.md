# Advanced usage

A few articles on how to get the most out of Discord Analytics.

<script setup>
import { ref } from 'vue';
import Cards from '../../components/Cards.vue';

const cards = ref([
  {
    title: 'Teams',
    description: "What could be better than collaboration? Give whoever you want access to your robot's stats in total security!",
    link: '/docs/main/get-started/advanced-usage/teams',
  },
  {
    title: 'Using ESM (Javascript)',
    description: "Are you using ESModules in your project? No problem, you'll just need to adapt your code.",
    link: '/docs/main/get-started/advanced-usage/esm',
  },
  {
    title: 'Optimize events (Javascript)',
    description: "Save performance by avoiding having to declare the same event twice!",
    link: '/docs/main/get-started/advanced-usage/optimize-events',
  },
  {
    title: 'Receive votes',
    description: "Setup a webhook to receive an universal webhook in your app!",
    link: '/docs/main/get-started/advanced-usage/receive-votes',
  },
  {
    title: 'Custom Events',
    description: "Create the stats that best suit your bot!",
    link: '/docs/main/get-started/advanced-usage/custom-events',
  },
]);
</script>

<Cards :cards="cards" />
# Oceanic.js

## Compatibility

The package is compatible with oceanic.js v1.9.0 or higher

:::warning
Discord Analytics is not comptible with Oceanic.js shards.
:::

## Dependency

Let's install `@discordanalytics/oceanic`'s package :

:::tabs
== npm
```shell
npm install @discordanalytics/oceanic
```

== yarn
```bash
yarn add @discordanalytics/oceanic
```

== pnpm
```bash
pnpm install @discordanalytics/oceanic
```
:::

## Installation

:::tabs
== JavaScript
```javascript
// Import Oceanic.js's client
const { Client } = require("oceanic.js")
// import discordanalytics
const { default: DiscordAnalytics } = require("@discordanalytics/oceanic")

// Create Discord client
const client = new Client({
  auth: "Bot <YOUR_BOT_TOKEN>",
  gateway: {
    intents: ["GUILDS"] // This intent is required
  }
})

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client,
  api_key: 'YOUR_API_TOKEN'
});



// When Discord client is ready
client.on('ready', async () => {
  await analytics.init();
  // start tracking selected events
  analytics.trackEvents();
  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.connect();
```

== TypeScript
```typescript
// Import Oceanic.js's client
import { Client} from "oceanic.js";
// import discordanalytics
import DiscordAnalytics from "@discordanalytics/oceanic";

// Create Discord client
const client = new Client({
  auth: "Bot <YOUR_BOT_TOKEN>",
  gateway: {
    intents: ["GUILDS"] // This intent is required
  }
})

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client,
  api_key: 'YOUR_API_TOKEN'
});

// When Discord client is ready
client.on('ready', async () => {
  await analytics.init();
  // start tracking selected events
  analytics.trackEvents();
  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.connect();
```
:::

## Advanced usage

<script setup lang="ts">
import BlockLink from '../../../components/BlockLink.vue'
</script>

<BlockLink href="/get-started/advanced-usage/esm" title="Using ESM (JavaScript)" />
<BlockLink href="/get-started/advanced-usage/optimize-events" title="Optimize events (NodeJS)" />

## Complete installation

To complete installation, please restart your bot.

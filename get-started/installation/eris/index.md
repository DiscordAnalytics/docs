# Eris

## Compatibility

The package is compatible with Eris v0.17.2 or higher

:::info
Please note that Eris doesn't support interactions locales. So some stats can be unavailable.
:::

:::warning
Discord Analytics is not compatible with Eris shards.
:::

## Dependency

Let's install `@discordanalytics/eris`'s package :

:::tabs
== npm
```shell
npm install @discordanalytics/eris
```

== yarn
```bash
yarn add @discordanalytics/eris
```

== pnpm
```bash
pnpm install @discordanalytics/eris
```
:::

## Installation

:::tabs
== JavaScript
```javascript
const {Client} = require("eris");
const {default: DiscordAnalytics} = require("@discordanalytics/eris");

// Create Eris client.
// Don't forget to replace token by your Discord bot token !
const bot = new Client("token");

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client: bot,
  api_key: 'YOUR_API_TOKEN'
});

bot.on("ready", async () => {
  await analytics.init();

  // start tracking selected events
  analytics.trackEvents();

  console.log("Ready!");
});

// Login to Discord
bot.connect();
```

== TypeScript
```typescript
import {Client} from "eris";
import DiscordAnalytics from "@discordanalytics/eris";

// Create Eris client.
// Don't forget to replace token by your Discord bot token !
const bot = new Client("token");

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client: bot,
  api_key: 'YOUR_API_TOKEN'
});

bot.on("ready", async () => {
  await analytics.init();

  // start tracking selected events
  analytics.trackEvents();

  console.log("Ready!");
});

// Login to Discord
bot.connect();
```
:::

## Advanced usage

<script setup lang="ts">
import BlockLink from '../../../components/BlockLink.vue'
</script>

<BlockLink href="/docs/get-started/advanced-usage/esm" title="Using ESM (JavaScript)" />
<BlockLink href="/docs/get-started/advanced-usage/optimize-events" title="Optimize events (NodeJS)" />

## Complete installation

To complete installation, please restart your bot.

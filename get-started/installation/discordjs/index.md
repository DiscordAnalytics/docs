# Discord.js

## Compatibility

The package is compatible with Discord.js v14 or higher

## Dependency

Let's install `@discordanalytics/discordjs`'s package :

:::tabs 
== npm
```bash
npm install @discordanalytics/discordjs
```

== yarn
```bash
yarn add @discordanalytics/discordjs
```

== pnpm
```bash
pnpm install @discordanalytics/discordjs
```
:::

## Installation

:::tabs
== JavaScript
```javascript
// Import Discord.js's client and intents
const { Client, IntentsBitField } = require("discord.js")
// import discord-analytics
const { default: DiscordAnalytics } = require("@discordanalytics/discordjs")

// Create Discord client
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds] // This intent is required
});

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client: client,
  api_key: 'YOUR_API_TOKEN',
  sharded: false // Set it to true if your bot use shards
});

// When Discord client is ready
client.on('clientReady', async () => {
  await analytics.init();
  analytics.trackEvents();
  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
```

== TypeScript
```typescript
// Import Discord.js's client and intents
import { Client, IntentsBitField } from "discord.js";
// import discord-analytics
import DiscordAnalytics from "@discordanalytics/discordjs";

// Create Discord client
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds] // This intent is required
});

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client: client,
  api_key: 'YOUR_API_TOKEN',
  sharded: false // Set it to true if your bot use shards
});

// When Discord client is ready
client.on('clientReady', async () => {
  await analytics.init();
  analytics.trackEvents();
  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
```
:::

::: details For self-hosted instances
By default, the stats are sent to `discordanalytics.xyz`. You can change this using the `api_url` property:

```javascript
const analytics = new DiscordAnalytics({
  // ...
  api_url: "https://discordanalytics.example.com"
});
```
:::

In order to start your bot with Discord Analytics, you need to add `NODE_ENV` to you environment variables and set it to `production`:
:::tabs
== Linux/MacOS
```shell
export NODE_ENV=production
```

== Windows Powershell
```bash
$env:NODE_ENV='production'
```
:::
You can also add it to your `.env` file if you have one or add it to your start script in your `package.json`:
```json
{
  // ...
  "scripts": {
    "start": "NODE_ENV=production node index.js"
  }
}
```
This feature allows you to don't send stats to Discord Analytics while you're in a development environment by just removing the variable.

## Advanced usage

<script setup lang="ts">
import BlockLink from '../../../components/BlockLink.vue'
</script>

<BlockLink href="/docs/get-started/advanced-usage/esm" title="Using ESM (JavaScript)" />
<BlockLink href="/docs/get-started/advanced-usage/optimize-events" title="Optimize events (NodeJS)" />

## Complete installation

To complete installation, please restart your bot. And wait on the dashboard until you get this page:

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/installation/configuration_success_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/installation/configuration_success_light.png){.light-only}

# Oceanic.js

## Compatibility

The package is compatible with oceanic.js v1.9.0 or higher

:::warn
Discord Analytics is not comptible with Oceanic.js shards.
:::

## Dependency

Let's install `discord-analytics`'s package :

:::tabs
::tab [NPM]
```sh
npm install discord-analytics
```
::

::tab [Yarn]
```bash
yarn add discord-analytics
```
::

::tab [PNPM]
```bash
pnpm install discord-analytics
```
::
:::endtabs

## Installation

:::tabs
::tab [JavaScript]
```javascript
// Import Oceanic.js's client
const { Client } = require("oceanic.js")
// import discord-analytics
const { default: DiscordAnalytics } = require("discord-analytics/oceanic")

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
  client: client,
  apiToken: 'YOUR_API_TOKEN'
});

// start tracking selected events
analytics.trackEvents();

// When Discord client is ready
client.on('ready', () => {
  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
```
::

::tab [TypeScript]
```typescript
// Import Oceanic.js's client
import { Client} from "oceanic.js";
// import discord-analytics
import DiscordAnalytics from "discord-analytics/oceanic";

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
  client: client,
  apiToken: 'YOUR_API_TOKEN'
});

// start tracking selected events
analytics.trackEvents();

// When Discord client is ready
client.on('ready', () => {
  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
```
::
:::endtabs

## Advanced usage

:::link [Using ESM (Javascript)](/docs/main/get-started/advanced-usage/esm)

:::

:::link [Optimize events (NodeJS)](/docs/main/get-started/advanced-usage/optimize-events)

:::

## Complete installation

To complete installation, please restart your bot.

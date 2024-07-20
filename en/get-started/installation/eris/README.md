# Eris

## Compatibility

The package is compatible with Eris v0.17.2 or higher

:::info
Please note that Eris doesn't support interactions locales. So some stats can be unavailable.
:::

:::warn
Discord Analytics is not compatible with Eris shards.
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
const {Client} = require("eris");
const {default: DiscordAnalytics} = require("discord-analytics/eris");

// Create Eris client.
// Don't forget to replace token by your Discord bot token !
const bot = new Client("token");

bot.on("ready", () => {
  // Create Discord Analytics instance
  // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
  const analytics = new DiscordAnalytics({
    client: client,
    apiToken: 'YOUR_API_TOKEN'
  });

  // start tracking selected events
  analytics.trackEvents();

  console.log("Ready!");
});

// Login to Discord
bot.connect();
```
::

::tab [TypeScript]
```typescript
import {Client} from "eris";
import DiscordAnalytics from "discord-analytics/eris";

// Create Eris client.
// Don't forget to replace token by your Discord bot token !
const bot = new Client("token");

bot.on("ready", () => {
  // Create Discord Analytics instance
  // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
  const analytics = new DiscordAnalytics({
    client: client,
    apiToken: 'YOUR_API_TOKEN'
  });

  // start tracking selected events
  analytics.trackEvents();

  console.log("Ready!");
});

// Login to Discord
bot.connect();
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

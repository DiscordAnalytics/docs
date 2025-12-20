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

Let's install `@discordanalytics/eris`'s package :

:::tabs
::tab [NPM]
```sh
npm install @discordanalytics/eris
```
::

::tab [Yarn]
```bash
yarn add @discordanalytics/eris
```
::

::tab [PNPM]
```bash
pnpm install @discordanalytics/eris
```
::
:::endtabs

## Installation

:::tabs
::tab [JavaScript]
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
::

::tab [TypeScript]
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
::
:::endtabs

## Advanced usage

:::link [Using ESM (Javascript)](/docs/main/get-started/advanced-usage/esm)

:::

:::link [Optimize events (NodeJS)](/docs/main/get-started/advanced-usage/optimize-events)

:::

## Complete installation

To complete installation, please restart your bot.

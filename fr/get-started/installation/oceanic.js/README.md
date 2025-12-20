# Oceanic.js

## Compatibility

The package is compatible with oceanic.js v1.9.0 or higher

:::warn
Discord Analytics is not comptible with Oceanic.js shards.
:::

## Dependency

Let's install `@discordanalytics/oceanic`'s package :

:::tabs
::tab \[NPM]

```sh
npm install 
```

::

::tab [Yarn]

```bash
yarn add @discordanalytics/oceanic
```

::

::tab [PNPM]

```bash
pnpm install @discordanalytics/oceanic
```

::
:::endtabs

## Installation

:::tabs
::tab [JavaScript]

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

::

::tab [TypeScript]

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

::
:::endtabs

## Advanced usage

:::link [Using ESM (Javascript)](/docs/main/get-started/advanced-usage/esm)

:::

:::link [Optimize events (NodeJS)](/docs/main/get-started/advanced-usage/optimize-events)

:::

## Complete installation

To complete installation, please restart your bot.

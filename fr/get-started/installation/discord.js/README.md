# Discord.js

## Compatibilité

Le package est compatible avec Discord.js v14 ou supérieur

## Dépendance

Let's install `@discordanalytics/discordjs`'s package :

:::tabs
::tab \[NPM]

```shell
npm install @discordanalytics/discordjs
```

::

::tab [YARN]

```bash
yarn add @discordanalytics/discordjs
```

::

::tab [PNPM]

```bash
pnpm install @discordanalytics/discordjs
```

::
:::endtabs

## Installation

:::tabs
::tab [JavaScript]

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

::

::tab [TypeScript]

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

::
:::

## Usage avancé

:::link [Utiliser ESM (Javascript)](/docs/main/get-started/advanced-usage/esm)

:::

:::link [Optimiser les évènements (NodeJS)](/docs/main/get-started/advanced-usage/optimize-events)

:::

## Terminer l'installation

Pour terminer l'installation, veuillez redémarrer votre bot.

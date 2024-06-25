# Discord.js

## Compatibility

The package is compatible with Discord.js v14 or higher

## Dependency

Let's install `discord-analytics`'s package :

:::tabs 
::tab [NPM]
```sh
npm install discord-analytics
```
::

::tab [YARN]
```bash
yarn add discord-analytics
```
::

::tab [PNPM]
```bash
pnpm install discord-analytics
```
::
:::

## Installation

{% tabs %}
{% tab title="JavaScript" %}
{% code overflow="wrap" %}
```javascript
// Import Discord.js's client and intents
const { Client, IntentsBitField } = require("discord.js")
// import discord-analytics
const { default: DiscordAnalytics } = require("discord-analytics/discordjs")

// Create Discord client
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds] // This intent is required
});

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client: client,
  apiToken: 'YOUR_API_TOKEN',
  sharded: false // Set it to true if your bot use shards
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
{% endcode %}
{% endtab %}

{% tab title="TypeScript" %}
```typescript
// Import Discord.js's client and intents
import { Client, IntentsBitField } from "discord.js";
// import discord-analytics
import DiscordAnalytics from "discord-analytics/discordjs";

// Create Discord client
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds] // This intent is required
});

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const analytics = new DiscordAnalytics({
  client: client,
  apiToken: 'YOUR_API_TOKEN',
  sharded: false // Set it to true if your bot use shards
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
{% endtab %}
{% endtabs %}

### Advanced usage

{% content-ref url="../advanced-usage/esm.md" %}
[esm.md](../advanced-usage/esm.md)
{% endcontent-ref %}

{% content-ref url="../advanced-usage/optimize-events.md" %}
[optimize-events.md](../advanced-usage/optimize-events.md)
{% endcontent-ref %}

## Complete installation

To complete installation, please restart your bot.

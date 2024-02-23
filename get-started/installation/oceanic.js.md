---
description: Insallation guide for oceanic.js
cover: ../../.gitbook/assets/banner.png
coverY: 0
---

# Oceanic.js

## Compatibility

The package is compatible with oceanic.js v1.9.0 or higher



{% hint style="warning" %}
Discord Analytics is not comptible with Oceanic.js shards.
{% endhint %}

## Dependency

Let's install `discord-analytics`'s package :

{% tabs %}
{% tab title="NPM" %}
```sh
npm install discord-analytics
```
{% endtab %}

{% tab title="YARN" %}
```bash
yarn add discord-analytics
```
{% endtab %}

{% tab title="PNPM" %}
```bash
pnpm install discord-analytics
```
{% endtab %}
{% endtabs %}

## Installation

{% tabs %}
{% tab title="JavaScript" %}
{% code overflow="wrap" %}
```javascript
// Import Discord.js's client and intents
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
{% endcode %}
{% endtab %}

{% tab title="TypeScript" %}
```typescript
// Import Discord.js's client and intents
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

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}


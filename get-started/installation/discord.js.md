---
description: Insallation guide for discord.js
cover: ../../.gitbook/assets/banner.png
coverY: 0
---

# Discord.js

## Compatibility

The package is compatible with Discord.js v14 or higher

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
const { Client, GatewayIntentBits.Guilds } = require("discord.js")
// import discord-analytics
const { LibType, default: DiscordAnalytics } = require("discord-analytics")

// Create Discord client
const client = new Client();

// When Discord client is ready
client.on('ready', () => {
  // Create Discord Analytics instance
  // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
  const analytics = new DiscordAnalytics(client, LibType.DJS, {
    trackGuilds: true,
    trackGuildsLocale: true,
    trackInteractions: true,
    trackUserCount: true,
    trackUserLanguage: true,
  }, "YOUR_API_TOKEN");
  
  // start tracking selected events
  analytics.trackEvents();

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
import { Client, GatewayIntentBits.Guilds } from "discord.js";
// import discord-analytics
import DiscordAnalytics, { LibType } from "discord-analytics";

// Create Discord client
const client = new Client();

// When Discord client is ready
client.on('ready', () => {
  // Create Discord Analytics instance
  // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
  const analytics = new DiscordAnalytics(client, LibType.DJS, {
    trackGuilds: true,
    trackGuildsLocale: true,
    trackInteractions: true,
    trackUserCount: true,
    trackUserLanguage: true,
  }, "YOUR_API_TOKEN");
  
  // start tracking selected events
  analytics.trackEvents();

  console.log("Bot is ready!");
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
```
{% endtab %}
{% endtabs %}

## Complete installation

To complete installation, please restart your bot.

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}

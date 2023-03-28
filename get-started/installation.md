---
description: Let's install Discord Analytics on your Discord bot !
---

# 🌐Installation

Compatibility

Check if your bot is compatible with Discord Analytics !

| Library    | Compatibility   |
| ---------- | --------------- |
| Discord.js | v14.0 or higher |
| Eris       | ❌               |
| Discord.py | ❌               |
| PyCord     | ❌               |
| JavaCord   | ❌               |
| Discord4J  | ❌               |

## Install dependencies

Let's install `discord-analytics`'s package :&#x20;

{% tabs %}
{% tab title="NPM" %}
```sh
npm install discord-analytics
```
{% endtab %}

{% tab title="YARN" %}
```sh
yarn add discord-analytics
```
{% endtab %}

{% tab title="PIP" %}
{% hint style="info" %}
Not available at the moment...
{% endhint %}
{% endtab %}
{% endtabs %}

## Package setup

### Discord.js

{% tabs %}
{% tab title="JavaScript" %}
<pre class="language-javascript" data-overflow="wrap"><code class="lang-javascript">// Import Discord.js's client and intents
const { Client, GatewayIntentBits.Guilds } = require("discord.js")
// import discord-analytics
const DiscordAnalytics, { LibType } = require("discord-analytics")

// Create Discord client
const client = new Client();

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const da = new DiscordAnalytics(client, LibType.DJS, {
  trackInteractions: true,
  trackMessageCreate: true,
<strong>  trackMessageDelete: true,
</strong>  trackGuildDelete: true,
  trackGuildCreate: true,
  trackUserCount: true
}, "YOUR_API_TOKEN");

// When Discord client is ready
client.on('ready', () => {
  // Start tracking selected events
  da.trackEvents();
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
</code></pre>

{% content-ref url="installation.md" %}
[installation.md](installation.md)
{% endcontent-ref %}
{% endtab %}

{% tab title="TypeScript" %}
```typescript
// Import Discord.js's client and intents
import { Client, GatewayIntentBits.Guilds } from "discord.js";
// import discord-analytics
import DiscordAnalytics, { LibType } from "discord-analytics";

// Create Discord client
const client = new Client();

// Create Discord Analytics instance
// Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
const da = new DiscordAnalytics(client, LibType.DJS, {
  trackInteractions: true,
  trackMessageCreate: true,
  trackMessageDelete: true,
  trackGuildDelete: true,
  trackGuildCreate: true,
  trackUserCount: true
}, "YOUR_API_TOKEN");

// When Discord client is ready
client.on('ready', () => {
  // Start tracking selected events
  da.trackEvents();
});

// Login to Discord
// Don't forget to replace token by your Discord bot token !
client.login('token');
```
{% endtab %}
{% endtabs %}

### Eris

{% hint style="info" %}
Not available at the moment...
{% endhint %}

### Discord.py

{% hint style="info" %}
Not available at the moment...
{% endhint %}

### PyCord

{% hint style="info" %}
Not available at the moment...
{% endhint %}

### JavaCord

{% hint style="info" %}
Not available at the moment...
{% endhint %}

### Discord4J

{% hint style="info" %}
Not available at the moment...
{% endhint %}

## Finish installation

To finish the installation, please start your bot and check if there is no errors from Discord Analitycs.

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}

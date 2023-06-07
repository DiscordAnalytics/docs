---
description: Installation guide for Eris
cover: ../../.gitbook/assets/banner.png
coverY: 0
---

# Eris

### Compatibility

The package is compatible with Discord.js v0.17.2 or higher

### Dependency

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

### Installation

{% tabs %}
{% tab title="JavaScript" %}
{% code overflow="wrap" %}
```javascript
const {Client, Constants, CommandInteraction, ComponentInteraction} from "eris";
const {LibType, default: DiscordAnalytics} = require("../../lib");

// Create Eris client.
// Don't forget to replace token by your Discord bot token !
const bot = new Client("token");

bot.on("ready", () => {
  // Create Discord Analytics instance
  // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
  const analytics = new DiscordAnalytics(client, LibType.ERIS, {
    trackGuilds: true,
    trackGuildsLocale: true,
    trackInteractions: true,
    trackUserCount: true,
    trackUserLanguage: false, // not supported
  }, "YOUR_API_TOKEN");

  // start tracking selected events
  analytics.trackEvents();

  console.log("Ready!");
});

// Login to Discord
bot.connect();
```
{% endcode %}

{% hint style="info" %}
To disable console warns, you can add the `disableErisWarnings option :`&#x20;

```javascript
const analytics = new DiscordAnalytics(client, LibType.ERIS, {/* options */}, "YOUR_API_TOKEN", true);
```
{% endhint %}
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import {Client, Constants, CommandInteraction, ComponentInteraction} from "eris";
import DiscordAnalytics, {LibType} from "../../lib";

// Create Eris client.
// Don't forget to replace token by your Discord bot token !
const bot = new Client("token");

bot.on("ready", () => {
  // Create Discord Analytics instance
  // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
  const analytics = new DiscordAnalytics(client, LibType.ERIS, {
    trackGuilds: true,
    trackGuildsLocale: true,
    trackInteractions: true,
    trackUserCount: true,
    trackUserLanguage: false, // not supported
  }, "YOUR_API_TOKEN");

  // start tracking selected events
  analytics.trackEvents();

  console.log("Ready!");
});

// Login to Discord
bot.connect();
```

{% hint style="info" %}
To disable console warns, you can add the `disableErisWarnings option :`&#x20;

```typescript
const analytics = new DiscordAnalytics(client, LibType.ERIS, {/* options */}, "YOUR_API_TOKEN", true);
```
{% endhint %}
{% endtab %}
{% endtabs %}

### Complete installation

To complete installation, please restart your bot.

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}

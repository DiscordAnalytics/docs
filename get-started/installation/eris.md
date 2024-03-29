---
description: Installation guide for Eris
cover: ../../.gitbook/assets/banner.png
coverY: 0
---

# Eris

### Compatibility

The package is compatible with Eris v0.17.2 or higher

{% hint style="info" %}
Please note that Eris doesn't support interactions locales. So some stats can be unavailable.
{% endhint %}

{% hint style="warning" %}
Discord Analytics is not compatible with Eris shards.
{% endhint %}

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
{% endcode %}
{% endtab %}

{% tab title="TypeScript" %}
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
{% endtab %}
{% endtabs %}

### Complete installation

To complete installation, please restart your bot.

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}

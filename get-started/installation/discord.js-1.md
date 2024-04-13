---
description: Insallation guide for discord.js
cover: ../../.gitbook/assets/banner.png
coverY: 0
---

# Discord.py

## Compatibility

The package is compatible with Discord.py v2.3.0 or higher

## Dependency

Let's install `discord-analytics`'s package:&#x20;

```sh
pip install discordanalytics
```

## Installation

```python
import discord
from discordanalytics import DiscordAnalytics

class MyClient(discord.Client):
  async def on_ready(self):
    print(f'Logged on as {self.user}!')

intents = discord.Intents.default()
intents.message_content = True
client = MyClient(intents=intents)

analytics = DiscordAnalytics(client, "YOUR_API_TOKEN")
analytics.track_events()

client.run('TOKEN')
```

## Complete installation

To complete installation, please restart your bot.

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}


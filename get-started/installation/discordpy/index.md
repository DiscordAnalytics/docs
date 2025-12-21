# Discord.py

## Compatibility

The package is compatible with Discord.py v2.3.0 or higher

## Dependency

Let's install `discordanalytics`'s package:&#x20;

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

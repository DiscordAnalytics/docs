# Discord.py

## Compatibilité

Le package est compatible avec Discord.py v2.3.0 ou supérieur

## Dépendance

Nous allons installer le package `discord-analytics`

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

## Terminer l'installation

Pour terminer l'installation, veuillez redémarrer votre bot.

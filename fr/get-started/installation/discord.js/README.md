# Discord.js

## Compatibilité

Le package est compatible avec Discord.js v14 ou supérieur

## Dépendance

Nous allons installer le package `discord-analytics` :

:::tabs
::tab \[NPM]

```shell
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
:::endtabs

## Installation

:::tabs
::tab [JavaScript]

```javascript
// Importer le Client et des Intents de Discord.js
const { Client, IntentsBitField } = require("discord.js")
// Importer discord-analytics
const { default: DiscordAnalytics } = require("discord-analytics/discordjs")

// Créer le client Discord.js
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds] // Cet Intent est requis
});

// Créer une instance Discord Analytics
// N'oubliez pas de remplacer YOUR_API_TOKEN par votre token Discord Analytics
const analytics = new DiscordAnalytics({
  client: client,
  apiToken: 'YOUR_API_TOKEN',
  sharded: false // Remplacez par true si votre bot utilise les shards
});

// Commencer à tracker les tous les évènements
analytics.trackEvents();

// Lorsque le client Discord.js est prêt
client.on('ready', () => {
  console.log("Bot is ready!");
});

// Se connecter à Discord
// N'oubliez pas de remplacer token par votre token Discord !
client.login('token');
```

::

::tab [TypeScript]

```typescript
// Importer le Client et des Intents de Discord.js
import { Client, IntentsBitField } from "discord.js"
// Importer discord-analytics
import DiscordAnalytics from "discord-analytics/discordjs"

// Créer le client Discord.js
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds] // Cet Intent est requis
});

// Créer une instance Discord Analytics
// N'oubliez pas de remplacer YOUR_API_TOKEN par votre token Discord Analytics
const analytics = new DiscordAnalytics({
  client: client,
  apiToken: 'YOUR_API_TOKEN',
  sharded: false // Remplacez par true si votre bot utilise les shards
});

// Commencer à tracker les tous les évènements
analytics.trackEvents();

// Lorsque le client Discord.js est prêt
client.on('ready', () => {
  console.log("Bot is ready!");
});

// Se connecter à Discord
// N'oubliez pas de remplacer token par votre token Discord !
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

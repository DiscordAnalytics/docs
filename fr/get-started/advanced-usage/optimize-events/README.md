# Optimize events (NodeJS)

:::warn
DISCLAIMER: This section is intended for advanced users. For installation guide, please refer to the [installation page](/docs/main/get-started/installation).
:::

In this example, we'll use DiscordJS, but you can use any supported library (NodeJS only).

***

So, let's take the provided code example for DiscordJS:

```javascript
/* imports */

const client = new Client(/* ... */);

const analytics = new DiscordAnalytics(/* ... */);

analytics.trackEvents();

client.login('token');
```

Here, the `.trackEvents()` function takes care of defining the `ready` and `interactionCreate` events itself, which can create duplicates with those you define in your own code. That's why we are going to use these two events that you have defined.

***

We are going to remove the `trackEvents()` function and perform the same work it does, but within events useful for other purposes.

```javascript
/* imports */

const client = new Client(/* ... */);

const analytics = new DiscordAnalytics(/* ... */);

// analytics.trackEvents();

// Define a ready event to initalize Discord Analytics
client.once("ready", async () => {
  await analytics.init()
  console.log("Bot is connected!")
})

// Define an interactionCreate event to receive interaction stats
client.on("interactionCreate", async (interaction) => {
  await analytics.trackInteractions(interactions)

  // Your code goes here
})

client.on("guildCreate", async (guild) => {
  await analytics.trackGuilds(guild, "create")
})

client.on("guildDelete", async (guild) => {
  await analytics.trackGuilds(guild, "delete")
})

client.login('token');
```

And that's it. You now have the most optimized version of Discord Analytics!

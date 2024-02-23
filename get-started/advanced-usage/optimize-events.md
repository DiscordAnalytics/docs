---
description: Save performance by avoiding having to declare the same event twice!
cover: ../../.gitbook/assets/banner.png
coverY: 0
---

# Optimize events (JavaScript)

{% hint style="warning" %}
DISCLAIMER: This section is intended for advanced users. For installation guide, please refer to the installation page:

[installation](../installation/ "mention")
{% endhint %}

In this example, we'll use DiscordJS, but you can use any library (JavaScript).

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

<pre class="language-javascript"><code class="lang-javascript">/* imports */

const client = new Client(/* ... */);

const analytics = new DiscordAnalytics(/* ... */);

<strong>// analytics.trackEvents();
</strong><strong>
</strong><strong>// Define a ready event to initalize Discord Analytics
</strong><strong>client.once("ready", async () => {
</strong><strong>  await analytics.init()
</strong><strong>  console.log("Bot is connected!")
</strong><strong>})
</strong><strong>
</strong><strong>// Define an interactionCreate event to receive interaction stats
</strong>client.on("interactionCreate", async (interaction) => {
  await analytics.trackInteractions(interactions)

  // Your code goes here
})

client.login('token');
</code></pre>

And that's it. You now have the most optimized version of Discord Analytics!

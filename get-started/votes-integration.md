# Votes Integration

In this tutorial, we will learn how to connect a votes provider to Discord Analytics to receive statistics on the dashboard.

## Compatibility

Discord Analytics is compatible with the following votes providers:

| Provider                                       | Compatibility status                 |
| ---------------------------------------------- | ------------------------------------ |
| [Top.gg](https://top.gg)                       | ✅Fully compatible                    |
| [BotList.me](https://botlist.me)               | 🏗️Compatible (but may contain bugs) |
| [Discord Bot List](https://discordbotlist.com) | ✅ Fully compatible                   |
| [Discord Place](https://discord.place)         | 🏗️Compatible (but may contain bugs)  |
| [Discords.com](https://discords.com)         | ✅ Fully compatible                   |

:::info
Want more? Ask us on our [Discord Server](https://discordanalytics.xyz/support) ;)
:::

## Configuration

::::tabs
== Top.gg
::: warning
Due to a recent update to top.gg's webhooks, the integration with votes may not work as expected. We are currently working with top.gg to restore the integration as soon as possible.
:::

1. Login on [top.gg](https://top.gg)
2. Go to your bot's page (`https://top.gg/bot/:your-bot-id`)
3. And click on "edit"

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_1.png)

4. Go to "Webhooks" tab

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_2.png)

5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/topgg` (Replace `:your-bot-id` with your bot's ID)
6. Paste your Discord Analytics API key in the "Webhook Secret" field

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_3.png)

7. Click on "Save" then "Send a Test". If everything is correct, you will receive a confirmation email.
8. Enjoy your stats :)

== BotList.me
**Webhook endpoint:** `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/botlistme` (Replace `:your-bot-id` with your bot's ID)
<br>
**Webhook Secret:** your Discord Analytics API key
> We do not have a bot on BotList.me, which is why we are unable to provide you with a complete tutorial. If you are able to write it, we invite you to visit the GitHub repository of this documentation.
> We apologize for the inconvenience caused.

<script setup lang="ts">
import BlockLink from '../components/BlockLink.vue'
</script>

<BlockLink href="https://github.com/DiscordAnalytics/docs/tree/main/get-started/votes-integration.md" title="Edit votes-integration.md on GitHub" />

== Discord Bot List
1. First, login on [Discord Bot List](https://discordbotlist.com)
2. Go to your bot's page (`https://`discordbotlist.com`/bots/:your-bot-id`)
3. Click on "Edit"

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/dbl_step_1.png)

4. Scroll down to the "Upvote Webhook" section

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/dbl_step_2.png)

5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/dblist` (Replace `:your-bot-id` with your bot's ID)
6. Paste your Discord Analytics API key in the "Webhook Secret" field

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/dbl_step_3.png)

7. Click on "Save" then "Test Webhook". If everything is correct, you will receive a confirmation email.
8. Enjoy your stats :)

== Discord Place
1. Login on [discordlist.gg](https://discord.place)
2. Go to your bot's page (`c'est https://discord.place/bots/:your-bot-id/manage`)
4. Go to the "Webhook" section
5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/discordplace` (Replace `:your-bot-id` with your bot's ID)
6. Paste your Discord Analytics API key in the "Webhook Authorization" field

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/discordplace.png)

7. Click on "Save". If everything is correct, you will receive a confirmation email.
8. Enjoy your stats :)
::

== Discords.com
1. Login on [discords.com](https://discords.com)
2. Go to your bot's settings
3. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/discordscom` (Replace `:your-bot-id` with your bot's ID)
4. Paste your Discord Analytics token in the "Webhook Authorization" field
5. Click on "Update Webhook". If everything is correct, you will receive a confirmation email.
6. Enjoy your stats :)
::::

## To Go Further

If you would like, you can receive a universal webhook for all the voting providers you have set up directly in your application! To do this, go to the following page:

<BlockLink href="/docs/get-started/advanced-usage/receive-votes" title="Receive votes" />
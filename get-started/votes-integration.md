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
== Top.gg (Automated)
::: warning
The one-click configuration is not available for self-hosted instances.
:::

1. Login on [top.gg](https://top.gg)
2. Go to your bot's page (`https://top.gg/bot/:your-bot-id`)
3. And click on "edit"

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_1_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_1_light.png){.light-only}

4. Go to the "Integrations & API" tab and click on "Install" on Discord Analytics

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_2_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_2_light.png){.light-only}

5. Click on "Send a Test". If everything is correct, you will receive a confirmation email.
And you should now be able to receive your votes in Discord Analytics from Top.gg.

== Top.gg (Manual)

1. Login on [top.gg](https://top.gg)
2. Go to your bot's page (`https://top.gg/bot/:your-bot-id`)
3. And click on "edit"

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_1_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_1_light.png){.light-only}

4. Go to the "Integrations & API" tab and click on "Create"

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_3_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_3_light.png){.light-only}

5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/webhooks/topgg` and enable `Votes Created` event

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_4_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_4_light.png){.light-only}

6. Copy the webhook secret

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_5_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_5_light.png){.light-only}

7. Go to your [Discord Analytics dashboard](http://discordanalytics.xyz/dash) and in the "Votes Configuration" tab, open Top.gg's manual configuration modal:

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_6_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_6_light.png){.light-only}

8. Paste the webhook secret and submit.

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_7_dark.png){.dark-only}
![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/topgg_step_7_light.png){.light-only}

7. You can come back to Top.gg, click on the cross then "Send a Test". If everything is correct, you will receive a confirmation email.
And you should now be able to receive your votes in Discord Analytics from Top.gg.

== BotList.me
**Webhook endpoint:** `https://discordanalytics.xyz/api/webhooks/botlistme`
<br>
**Webhook Secret:** Get one from your Discord Analytics dashboard in the "Votes Configuration" tab
> We do not have a bot on BotList.me, which is why we are unable to provide you a complete tutorial. If you are able to write it, we invite you to visit the GitHub repository of this documentation.
> We apologize for the inconvenience caused.

<script setup lang="ts">
import BlockLink from '../components/BlockLink.vue'
</script>

<BlockLink href="https://github.com/DiscordAnalytics/docs/tree/main/get-started/votes-integration.md" title="Edit votes-integration.md on GitHub" />

== Discord Bot List
1. First, login on [Discord Bot List](https://discordbotlist.com)
2. Go to your bot's page (`https://discordbotlist.com/bots/:your-bot-id`)
3. Click on "Edit"

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/dbl_step_1.png)

4. Scroll down to the "Upvote Webhook" section

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/dbl_step_2.png)

5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/webhooks/dblist`
6. Paste the webhook secret you got from your Discord Analytics dashboard in the "Votes Configuration" tab in the "Webhook Secret" field

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/dbl_step_3.png)

7. Click on "Save" then "Test Webhook". If everything is correct, you will receive a confirmation email.
And you should now be able to receive your votes in Discord Analytics from Discord Bot List.

== Discord Place
1. Login on [discord.place](https://discord.place)
2. Go to your bot's page (`https://discord.place/bots/:your-bot-id/manage`)
4. Go to the "Webhook" section
5. Paste the following url in the "URL" field: `https://discordanalytics.xyz/api/webhooks/discordplace`
6. Paste the webhook secret you got from your Discord Analytics dashboard in the "Votes Configuration" tab in the "Secret" field

![Image](https://r2.discordanalytics.xyz/images/docs/get-started/votes-integration/discordplace.png)

7. Click on "Save". If everything is correct, you will receive a confirmation email.
And you should now be able to receive your votes in Discord Analytics from Discord.place.


== Discords.com
1. Login on [discords.com](https://discords.com)
2. Go to your bot's settings
3. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/webhooks/discordscom`
4. Paste the webhook secret you got from your Discord Analytics dashboard in the "Votes Configuration" tab in the "Webhook Authorization" field
5. Click on "Update Webhook". If everything is correct, you will receive a confirmation email.
And you should now be able to receive your votes in Discord Analytics from Discords.com.
::::

## To Go Further

If you would like, you can receive a universal webhook for all the voting providers you have set up directly in your application! To do this, go to the following page:

<BlockLink href="/docs/get-started/advanced-usage/receive-votes" title="Receive votes" />
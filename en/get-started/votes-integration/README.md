# Votes Integration

In this tutorial, we will learn how to connect a votes provider to Discord Analytics to receive statistics on the dashboard.

## Compatibility

Discord Analytics is compatible with the following votes providers:

| Provider                                       | Compatibility status                 |
| ---------------------------------------------- | ------------------------------------ |
| [Top.gg](https://top.gg)                       | ✅Fully compatible                    |
| [BotList.me](https://botlist.me)               | 🏗️Compatible (but may contain bugs) |
| [Discord Bot List](https://discordbotlist.com) | ✅ Fully compatible                   |
| [Discord List](https://discordlist.gg)         | ✅ Fully compatible                   |
| [Discords.com](https://discords.com)         | ✅ Fully compatible                   |

:::warn
Want more? Ask us on our [Discord Server](https://discordanalytics.xyz/go/support) ;)
:::

## Configuration

:::tabs
::tab [Top.gg]
1. Login on [top.gg](https://top.gg)
2. Go to your bot's page (`https://top.gg/bot/:your-bot-id`)
3. And click on "edit"

![Image](https://i.imgur.com/qxNhBwF.png)

4. Go to "Webhooks" tab

![Image](https://i.imgur.com/Aw4jdqo.png)

5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/topgg` (Replace `:your-bot-id` with your bot's ID)
6. Paste your Discord Analytics token in the "Webhook Secret" field

![Image](https://i.imgur.com/RQJd8yt.png)

7. Click on "Save" then "Send a Test". If everything is correct, you will receive a confirmation email.
8. Enjoy your stats :)
::

::tab [BotList.me]
**Webhook endpoint:** `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/botlistme` (Replace `:your-bot-id` with your bot's ID)
<br>
**Webhook Secret:** your Discord Analytics token
:::info
We do not have a bot on BotList.me, which is why we are unable to provide you with a complete tutorial. If you are able to write it, we invite you to visit the GitHub repository of this documentation.

We apologize for the inconvenience caused.
:::

:::link [Edit votes-integration/README.md on GitHub](https://github.com/DiscordAnalytics/docs/tree/main/get-started/votes-integration/README.md)

:::
::

::tab [Discord Bot List]
1. First, login on [Discord Bot List](https://discordbotlist.com)
2. Go to your bot's page (`https://`discordbotlist.com`/bots/:your-bot-id`)
3. Click on "Edit"

![Image](https://i.imgur.com/qxJJZNA.png)

4. Scroll down to the "Upvote Webhook" section

![Image](https://i.imgur.com/L9iqvdv.png)

5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/dblist` (Replace `:your-bot-id` with your bot's ID)
6. Paste your Discord Analytics token in the "Webhook Secret" field

![Image](https://i.imgur.com/WfDZ7Wz.png)

7. Click on "Save" then "Test Webhook". If everything is correct, you will receive a confirmation email.
8. Enjoy your stats :)
::

::tab [Discord List]
1. Login on [discordlist.gg](https://discordlist.gg)
2. Go to your bot's page (`https://discordlist.gg/bot/:your-bot-id`)
3. Go to "Manage" tab
4. Go to "Webhooks" tab
5. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/discordlist` (Replace `:your-bot-id` with your bot's ID)
6. Paste your Discord Analytics token in the "Webhook Authorization" field

![Image](https://i.imgur.com/9V0KONL.png)

7. Click on "Update Webhook". If everything is correct, you will receive a confirmation email.
8. Enjoy your stats :)
::

::tab [Discordscom]
1. Login on [discords.com](https://discords.com)
2. Go to your bot's settings
3. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/discordscom` (Replace `:your-bot-id` with your bot's ID)
4. Paste your Discord Analytics token in the "Webhook Authorization" field
5. Click on "Update Webhook". If everything is correct, you will receive a confirmation email.
6. Enjoy your stats :)
::
:::endtabs

## To Go Further

If you would like, you can receive a universal webhook for all the voting providers you have set up directly in your application! To do this, go to the following page:

:::link [Receive votes](/docs/main/get-started/advanced-usage/receive-votes)

:::

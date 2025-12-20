# Receive votes

Setup a webhook to receive an universal webhook in your app!

## Beginners guide

### Before you start

Before starting, you must meet the following prerequisites:

* Followed the tutorial [Votes Integration](/docs/main/get-started/votes-integration)
* Have install [NodeJS](https://nodejs.org/en/download/) (tested with 20.10.0 version)
* Have a [registered bot on Discord Analytics](/docs/main/get-started/bot-registration)
* Have installed [Git CLI](https://git-scm.com/downloads)

### Configuring your app

In first place, let's download our app sample. Open a terminal and run the following command:

```bash
npx wrangler generate my-votes-webhook-app https://github.com/DiscordAnalytics/votes-webhook-example
```

Then, go to the folder created by the command:

```bash
cd my-votes-webhook-app
```

This app sampel use NodeJS, so we need to install the dependencies:

```bash
npm install
```

Then, we need to open the `index.js` file in a text editor like Visual Studio Code:

```bash
code index.js
```

Locate the following lines and update their values:

```javascript
const discordWebhook = "https://discord.com/api/webhooks/channelId/webhookToken"
const discordAnalyticsToken = "TOKEN"
```

:::info
Follow the [official Discord article](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) if you don't know how to create a webhook.
:::

Once you have completed this step, you can now deploy your app:

```bash
npm run deploy
```

Log in to your Cloudflare account, then return to your terminal. Once the deployment is complete, retrieve the URL and open it in your browser to verify that the deployment was successful.

![Image](https://r2.discordanalytics.xyz/images/docs/advanced-usage/receive-votes/terminal_screenshot.png)

### Registering webhook on Discord Analytics

Login to Discord Analytics dashboard, then go to your bot's settings. Scroll to the "Votes Webhook" section

![Image](https://r2.discordanalytics.xyz/images/docs/advanced-usage/receive-votes/webhook_field.png)

Paste your URL in the field and add `/webhook` at the end.

:::info
Your URL should look like this: `https://<app_name>.<username>.workers.dev/webhook`
:::

Now you can save and test your webhook. If everything is correct, you will receive a message in your Discord server. If not, review the steps above.

## Webhooks reference

This section of the page is designed for advanced users who want to integrate the Discord Analytics webhook into their application.

### How does it work?

![Image](https://r2.discordanalytics.xyz/images/docs/advanced-usage/receive-votes/operating_diagram.png)

When a user votes for your bot on a bot list, the bot list sends a POST request to the Discord Analytics webhook. Our API save the vote, if you have set up a webhook, it will send a POST request to your app.

### Handling a webhook

Firstly, your endpoint must use HTTPS. If you are a beginner, we recommend using [Cloudflare tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/) (requires full access to the host machine) or [Cloudflare Workers](https://workers.cloudflare.com) (NodeJS, Rust, C and C++ only).
Otherwise, you can set up a reverse proxy with the web server of your choice.

Next, your endpoint must return a 200 status code. Otherwise, the Discord Analytics API will retry the request after 10 seconds (after 15 failed attempts, the request will be discarded).

Aside from these two constraints, you are free to di as you please, respecting our [Terms of Service](/docs/main/legals/terms-of-service).

### Request schema

To verify the origin of a webhook, our API adds your bot's Discord Analytics token to the `Authorization` header.

Here is a table listing each of the parameters included in the webhook body:

| Property   | Value type                                              | Description                          |
| ---------- | ------------------------------------------------------- | ------------------------------------ |
| `bot_id`    | String                                                 | Your bot's ID                        |
| `voter_id`  | String                                                 | The voter's ID                       |
| `provider` | `botlistme`, `dblist`, `discordlist`, `topgg` or `test` | The voting provider                  |
| `date`     | String                                                  | The vote date                        |
| `raw_data` | Object                                                  | The data sent by the voting provider |

### Example request

```json
{
  "body": {
    "bot_id": "123456789012345678",
    "voter_id": "123456789012345678",
    "provider": "topgg",
    "date": "2021-01-01T00:00:00.000Z",
    "raw_data": {
      // Data sent by the voting provider
    }
  },
  "headers": {
    "Authorization": "YOUR_DISCORD_ANALYTICS_TOKEN"
  }
}
```

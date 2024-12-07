# Intégration des votes

Dans ce tutoriel, nous allons apprendre à connecter un fournisseur de votes à Discord Analytics pour recevoir des statistiques sur le tableau de bord.

## Compatibilité

Discord Analytics est compatible avec les fournisseurs de votes suivants :

| Fournisseur                                          | Compatibilité                                                  |
| ---------------------------------------------------- | -------------------------------------------------------------- |
| [Top.gg](https://top.gg)             | ✅Entièrement compatible                                        |
| [BotList.me](https://botlist.me)     | 🏗️Compatible (mais peut contenir des bugs) |
| [Discord Bot List](https://discordbotlist.com)       | ✅ Entièrement compatible                                       |
| [Discord List](https://discordlist.gg)               | ✅ Entièrement compatible                                       |
| [Discords.com](https://discords.com) | ✅ Fully compatible                                             |

:::warn
Vous en voulez plus ? Demandez-nous sur notre [serveur Discord](https://discordanalytics.xyz/go/support) ;)
:::

## Configuration

:::tabs
::tab \[Top.gg]

1. Connectez-vous sur [top.gg](https://top.gg)
2. Allez à la page de votre bot (`https://top.gg/bot/:your-bot-id`)
3. Et cliquez sur "edit"

![Image](https://i.imgur.com/qxNhBwF.png)

4. Aller à l'onglet "Webhooks"

![Image](https://i.imgur.com/Aw4jdqo.png)

5. Collez l'URL suivante dans le champ "URL Webhook" : `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/topgg` (Remplacez `:your-bot-id` par l'ID de votre bot)
6. Collez votre token Analytics Discord dans le champ "Webhook Secret"

![Image](https://i.imgur.com/RQJd8yt.png)

7. Cliquez sur "Save" puis sur "Send a Test". Si tout est correct, vous recevrez un e-mail de confirmation.
8. Profitez de vos stats :)
   ::

::tab [BotList.me]
**Webhook endpoint:** `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/botlistme` (Replace `:your-bot-id` with your bot's ID) <br>
**Webhook Secret:** your Discord Analytics token
:::info
Nous n'avons pas de bot sur BotList.me, c'est pourquoi nous ne sommes pas en possibilité de vous fournir un tutoriel complet. Si vous avez la possibilité de l'écrire, nous vous invitons à vous rendre sur le dépôt de cette documentation.

Nous vous prions de nous excuser pour la gêne occasionnée.
:::

:::link [Modifier votes-integration/README.md sur GitHub](https://github.com/DiscordAnalytics/docs/tree/main/get-started/votes-integration/README.md)

:::
::

::tab [Discord Bot List]

1. Tout d'abord, connectez-vous sur la [liste de bot Discord](https://discordbotlist.com)
2. Allez à la page de votre bot (`https://discordbotlist.com/bots/:your-bot-id`)
3. Cliquez sur "Edit"

![Image](https://i.imgur.com/qxJJZNA.png)

4. Faites défiler vers le bas la section "Upvote Webhook"

![Image](https://i.imgur.com/L9iqvdv.png)

5. Collez l'URL suivante dans le champ "URL Webhook" : `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/dblist` (Remplacez `:your-bot-id` par l'ID de votre bot)
6. Paste your Discord Analytics token in the "Webhook Secret" field

![Image](https://i.imgur.com/WfDZ7Wz.png)

7. Cliquez sur "Save" puis sur "Test Webhook". Si tout est correct, vous recevrez un e-mail de confirmation.
8. Profitez de vos stats :)
   ::

::tab [Discord List]

1. Connectez-vous sur [discordlist.gg](https://discordlist.gg)
2. Allez à la page de votre bot (`https://discordlist.gg/bot/:your-bot-id`)
3. Aller à l'onglet "Manage"
4. Aller à l'onglet "Webhooks"
5. Collez l'URL suivante dans le champ "URL Webhook" : `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/discordlist` (Remplacez `:your-bot-id` par l'ID de votre bot)
6. Collez votre token Analytics Discord dans le champ "Webhook Authorization"

![Image](https://i.imgur.com/9V0KONL.png)

7. Cliquez sur "Update Webhook". Si tout est correct, vous recevrez un e-mail de confirmation.
8. Enjoy your stats :)
   ::

::tab [Discordscom]

1. Login on [discords.com](https://discords.com)
2. Go to your bot's settings
3. Paste the following url in the "Webhook URL" field: `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/discordscom` (Replace `:your-bot-id` with your bot's ID)
4. Paste your Discord Analytics token in the "Webhook Authorization" field
5. Click on "Update Webhook". If everything is correct, you will receive a confirmation email.
6. Profitez de vos stats :)
   ::
   :::endtabs

## Pour aller plus loin

Si vous le souhaitez, vous pouvez recevoir un webhook universel pour tous les fournisseurs de vote que vous avez mis en place directement dans votre application ! Pour cela, allez à la page suivante :

:::link [Recevoir des votes](/docs/main/get-started/advanced-usage/receive-votes)

:::

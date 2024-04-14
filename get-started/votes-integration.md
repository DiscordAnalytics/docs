# Intégration des votes

Dans ce tutoriel, nous allons apprendre à connecter un service de votes à Discord Analytics pour recevoir des statistiques sur le tableau de bord.

<figure><img src="../.gitbook/assets/votes_page_screenshot.png" alt=""><figcaption><p>Page de votes</p></figcaption></figure>

## Compatible

Discord Analytics is compatible with the following votes providers:

| Service                                       | Statut de la compatibilité                 |
| ---------------------------------------------- | ------------------------------------ |
| [Top.gg](https://top.gg)                       | ✅Entièrement compatible                    |
| [BotList.me](https://botlist.me)               | 🏗️Compatible (mais peut contenir des bugs) |
| [Discord Bot List](https://discordbotlist.com) | ✅ Entièrement compatible                   |

{% hint style="warning" %}
Vous en voulez plus ? Demandez-nous sur notre [serveur Discord](https://discordanalytics.xyz/go/support) ;)
{% endhint %}

## Configuration

{% tabs %}
{% tab title="Top.gg" %}
1. Connectez-vous sur [top.gg](https://top.gg)
2. Rendez-vous sur la page de votre bot (`https://top.gg/bot/:your-bot-id`)
3. Et cliquez sur "edit"

<figure><img src="../.gitbook/assets/topgg_edit_button_location.png" alt="" width="375"><figcaption></figcaption></figure>

4. Allez dans l'onglet "Webhooks"

<figure><img src="../.gitbook/assets/topgg_webhooks_menu_location.png" alt="" width="375"><figcaption></figcaption></figure>

5. Collez l'URL suivante dans le champ "Webhook URL" : `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/topgg` (Remplacez `:your-bot-id` par l'identifiant de votre bot)
6. Collez le token Discord Analytics de votre bot dans le champ "Webhook Secret" (Voir [comment récupérer un token](bot-registration.md) pour plus d'informations)

<figure><img src="../.gitbook/assets/topgg_webhooks_page.png" alt="" width="375"><figcaption></figcaption></figure>

7. Cliquez sur "Save" puis "Send a Test". Si tout est bon, vous devriez avoir reçu un mail de confirmation.
8. Profitez de vos stats :)
{% endtab %}

{% tab title="BotList.me" %}
**Webhook endpoint:** `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/botlistme` (Remplacez `:your-bot-id` par l'identifiant de votre bot)

**Webhook Secret:** Votre token Discord Analytics (Voir [comment récupérer un token](bot-registration.md) pour plus d'informations)

{% hint style="info" %}
Nous ne possédons pas de bot inscrit sur BotList.me, c'est pourquoi nous ne sommes en capacité de vous fournir un tutoriel complet. Si vous êtes en capacité d'en écrire un (en anglais de préférence), nous vous invitions à visiter le dépôt GitHub de cette documentation.

Veuillez nous excuser pour la gêne occasionnée.&#x20;
{% endhint %}

{% embed url="https://github.com/DiscordAnalytics/docs/tree/english/get-started/votes-integration" %}
{% endtab %}

{% tab title="Discord Bot List" %}
1. Tout d'abord, connectez-vous sur [Discord Bot List](https://discordbotlist.com)
2. Allez sur la page de votre bot (`https://discordbotlist.com/bots/:your-bot-id`)
3. Cliquez sur "Edit"

<figure><img src="../.gitbook/assets/dblist_edit_button_location.png" alt="" width="375"><figcaption></figcaption></figure>

4. Faites défiler jusqu'à la section "Upvote Webhook"

<figure><img src="../.gitbook/assets/dblist_webhooks_section.png" alt="" width="375"><figcaption></figcaption></figure>



5. Collez l'URL suivante dans le champ "Webhook URL" : `https://discordanalytics.xyz/api/bots/:your-bot-id/votes/webhooks/dblist` (Remplacez `:your-bot-id` par l'identifiant de votre bot)
6. Collez le token Discord Analytics de votre bot dans le champ "Webhook Secret" (Voir [comment récupérer un token](bot-registration.md) pour plus d'informations)

<figure><img src="../.gitbook/assets/db_list_webhooks_section_completed.png" alt="" width="375"><figcaption></figcaption></figure>

7. Cliquez sur "Save" puis "Test Webhook". Si tout est bon, vous devriez avoir reçu un mail de confirmation.
8. Profitez de vos stats :)
{% endtab %}
{% endtabs %}

## Pour aller plus loin

Si vous le souhaitez, vous pouvez recevoir un webhook universel pour tous les services de votes configurés directement dans votre application ! Pour ce faire, rendez-vous dans la page suivante :

{% content-ref url="advanced-usage/receive-votes.md" %}
[receive-votes.md](advanced-usage/receive-votes.md)
{% endcontent-ref %}

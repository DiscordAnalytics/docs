# Teams

## Introduction

Teams allow you to authorize anyone to access your bot. However, the teammates have access restrictions:

| Permission                | Allowed for teammates |
|---------------------------|-----------------------|
| Get bot's informations    | ✅                    |
| Get & regen bot's token   | ❌                    |
| See bot's stats           | ✅                    |
| Edit team                 | ❌                    |
| Delete bot                | ❌                    |
| See bot's achievements    | ❌                    |
| Edit bot's achievements   | ❌                    |

:::info
For the latest package versions, the team is synchronised with the discord.dev bot's team.
:::

## Edit teammates list

- First, [copy the ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) of the user you want to give access to your bot.
- Then, go to your bot's settings
- Paste the ID in the "Stats Access" section.

![Image](https://i.imgur.com/i55JUgL.png)

- After clicking on ‘Add’, you will be asked to choose a way of sending the invitation to your future teammate.

![Image](https://i.imgur.com/AGtiyIu.png)

:::warn
The email option requires the user to have a Discord Analytics account.
:::

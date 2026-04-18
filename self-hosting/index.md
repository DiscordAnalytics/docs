# Self Hosting

We 100% believe that open-source and self-hosting is the future of software, and that's why we tried to make Discord Analytics as easy as possible to host anywhere you want. But first, you need to take some things in consideration:

:::warning
The cloud version of Discord Analytics is hosted on a reliable infrastructure and all the disposition to ensure maximum availability and data safety have been taken. You need to be aware that when self-hosting, you're the only one person in charge of insuring the availability and data safety. But if you still want to host Discord Analytics by yourself, that's great because it's the best way to learn new skills and ensure complete data sovereignty.
:::

## Choosing a version

To simplify the self hosting experience, we provide Docker Images. We don't want to complicate the configuration process with useless cloud specific features you don't need, that's why choosed to divide each version into sub-images to allow you to pick only the features that you need. You can go even further into customization and optimization by build your own image from the source code (we won't be able to ensure you these build will work as they're not maintened and tested by our team).

| Image                              | Variant             | Description                                                                                                                                            |
|------------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ghcr.io/DiscordAnalytics/api`     | `<version>`         | This is the default variant that include only the basic features of Discord Analytics                                                                  |
|                                    | `<version>-mails`   | This variant include the "mails" feature that allows mail notifications                                                                                |
|                                    | `<version>-reports` | This variant include the "mails" and "reports" features which allow you to receive weeekly and monthly reports                                         |
|                                    | `<version>-full`    | This variant is the one used in the Cloud version of Discord Analytics. It includes all the features plus a rate-limiter and an OpenTelemetry Exporter |
| `ghcr.io/DiscordAnalytics/website` | `<version>`         | This is the self-hosted version that does not include the documentation and the homepage.                                                              |
|                                    | `<version>-cloud`   | This variant is the one used in the Cloud version of Discord Analytics. It includes the documentation                                                  |

To help you, here are some example of image tags:
- `ghcr.io/DiscordAnalytics/api:latest` -> latest version of Discord Analytics' API with no special features
- `ghcr.io/DiscordAnalytics/api:v1.0.0-mails` -> version 1.0.0 of Discord Analytics' API with the mails feature
- `ghcr.io/DiscordAnalytics/api:feat-monetization-full` -> Preview of the `feat/monetization` branch with all the cloud features

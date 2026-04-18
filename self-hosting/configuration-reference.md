# Configuration Reference

This page is aimed at listing all the configuration variables of your Discord Analytics Instance. You'll find here details about which variable is what and how to configure the API and the Website.

## API

Discord Analytics' API uses environment variables to configure common features and a rust configuration file for constants that would allow to customize even more your instance (requires a custom build) but we won't detail theses here as they're not intended to be updated.
You can download these two files from the repository to get a template :
  - https://github.com/DiscordAnalytics/api/blob/master/.env.example
  - https://github.com/DiscordAnalytics/api/blob/master/src/utils/constants.rs

### General variables

Most of these variables are required to use the API no matter which [variant](/self-hosting/#choosing-a-version) you choose to use.

| Variable               | Type    | Required | Default value | Description                                                                                                        |
|------------------------|---------|----------|---------------|--------------------------------------------------------------------------------------------------------------------|
| `PORT`                 | int     | no       | `3001`        | The port where the API is listening                                                                                |
| `API_URL`              | string  | no       |               | The endpoint where the API is available (If you don't use custom images, this should be `$CLIENT_URL/api`)         |
| `CLIENT_URL`           | string  | yes      |               | The endpoint where the Website is available                                                                        |
| `ADMINS`               | string  | yes      |               | A list of Discord IDs of the admins separated by a comma                                                           |
| `DATABASE_URL`         | string  | yes      |               | The [MongoDB connection string](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string) |
| `DATABASE_NAME`        | string  | yes      |               | The MongoDB database name (will be created if it does not exists)                                                  |
| `DISCORD_TOKEN`        | string  | yes      |               | The token of your Discord app (required for DM notifications and bot fetches)                                      |
| `JWT_SECRET`           | string  | yes      |               | The JSON Web Tokens secret (can be generated using the `openssl rand -base64 32` command)                          |
| `ENABLE_REGISTRATIONS` | boolean | no       | `true`        | Whether you want to enable new registrations or not                                                                |
| `CLIENT_SECRET`        | string  | yes      |               | The Client Secret of your Discord app (required for OAuth2)                                                        |
| `CLIENT_ID`            | string  | yes      |               | The ID of your Discord app (required for OAuth2)                                                                   |

### OpenTelemetry variables

These variables are part of the `otlp` feature which is included in the `full` variant.

| Variable        | Type   | Required | Description                                                  |
|-----------------|--------|----------|--------------------------------------------------------------|
| `OTLP_ENDPOINT` | string | yes      | The OpenTelemetry endpoint that will receive logs and traces |
| `OTLP_TOKEN`    | string | yes      | The OpenTelemetry endpoint that will receive logs and traces |
| `OTLP_STREAM`   | string | yes      | The name of the OpenTelemetry stream                         |

### Actix Limitation

These variables are part of the `rate_limiting` feature which is included in the `full` variant.

| Variable         | Type   | Required | Default value            | Description                               |
|------------------|--------|----------|--------------------------|-------------------------------------------|
| `REDIS_URL`      | string | no       | `redis://localhost:6379` | The connection URL of your Redis instance |
| `MS_PER_REQUEST` | int    | no       | `100`                    | INSERT DESCRIPTION HERE                   |
| `BURST_LIMIT`    | int    | no       | `10`                     | INSERT DESCRIPTION HERE                   |

### SMTP

These variables are part of the `mails` feature which is included in the `mails`, `reports` and `full` variants.

| Variable        | Type   | Required | Description                                 |
|-----------------|--------|----------|---------------------------------------------|
| `SMTP`          | string | yes      | The hostname of your SMTP server            |
| `SMTP_MAIL`     | string | yes      | The email address that will send the emails |
| `SMTP_USER`     | string | yes      | The username to connect to your SMTP server |
| `SMTP_PASSWORD` | string | yes      | The password to connect to your SMTP server |

### R2

These variables are part of the `reports` feature which is included in the `reports` and `full` variants.

:::info
Currently Discord Analytics only supports Cloudflare R2 as a storage provider. Let us know if you want to see a wider S3 compatible storage support.
:::

| Variable                    | Type   | Required | Description                                                                                                   |
|-----------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------|
| `R2_BUCKET_NAME`            | string | yes      | The name of your bucket                                                                                       |
| `R2_ACCOUNT_ID`             | string | yes      | The Access Key ID of your User API Token                                                                      |
| `R2_BUCKET_ENDPOINT`        | string | yes      | The API endpoint of your R2 account (should be something like `https://<accountId>.r2.cloudflarestorage.com`) |
| `R2_PUBLIC_BUCKET_ENDPOINT` | string | yes      | The public endpoint of your bucket                                                                            |
| `CLOUDFLARE_ID`             | string | yes      | Your Cloudflare account ID                                                                                    |
| `CLOUDFLARE_TOKEN`          | string | yes      | The Secret Access Key of your User API Token                                                                  |

## Website

Discord Analytics' Website uses a `config.js` file to store variables required for its operation. You'll only need to update this file if you use some special setup that goes beyond the official one or if your want to setup a dev environment.

To update the configuration file, you'll need to download the original one to host:
```bash
wget -o config.js https://github.com/DiscordAnalytics/website/raw/refs/heads/master/public/config.js
```
And once you updated what you needed to update, you can mount it to the container by updating your `docker-compose.yml` file:
```yml
  app:
    # ...
    volumes:
      - ./config.js:/app/dist/public/config.js:ro
    # ...
```

| Variable              | Type   | Required | Default value | Description               |
|-----------------------|--------|----------|---------------|---------------------------|
| `apiBaseUrl`          | string | yes      |               | The base URL of the API   |
| `posthogProjectToken` | string | no       |               | The Posthog project token |
| `posthogApiHost`      | string | no       |               | The Posthog proxy host    |

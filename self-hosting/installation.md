# Installation

Once you chose a version to install, you can start installing installing Discord Analytics on your machine.

## Prerequisites

Before beginning, we'll assume you have checked the following prerequisites:
- [Ubuntu 24.04](https://ubuntu.com/download/server) (other Linux distros & WSL will be fine but this tutorial won't take care of the particularities of these)
- [Docker Engine](https://docs.docker.com/engine/install) and Docker Compose installed (Docker Desktop is fine)
- Basic Linux and networking knowledge

## Downloading images

Let's first download the Docker Compose file:
```bash
wget -o docker-compose.yml https://github.com/DiscordAnalytics/website/raw/refs/heads/master/docker/docker-compose.yml
```

The compose file comes by default with the `latest`, you can change that if you want to use something different. You can also remove the `mongo` container if you prefer using a cloud database.

:::warning
As everything you download from internet, you should always make sure the content of it is what you expect it to be.
:::

Once that's done you can pull the images from the registry
```bash
sudo docker compose pull
```

## Configuring the API

The API can be configured using environment variables (see [Configuration Reference](/self-hosting/configuration-reference)). You can copy the `.env` file from the repository:
```bash
wget -o .env https://github.com/DiscordAnalytics/api/raw/refs/heads/master/.env.example
```

:::info
The following section will only cover the basic configuration. For feature-related configuration, please visit [Configuration Reference](/self-hosting/configuration-reference)
:::

You'll need to complete the following variables:
```dotenv
CLIENT_URL=http://client.url # The URL you plan to make you Discord Analytics instance available
API_URL=http://api.url # If you don't use custom images, this should be http://client.url/api
ADMINS=ID1,ID2 # The Discord IDs of the admins of your instance

# Database
DATABASE_URL=mongodb+srv://root:example@db
DATABASE_NAME=discord-analytics-api # Can stay untouched, the database will be created if it does not exist

DISCORD_TOKEN=ASUPERSECRETTOKEN
JWT_SECRET=ASUPERSECRETSECRET # You can generate a secret using the `openssl rand -base64 32` command
ENABLE_REGISTRATIONS=true # Set to false once you logged in to disable account registrations

CLIENT_SECRET=ASUPERSECRETSECRET # Your Discord Client Secret
CLIENT_ID=ID # Your Discord App ID
```

## Start your instance

Now you can start you Discord Analytics instance:
```bash
sudo docker compose up -d
```

And you can watch the container start using this command:
```bash
sudo watch docker ps
```

### Common issues

Here is a list of common mistakes that could make your instance to don't start:

#### service "api" depends on undefined service "db"

You removed the `mongo` container because you want to use a cloud database but you forgot to remove the container dependency. You can fix this by removing this part of the `docker-compose.yml` file:
```yml
depends_on:
  db:
    condition: service_healthy
```

### Bind for 0.0.0.0:80 failed: port is already allocated

The port `80` in already is in use on your machine. Try to change the listening port in the `docker-compose.yml` file:
```yml
ports:
  - '81:80'
```
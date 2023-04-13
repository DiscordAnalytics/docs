---
description: Insallation guide for discord.js
---

# Discord4J

## Compatibility

The package is compatible with Discord4J version 3.2.4 or higher

## Dependency

Let's install `discord-analytics-d4j`'s package :&#x20;

{% tabs %}
{% tab title="Maven" %}
Add to your `pom.xml` file this:
```xml
<dependencies>
  <dependency>
    <groupId>com.discord4j</groupId>
    <artifactId>discord4j-core</artifactId>
    <version>VERSION</version>
  </dependency>
</dependencies>
```
{% endtab %}
{% tab title="Gradle" %}
Add to your `build.gradle` file this:
```gradle
repositories {
  mavenCentral()
}

dependencies {
  implementation 'com.discord4j:discord4j-core:VERSION'
}
```
{% endtab %}
{% endtabs %}

## Installation

```java
package example;

import discord4j.core.DiscordClient;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.object.entity.User;
import fr.valdesign.DiscordAnalytics;
import fr.valdesign.utilities.EventsTracker;
import reactor.core.publisher.Mono;

import java.io.IOException;

public class DiscordBot {
  public static void main(String[] args) {
    // Create a Discord client
    DiscordClient client = DiscordClient.create("YOUR_BOT_TOKEN");

    Mono<Void> login = client.withGateway((GatewayDiscordClient gateway) ->
      // Handle the ReadyEvent
      gateway.on(ReadyEvent.class, event ->
        Mono.fromRunnable(() -> {
          final User self = event.getSelf();
          System.out.printf("Logged in as %s#%s%n", self.getUsername(), self.getDiscriminator());

          // Initialize what you want to track
          EventsTracker eventsTracker = new EventsTracker();
          eventsTracker.trackInteractions = true;
          eventsTracker.trackGuilds = true;
          eventsTracker.trackUserCount = true;
          eventsTracker.trackUserLanguage = true;
          eventsTracker.trackGuildsLocale = true;

          // Initialize the DiscordAnalytics class
          DiscordAnalytics analytics = new DiscordAnalytics(client, eventsTracker, "YOUR_API_KEY");
          // Start the tracking in a new thread
          // The tracking will be done every 10 minutes to avoid spamming the AP (10 minutes is the minimum)
          new Thread(() -> {
            while (true) {
              try {
                analytics.trackEvents();
                Thread.sleep(600000);
              } catch (IOException | InterruptedException e) {
                e.printStackTrace();
              }
            }
          }).start();
        })));

    // Login the client
    login.block();
  }
}
```
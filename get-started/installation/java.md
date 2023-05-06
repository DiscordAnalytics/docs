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
    <groupId>xyz.discordanalytics</groupId>
    <artifactId>discord-analytics</artifactId>
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
  implementation 'xyz.discordanalytics:discord-analytics:VERSION'
}
```
{% endtab %}
{% endtabs %}

## Installation

{% tabs %}
{% tab title="Discord4J" %}
```java
package example;

import discord4j.core.DiscordClient;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.object.entity.User;
import xyz.discordanalytics.D4JAnalytics;
import xyz.discordanalytics.utilities.EventsTracker;
import reactor.core.publisher.Mono;

import java.io.IOException;

public class ExampleWithD4J {
  public static void main(String[] args) {
    // Create a Discord client
    // Don't forget to replace YOUR_BOT_TOKEN by your Discord bot token !
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
        // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
        D4JAnalytics analytics = new D4JAnalytics(client, eventsTracker, "YOUR_API_KEY");
        // Start the tracking, it will be done every 10 minutes to avoid spamming the API
        try {
          analytics.trackEvents();
        } catch (IOException | InterruptedException e) {
          e.printStackTrace();
        }
      })));

    // Login the client
    login.block();
  }
}
```
{% endtab %}
{% tab title="Javacord" %}
```java
package example;

import xyz.discordanalytics.JavacordAnalytics;
import xyz.discordanalytics.utilities.EventsTracker;
import org.javacord.api.DiscordApi;
import org.javacord.api.DiscordApiBuilder;
import org.javacord.api.entity.intent.Intent;

import java.io.IOException;

public class ExampleWithJavacord {
  public static void main(String[] args) {
    // Create a Discord client
    // Don't forget to replace YOUR_BOT_TOKEN by your Discord bot token !
    DiscordApi api = new DiscordApiBuilder()
        .setToken("YOUR_BOT_TOKEN")
        .addIntents(Intent.MESSAGE_CONTENT)
        .login().join();

    // Initialize what you want to track
    EventsTracker eventsTracker = new EventsTracker();
    eventsTracker.trackInteractions = true;
    eventsTracker.trackGuilds = true;
    eventsTracker.trackUserCount = true;
    eventsTracker.trackUserLanguage = true;
    eventsTracker.trackGuildsLocale = true;

    // Initialize the DiscordAnalytics class
    // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
    JavacordAnalytics analytics = new JavacordAnalytics(api, eventsTracker, "YOUR_API_KEY");
    // Start the tracking, it will be done every 10 minutes to avoid spamming the API
    try {
      analytics.trackEvents();
    } catch (IOException | InterruptedException e) {
      e.printStackTrace();
    }
  }
}
```
{% endtab %}
{% tab title="JDA" %}
```java
// Main class
package example;

import example.jda.ReadyListener;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;

public class ExampleWithJDA {
  public static void main(String[] args) {
    // Create a Discord client
    // Don't forget to replace YOUR_BOT_TOKEN by your Discord bot token !
    JDA api = JDABuilder.createDefault("YOUR_BOT_TOKEN").build();

    // Handle the ReadyEvent
    api.addEventListener(new ReadyListener());
  }
}
```
```java
// ReadyListener class
package example.jda;

import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.object.entity.User;
import xyz.discordanalytics.JDAAnalytics;
import xyz.discordanalytics.utilities.EventsTracker;
import net.dv8tion.jda.api.events.GenericEvent;
import net.dv8tion.jda.api.hooks.EventListener;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;

public class ReadyListener implements EventListener {
  @Override
  public void onEvent(@NotNull GenericEvent genericEvent) {
    if (genericEvent instanceof ReadyEvent) {
      final User self = ((ReadyEvent) genericEvent).getSelf();
      System.out.printf("Logged in as %s#%s%n", self.getUsername(), self.getDiscriminator());

      // Initialize what you want to track
      EventsTracker eventsTracker = new EventsTracker();
      eventsTracker.trackInteractions = true;
      eventsTracker.trackGuilds = true;
      eventsTracker.trackUserCount = true;
      eventsTracker.trackUserLanguage = true;
      eventsTracker.trackGuildsLocale = true;

      // Initialize the DiscordAnalytics class
      // Don't forget to replace YOUR_API_TOKEN by your Discord Analytics token !
      JDAAnalytics analytics = new JDAAnalytics(genericEvent.getJDA(), eventsTracker, "YOUR_API_KEY");
      // Start the tracking, it will be done every 10 minutes to avoid spamming the API
      try {
        analytics.trackEvents();
      } catch (IOException | InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}
```
{% endtab %}
{% endtabs %}

## Complete installation

To complete installation, please restart you bot

{% hint style="warning" %}
On first token usage, bot's informations will be saved. To avoid distorting the statistics, you won't be able to reuse the same token for another bot.
{% endhint %}

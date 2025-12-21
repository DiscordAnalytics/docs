# Using ESM (JavaScript)

If you use ESModule in your project, you must use the following code snippet to import DiscordAnalytics' class:

```javascript
import pkg from "discord-analytics";
const { discordjs: DiscordAnalytics } = pkg; // For DiscordJS users
const { eris: DiscordAnalytics } = pkg; // For Eris users
const { oceanic: DiscordAnalytics } = pkg // For OceanicJS users
```

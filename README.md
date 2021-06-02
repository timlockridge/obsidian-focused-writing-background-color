## Obsidian Swap Background Color Plugin

A simple Obsidian plugin that adds command palette options for swapping the editor background color. I liked this feature in the DangerZone plugin and wanted something similar for general focused writing.

I should convert the css to variables and add a settings menu for changing the styles in Obsidian. But I made this for me, this morning, and I now need to start writing.

### Build Instructions

- Run `npm i`
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

### New releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments.
- Publish the release.


### Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/focused-writing-background-color/`.

### API Documentation

See https://github.com/obsidianmd/obsidian-api

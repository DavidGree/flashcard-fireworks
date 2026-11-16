# Flashcard Fireworks

Daily flashcard practice for young readers. Each day's list mixes tricky words with ones the reader already knows, and the gaps between reviews grow as words stick. Every scored word earns stars and plays the same cheerful ding, so effort counts. Finishing a list sets off fireworks, and the app keeps a daily streak. Every 7 days in a row earns 10 bonus stars, every 30 days earns 50 more, and every 500 stars sets off a big fireworks show.

Everything stays on the device that uses it. There are no accounts, no ads and no tracking, and it works offline once it has been opened.

## Putting it online with GitHub Pages (about 15 minutes, free)

1. **Make a GitHub account** at github.com. Your username becomes part of the web address (for example `yourname.github.io/flashcard-fireworks`), so pick one you are happy for other parents to see.
2. **Create a repository.** Click **New** (or the **+** menu, then **New repository**). Name it `flashcard-fireworks`, set it to **Public** (free GitHub Pages sites need a public repository), and click **Create repository**.
3. **Upload the files.** On the new repository's page, click **uploading an existing file**. Unzip `flashcard-fireworks.zip` on your computer, then drag everything inside the unzipped folder into the upload area: `index.html`, `lists.js`, `manifest.webmanifest`, `sw.js`, `README.md` and the `icons` and `fonts` folders. Click **Commit changes**.
4. **Turn on Pages.** Go to **Settings**, then **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, and click **Save**.
5. **Wait a minute or two,** then refresh the Pages settings screen. It shows the address, for example `https://yourname.github.io/flashcard-fireworks/`. Open it on your phone to check it.

Only the app's code and the class word lists are public. Nobody's words, scores or names are ever uploaded; those live on each family's own device.

## For parents

1. Open the link on the phone, tablet or Chromebook your child will practice on.
2. Add it to the home screen so it opens like an app:
   - **Android (Chrome):** tap the ⋮ menu, then **Add to Home screen** (or **Install app**).
   - **iPhone or iPad (Safari):** tap the Share button, then **Add to Home Screen**.
3. On the welcome screen, type your child's first name if you like, then tap **Add the class word lists** and tick the lists you want.
4. Go to **Today**, tap **Make today's list**, and score each word as your child reads it: **Easily**, **Some effort** or **Very difficult**.

Tips:
- Practice on one device. Each device keeps its own copy.
- Save a backup now and then (**Progress**, then **Save a backup file**). To move to another phone, send the backup file there and use **Restore from a backup**.
- Clearing the browser's data, or using a private or incognito window, erases the words. Backups protect against that.

## Putting up a newer version

On the repository page, click **Add file**, then **Upload files**, and drag in the new files. Files with the same name are replaced. Click **Commit changes**. Families keep all their words and progress; their phones load the new version the next time the app is opened with an internet connection.

## Updating the class word lists

The lists live in `lists.js`. To add a new week, open `lists.js` on GitHub, click the pencil icon to edit, copy one of the week blocks, and change its `id`, `name`, `date`, `trick` and `heart` words. Click **Commit changes**. Phones pick up the new lists the next time the app is opened with an internet connection.

If you change any other file, also edit `sw.js` and change the `VERSION` line (for example to `ff-2026-11-21a`) so phones load the new copy.

## Credits

Fonts: Andika (SIL International) and Lexend, both under the SIL Open Font License (see the `fonts` folder).

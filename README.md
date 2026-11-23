# Ram Srungeri — Portfolio

My UX portfolio: Home, Work, About, Contact and three case studies
(Control Monitoring, Perspective Policy Builder, Infoblox IQ).

No build tools, no installs. It's plain HTML, CSS and JavaScript, so GitHub Pages can host it as is.

---

## What's in this folder

| File | What it holds | Edit it when you want to… |
|---|---|---|
| `index.html` | Home, Work, About and Contact pages, plus the header and footer | change the hero text, the four metric tiles, your bio, experience, skills or contact details |
| `js/content.js` | All three case studies | change any case-study text or number, or the order of projects |
| `css/styles.css` | The look. Colours are at the very top under `:root` | change a colour, size or spacing |
| `js/main.js` | Page switching, animations, copy buttons | you shouldn't need to touch this |
| `js/chat.js` | The "Ask about Ram" chat and all its answers | change what the chat says, or add a new question it can answer |
| `css/chat.css` | The look of the chat | change the chat's size or colours |
| `images/` | Your photos and the three project thumbnails | swap a picture (keep the same file name) |
| `favicon.svg` | The RS icon in the browser tab | — |

---

## Put it on GitHub (first time, all in the browser)

You don't need to install anything.

### 1. Create the repository

1. Sign in at **github.com**.
2. Click the **+** at the top right, then **New repository**.
3. **Repository name:** type **`YOUR-USERNAME.github.io`**, using your real GitHub username
   (for example, if your username is `ramsrungeri`, type `ramsrungeri.github.io`).
   This gives you the cleanest web address: `https://ramsrungeri.github.io`.
   *(Any other name also works, but the address becomes `https://YOUR-USERNAME.github.io/REPO-NAME`.)*
4. Set it to **Public**. GitHub Pages is free only for public repositories.
5. Leave every other box unticked. Click **Create repository**.

### 2. Upload the files

1. On the new, empty repository page, click the link **uploading an existing file**.
2. Open this folder on your computer, select **everything inside it**
   (`index.html`, `favicon.svg`, `README.md` and the `css`, `js` and `images` folders), and drag them onto the GitHub page.
   - Drag what's *inside* the folder, not the folder itself. `index.html` must end up at the top level of the repository.
3. Wait until every file is listed. Scroll down, type a short note like `First version of portfolio`, and click **Commit changes**.

### 3. Turn on GitHub Pages

1. In the repository, click **Settings** (the tab at the top).
2. In the left menu, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
5. Wait 1–2 minutes and refresh the page. A box at the top shows **"Your site is live at …"** with your link.

That link is what you put on job applications and your LinkedIn.

---

## Change something later

1. Open the repository on github.com and click the file you want to change
   (for example `js/content.js`).
2. Click the **pencil icon** (Edit this file) at the top right of the file.
3. Make your change. Use **Ctrl + F** (or **Cmd + F** on a Mac) to find the words you're looking for.
4. Click **Commit changes…**, then **Commit changes** again.
5. The live site updates on its own in about a minute. Refresh your site to see it.

Made a mistake? Open the file's **History**, pick the earlier version, and copy its text back in.
Every saved change is kept.

### Editing tips

- **Text in `index.html`:** only change the words *between* tags, e.g. `<p>change this</p>`. Leave the `<...>` parts alone.
- **Text in `js/content.js`:** each piece of text sits between backticks: `` `like this` ``.
  Change the words inside. Keep the backticks, commas and brackets.
- **"Confirm" tags:** in `js/content.js`, a number written as `[`90 → 1`,`worst-case days…`,1]` shows a dashed
  "Confirm" tag because it's an estimate. When you have the real figure, change the number and delete the `,1` at the end.
- **Replace a picture:** in the repository, open the `images` folder, click **Add file → Upload files**,
  and upload your new picture with **exactly the same file name**. It replaces the old one.
- **Change a colour:** at the top of `css/styles.css`, change values like `--mint:#3CCF7D;`.

### Editing the chat

The chat in the bottom-right corner doesn't use AI. It picks the closest answer you've written in `js/chat.js`.

- **Change an answer:** find it under `ANSWERS` and edit the words in `answer:` between the backticks.
- **Teach it a new phrase:** add a word to that answer's `keys:` list, e.g. `` `portfolio`, ``.
- **Add a new answer:** copy a whole `{ keys:[…], answer:`…`, next:[…] },` block, paste it near the top of
  `ANSWERS` and change its contents. Answers higher in the list win ties.
- **Change the opening buttons:** edit `starters:` at the top of the file.

---

## Your own domain (optional)

If you buy a domain such as `ramsrungeri.com`, go to **Settings → Pages → Custom domain**, type it in and save.
GitHub then shows you the DNS records to add at your domain provider.


# Deploying to GitHub Pages

To deploy this React application to GitHub Pages, follow these steps:

1. Add the `homepage` field to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  ...
}
```

Replace `yourusername` with your GitHub username and `repository-name` with the name of your repository.

2. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to your `package.json`:

```json
{
  ...
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy your application by running:

```bash
npm run deploy
```

5. After a successful deployment, go to your repository settings on GitHub:
   - Navigate to "Settings" > "Pages"
   - Make sure the source is set to the `gh-pages` branch

Your site should now be accessible at the URL you specified in the `homepage` field.

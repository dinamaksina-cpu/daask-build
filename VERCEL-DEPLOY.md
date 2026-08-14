# DAASK Build - GitHub -> Vercel

This copy has been prepared to deploy as a standard Next.js project on Vercel.

## GitHub
1. Create a new empty GitHub repository.
2. Upload all files from this folder to the repository root (not the parent folder).
3. Commit to `main`.

## Vercel
1. In Vercel choose Add New -> Project.
2. Import the GitHub repository.
3. Framework Preset should be detected as Next.js.
4. Leave Root Directory as `./`.
5. Leave Build Command on the default (`next build` / `npm run build`).
6. Deploy.

No environment variables are required by the current public website pages.

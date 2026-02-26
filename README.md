# Heights Streetscape Plan Explorer

Independent, exploratory web app for understanding the Heights Streetscape Plan in Hood River: project status, sequencing, costs, and details.

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000`

## Scripts
- `npm run dev` - run local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run lint checks

## Project Structure
- `app/` - routes and page entry points
- `components/` - UI and page components
- `lib/projects.ts` - project dataset and metadata
- `lib/i18n.tsx` - translations and locale handling
- `public/images/projects/` - project images and sitemap images

## Notes
- This is not the official City website.
- Official information: https://cityofhoodriver.gov/urban-renewal/heights/

## License
MIT. See [LICENSE](./LICENSE).

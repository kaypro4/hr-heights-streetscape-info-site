# How to Update the Heights Streetscape Info Site

This guide explains how to make changes to the content on the Heights Streetscape Plan website — things like project descriptions, statuses, costs, and images. Staff edit files directly in GitHub, and the site updates automatically once changes are saved.

---

## Overview: Where Content Lives

All of the site's content is stored in two files:

| What you want to change | File to edit |
|---|---|
| Project info (name, description, status, cost, images, etc.) | `lib/projects.ts` |
| Site-wide labels and text (button names, section headings, footer text, etc.) | `lib/i18n.tsx` |

Images are stored in the `public/images/projects/` folder.

---

## How to Edit a File in GitHub

1. Open the repository on GitHub.
2. Navigate to the file you want to edit (e.g. `lib/projects.ts`).
3. Click the pencil icon (Edit this file) in the top-right corner.
4. Make your changes.
5. Scroll to the bottom and click **Commit changes**.
6. The site will automatically rebuild and go live within a minute or two.

---

## Part 1: Updating Project Information

Project data is stored in `lib/projects.ts`. Each project is a block of information that looks like this (simplified example):

```
{
  id: "east-west-crossings",
  costRange: "$1.3M - $1.7M",
  currentStatus: "implementationDesign",
  estimatedCompletion: "spring2027",
  streets: ["13th Street"],
  image: "/images/projects/east-west-crossings-13th.png",

  en: {
    name: "Key East/West Crossings on 13th Street",
    description: "Curb extensions and intersection improvements...",
    rationale: "Start with intersection improvements...",
    features: ["Curb extensions", "Flashing beacons"],
    goals: ["Calm Traffic", "Safe Streets"],
    statusSummary: "Design underway as of spring 2025.",
  },
  es: {
    name: "Cruces Clave Este/Oeste en la Calle 13",
    description: "...",
    // (Spanish versions of all the same fields)
  },
}
```

### Fields You Are Most Likely to Update

**`costRange`** — The estimated cost display, e.g. `"$1.3M - $1.7M"`

**`currentStatus`** — One of two values (copy exactly, including the quotes):
- `"implementationDesign"` — Project is in implementation design
- `"conceptualDesign"` — Project is in conceptual design

**`estimatedCompletion`** — One of two values (copy exactly, including the quotes):
- `"spring2027"` — Displays as "Spring 2027" on the site
- `"tbd"` — Displays as "TBD"

**`streets`** and **`intersections`** — Lists of street/intersection names shown on the project page.

**`image`** — The path to the main project image (see Part 2 for how to add images).

**`galleryImages`** — A list of image paths shown in the project gallery.

**`en.name`** — The project's English display name.

**`en.description`** — The English description shown on the project page.

**`en.rationale`** — The "Why This Project?" section in English.

**`en.features`** — A bulleted list of key features in English.

**`en.goals`** — Community goals addressed, in English.

**`en.statusSummary`** — A short current status note shown to visitors, in English.

**`en.youtubeUrl`** — Optional. A link to a YouTube video for the project.

> **Important:** Every English field (`en.___`) has a matching Spanish field (`es.___`). Remember to update both when content changes.

---

## Part 2: Adding or Replacing Images

Project images are stored in `public/images/projects/`.

### To replace an existing image

1. Prepare the new image file (PNG format preferred).
2. In GitHub, navigate to `public/images/projects/`.
3. Click **Add file → Upload files**.
4. Upload the new image using the **exact same filename** as the one you're replacing (e.g. `east-west-crossings-13th.png`). GitHub will overwrite the old file.
5. Commit the change.

### To add a new image

1. Prepare the image file with a clear, descriptive filename using hyphens (e.g. `taylor-ave-new-design.png`).
2. Upload it to `public/images/projects/` via GitHub (same steps as above).
3. Then edit `lib/projects.ts` to reference the new file path in the appropriate project's `image`, `sitemapImage`, or `galleryImages` field.

### Image tags

Each project image has an optional tag that appears as a label on the image. The value in `lib/projects.ts` must be one of these (copy exactly):

| Value to use | Label shown on site |
|---|---|
| `"futureRendering"` | Future Rendering |
| `"example"` | Example |
| `"currentState"` | Current State |
| `"design"` | Design |

---

## Part 3: Updating Site-Wide Text

Labels, headings, button names, and other fixed text are stored in `lib/i18n.tsx`. This file has two sections — one for English (`en`) and one for Spanish (`es`).

Examples of things stored here:
- The site title and tagline
- Navigation labels ("All Projects", "Back to All Projects")
- Section headings ("Active Now", "Share Your Feedback")
- Footer text, including the plan adoption date and accessibility notice
- Status labels ("Implementation Design", "Conceptual Design")
- Completion labels ("Spring 2027", "TBD")

Find the relevant line and update the text. Be sure to update both the English and Spanish versions.

---

## Quick Reference: Common Update Scenarios

**A project moved from conceptual design to implementation design:**
> In `lib/projects.ts`, change `currentStatus` to `"implementationDesign"` for that project.

**The estimated completion date changed:**
> In `lib/projects.ts`, change `estimatedCompletion` to `"spring2027"` or `"tbd"`.

**The cost estimate was revised:**
> In `lib/projects.ts`, update `costRange` to the new range, e.g. `"$1.5M - $2.0M"`.

**We want to add a video to a project page:**
> In `lib/projects.ts`, add the YouTube URL to `en.youtubeUrl` and `es.youtubeUrl` for that project.

**The status summary blurb needs refreshing:**
> In `lib/projects.ts`, update `en.statusSummary` and `es.statusSummary` for the relevant project.

**The footer "site last updated" date needs to change:**
> The site footer reads the current date automatically — no update needed.

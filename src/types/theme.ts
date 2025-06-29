import { z } from "astro:content";

export const ITheme = z.object({
  title: z.string().max(24),
  author: z.string().max(24),
  description: z.string().max(120),
  favicon: z.string(),

  logo: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

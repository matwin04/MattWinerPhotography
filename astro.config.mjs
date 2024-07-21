import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), markdoc(), mdx(), tailwind(),
  ]
});
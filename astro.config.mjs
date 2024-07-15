import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  integrations: [db(), markdoc(), mdx()]
});
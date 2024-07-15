import { defineDb, defineTable, column } from 'astro:db';
const Posts = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    date: column.date(),
  }
});
// https://astro.build/db/config
export default defineDb({
  tables: { Posts },
});

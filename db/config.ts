import { defineDb, defineTable, column } from 'astro:db';
const Posts = defineTable({
  columns: {
    title: column.text(),
    date: column.date(),
    body: column.text(),
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Posts },
});

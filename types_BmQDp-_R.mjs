import { z } from 'zod';

const BlogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updateDate: z.coerce.date().optional(),
  section: z.string(),
  tags: z.string()
});

export { BlogFrontmatterSchema as B };
//# sourceMappingURL=types_BmQDp-_R.mjs.map

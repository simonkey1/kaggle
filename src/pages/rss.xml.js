import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Simon Analyst | Blog',
    description: 'Tutorial, tips, and tricks for data analysis and visualization with Simon.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-cl</language>`,
  });
}
import nextra from 'nextra';

const withNextra = nextra({
  // latex: true,
  // // defaultShowCopyCode: true,
  // // mdxOptions: {
  // //   rehypePlugins: [
  // //     // Provide only on `build` since turbopack on `dev` supports only serializable values
  // //     process.env.NODE_ENV === 'production' && rehypeOpenGraphImage
  // //   ]
  // // },
  // // whiteListTagsStyling: ['figure', 'figcaption']
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  contentDirBasePath: './app/docs', // Or even nested e.g. `/docs/advanced`
  // ... Other Next.js config options
});

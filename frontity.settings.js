const settings = {
  name: "frontity-app",
  state: {
    frontity: {
      url: "https://acf.dev-solutions.online",
      title: "My Theme",
      description: "To jest mój theme na frontity",
    },
  },
  packages: [
    {
      name: "my-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://acf.dev-solutions.online/wp-json",
          postTypes: [
            {
              type: "portfolio",
              endpoint: "portfolio",
              archive: "/portfolios",
            },
          ],
          taxonomies: [
            {
              taxonomy: "rodzaj",
              endpoint: "rodzaj",
              postTypeEndpoint: "portfolio",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "frontity-contact-form-7",
  ],
};

export default settings;

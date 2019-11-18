module.exports = {
  plugins: [
    '~/plugins/widgets',
  ],
  head: {
    link: [
      // { rel: 'stylesheet', href: 'https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-theme-default/dist/all.css' },
    ],
  },
  build: {
    transpile: ['@web-bee-ru/widgets'],
  },
  css: [
    'bootstrap-css-only',
  ],
};

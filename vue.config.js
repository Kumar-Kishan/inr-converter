module.exports = {
  outputDir: "docs",
  pluginOptions: {
    moment: {
      locales: ["en"],
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "INR Currency Converter";
      return args;
    });
  },
};

module.exports = {
  outputDir: "docs",
  publicPath: "/inr-converter/",
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

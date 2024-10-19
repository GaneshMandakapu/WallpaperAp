const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig();
  config.watchFolders = [];
  config.server = {
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        res.setHeader('Cache-Control', 'no-store');
        return middleware(req, res, next);
      };
    },
  };
  return config;
})();

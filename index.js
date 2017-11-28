const { send } = require('micro');
const Wappalyzer = require('wappalyzer');
const queryString = require('query-string');

module.exports = async (req, res) => {
  const parsed = queryString.parse(req.url.slice(1));
  const response = {};

  if (!parsed.url) {
    response.error = 'valid url is required';
    send(res, 400, response);
  }

  const options = {
    debug: !!parsed.debug || false,
    delay: parsed.delay || 500,
    maxDepth: parsed.maxDepth || 3,
    maxUrls: parsed.maxUrls || 10,
    maxWait: parsed.maxWait || 3000,
    recursive: !!parsed.recursive || false,
    userAgent: parsed.userAgent || 'Wappalyzer',
  };
  const wappalyzer = new Wappalyzer(parsed.url, options);

  try {
    const data = await wappalyzer.analyze();
    response.url = parsed.url;
    response.options = options;
    response.data = data;
    send(res, 200, response);
  } catch (e) {
    response.error = e.message;
    send(res, 400, response);
  }
};

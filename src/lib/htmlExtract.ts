const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

export async function htmlExtract(url: any) {
  const html = await axios.get(url);
  let dom = new JSDOM(html.data, {
    url: url,
  });
  let article = new Readability(dom.window.document).parse();
  return article.textContent;
}

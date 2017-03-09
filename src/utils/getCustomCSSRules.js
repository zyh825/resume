export default () => Object.assign({}, {
  'comment': /\/\*[\w\W]*?\*\//,
  'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
  'key': /(\b|\B)[\w-]+(?=\s*:)/i,
  'punctuation': /[(){};:]/,
  'value': /([^:]*)$/i,
});
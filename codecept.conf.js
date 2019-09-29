exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Protractor: {
      url: 'https://digidesk-test.de',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: false,
  mocha: {},
  name: 'codecept_test',
  plugins: {
    wdio: {
        enabled: true,
        services: ['selenium-standalone']
    }
  }
}
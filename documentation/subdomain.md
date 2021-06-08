# About
A subdomain is a way to isolate code environments on a low level.
You are able to bring multiple independent sites together under one domain.
The only requirements for sub domains is they must either me another lightspeed server or an express function.
# Example with a lightspeed server
```js
const cdn = lightspeed({
  pagesLocation: '/static',
  // don't listen because this is a subdomain
  start: false
});
const server = lightspeed({
  subDomains: {
    // now it is listening as a subdomain under the main domain
    'cdn': cdn
  }
});
```
# Example with express
```js
const cdnExpressServer = require('express')();
app.use(express.static(path.join(__dirname, 'staticFiles')));
// notice how the express server isn't using up a port
subDomains: {
  'cdn': cdnExpressServer
}
```
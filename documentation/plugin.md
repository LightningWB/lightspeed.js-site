# About
Plugins give very low access to each net work request through two main methods; option modification and request modification.
Before starting the server, all options are free to be modified by plugin.options and then every request can be modified through plugin.modifications.
Parameters for plugin.options are the server options and parameters for modifications is http.Request and http.ServerResponse
All plugins are passed as an array through the plugins option.
# Example
plugin.js
```js
/**
 * an example plugin to error every request and overwrite a return function
 */

/*
 * ops is are the server options
 */
module.exports.options = function(ops)
{
  ops.returnFunctions.returnTest=()=>'test plugin returned function';
}

/*
 * req is the raw http request and res is the raw http response
 */
module.exports.modifications = function(req, res)
{
  res.statusCode=302;
}
```
lightspeed options
```js
plugins:[
  require('./plugin')
]
```
# Default Parser
The whole lightspeed.js page modfication system works off of simple commands. Each command performs one action that is specified in the server options. This allows strict control of what is and isn't allowed.

To specify a command in a file, you do @&command[arguments | split | by | those | lines]&@. These commands aren't limited to any file type, so you can include in js, css or even an image if you encode it correctly.
Example:
```html
<span id="visitsToday">
	@&variable[visits]&@
</span>
```
## asyncReturnFunction
Awaits a promise and then writes the result to the page.
```html
<span id="age">
  @&asyncReturnFunction[getAgeFromDB]&@
</span>
```
```js
functions: {
  getAgeFromDB:async (req, query)=>await DB.getAge(query.name)
}
```
## finishFunction
Runs a function after the rest of the page has been loaded with the given parameters from the functions parameter. Parameters passed to the function are the http.Request and URL.UrlWithParsedQuery.
This will increase the page visit counter from a given ip.
```html
@&finishFunction[incrementViews]&@
```
```js
functions: {
  incrementViews: (req, query)=>{
    visits[ip(req)]++;
  }
}
```
## function
Runs a function before the rest of the page has been loaded with the given parameters from the functions parameter. Parameters passed to the function are the http.Request and URL.UrlWithParsedQuery.
This will increase the page visit counter from a given ip and then still allow it to be rendered through a variable.
```html
@&function[incrementViews]&@
```
```js
functions: {
  incrementViews: (req, query)=>{
    visits[ip(req)]++;
  }
}
```
## returnFunction
Runs a function and writes the result to the page
```html
<span id="age">
  @&returnFunction[getAge]&@
</span>
```
```js
functions: {
  getAgeFromDB: (req, query)=>ages[query.name]
}
```
## template
Compiles text using a template. Templates are stored in .template files by default and can be called by any other file. You select parameters in template files by doing @&{argument parameter index}&@. Templates can be called by `{template name} | parameters...`
bold.template
```
<b>@&1&@</b>
```
```html
<span>
  hey look this @&template[ bold | word ]&@ is bolded
</span>
```
## variable
Writes a variables toString() result to the page.
```html
<span id="version">
  @&variable[version]&@
</span>
```
```js
variables: {
  version: '1.0.3'
}
```
# Custom Parser
A custom parser allows two parameters to be passed in that will modify everything related to the page's layout.
The way this is controlled is with compiling and rendering.
Compile is called when the page is first read from the file system and is useful for including or making constants constant in a page.
Render is called when the page is about to be sent to the client. Two parameters are passed; the result from compile and the request url. With this you can display individual features such as their username or current posts.
## Example with ejs
```js
parser: {
  compile:(file, path)=>{
    // no precompiling
    return file;
  },
  render:(file, url)=>{
    // make sure it is an html file we are editing
    if(url.pathname.split('.')[1] != 'html')return file;
    // compile with ejs
    return ejs.render(file.toString(), ejsVars);
  }
}
```
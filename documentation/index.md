<div id="mainMessage">
	<h1 class="center" style="color:rgb(43, 43, 43);font-weight:normal;font-size:50px;">lightspeed.js</h1>
	<br>
	<span class="message" style="font-size:18px;" onclick="copyToClipboard(this.innerText)">npm install lightspeedjs</span>
</div>
<span class="message center" style="max-width:50%;">“When I started using nodejs for web development, I had a problem. I would rewrite the exact same code for every project, so I set out to fix that problem with lightspeed.”</span>

# About
Lightspeed is a high level web framework designed for building scalable web servers fast. Unlike many frame works such as Express and Koa, you don't have to handle each get request from the client. All you have to do is specify a public directory and you are ready to get working on the important stuff.

# Example
```js
const lightspeed = require('lightspeedjs');
lightspeed();
```
Done. Now files in the www directory will be statically hosted on port 80.

# Why use lightspeed.js?
- Customizable
- Typescript compatible
- Zero dependencies
- Easily integrable with existing frameworks such as express
- And much more
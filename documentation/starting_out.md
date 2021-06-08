# How to host static files
```js
const lightspeed = require('lightspeedjs');
lightspeed();
```

# How to change the directory of static files
```js
lightspeed({
	pagesLocation: 'path/to/my/static/files/'
});
```

# How to read files for every request
```js
lightspeed({
	staticPage: false
});
```

# How to use https
```js
lightspeed({
	protocol: 'https',
	cert: fs.readFileSync('./cert.pem'),
	key: fs.readFileSync('./key.pem')
});
```

# How to use enable iframes
```js
lightspeed({
	iframe: true
});
```

# How to use ejs or another page parsing library
Check out [parser documentation](/parser.html#custom-parser)

# How to use the existing page parser
Check out [parser documentation](/parser.html#default-parser)

# How to change the port
```js
lightspeed({
	port: thePortToListenOn
});
```

# How to use subdomains
Refer to [subdomain documentation](/subdomain.html)

# How to stream files instead of loading them to memory every request
```js
lightspeed({
	// stream js and css files but not html files
	streamFiles: {
		js: true,
		css: true,
		html: false
	}
});
```

# How to handle post requests
```js
lightspeed({
	// add listeners to login, signup, comments/add, comments/reply
	posts: {
		login: Users.login,
		signup: Users.login,
		comments: {
			add: Comments.add,
			reply: Comments.reply
		}
	}
});
```

# How to log requests
```js
lightspeed({
	// logMessage is in common log format
	log: logMessage=>DB.addLog(logMessage)
});
```

# How add a plugin
```js
lightspeed({
	plugins: [
		require('myPlugin')
	]
});
```
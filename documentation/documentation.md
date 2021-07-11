# Lightspeed
## Parameters
----
### cert
| cert |
| :---: |
| string |
| "" |

A tls certificate if you are handling that on a node level. This should be the real certificate and not the path to one.
### csrfProtection
| csrfProtection |
| :---: |
| boolean |
| true |

Adds a cookie to prevent csrf attacks. It adds the verification cookie on GET requests and checks it on POST requests.
### fileTypeText
| fileTypeText |
| :---: |
| object |
| {} |

Adds text to the end of every file of a given type.
```js
html: {
  beginning:'<!DOCTYPE html><html>',
  end:'</html'
}
```
### functions
| functions |
| :---: |
| object |
| {} |

Functions accessible to the page while using the included page layout system. For more details see [the included lightspeed parser](/parser.html).
```js
functions:{
  incrementVisit:()=>visitsToday++
}
```
### getPerMinute
| getPerMinute |
| :---: |
| number |
| 1000 |

Maximum amount of GET requests allowed each minute per ip.
### iframe
| iframe |
| :---: |
| boolean |
| true |

Keep iframes same site only or free.
### jQuery
| jQuery |
| :---: |
| boolean |
| false |

Append a script to jQuery to the end of each html file.
### key
| key |
| :---: |
| string |
| "" |

A tls key if you are handling that on a node level. This should be the real key and not the path to one.
### log
| log |
| :---: |
| function |
| console.log |

A function to log requests in common log format.
```js
log: (data)=>DB.addToLog(data)
```
### pagesLocation
| pagesLocation |
| :---: |
| string |
| "/www" |

Path the pages to be hosted.
### parser
| parser |
| :---: |
| {} |
| {} |

A page parser to be used and disable the built in parser. Please see [the parser documentation](/parser.html) for more information.
### plugins
| plugins |
| :---: |
| plugin[] |
| [] |

An array of plugins to be used. For a more details guide see [the plugin documentation](/plugin.html).
### port
| port |
| :---: |
| number |
| 80 |

Port for the server to listen on. 80 is what http uses and 443 is what https uses.
### postHandler
| postHandler |
| :---: |
| function |
| (data, req, res)=>{} |

Handler for post requests not picked up in post tree.
### posts
| posts |
| :---: |
| object |
| {} |

A tree for post requests.
```js
posts: {
  '/news': DB.getNews,
  '/bug_report': DB.addBug,
  '/users': {
    '/signup': USERS.signup,
    '/login': USERS.login
  }
}
```
### postPerMinute
| postPerMinute |
| :---: |
| number |
| 10 |

Amount of POST requests allowed per minute per ip.
### printErrors
| printErrors |
| :---: |
| boolean |
| true |

Print errors such as 404 requests to the console.
### protocol
| printErrors |
| :---: |
| "http" &#124; "https" |
| "http" |

What web protocol to use. HTTPS requires a key and certificate was required.
### restApi
| restApi |
| :---: |
| boolean |
| false |

Set up a rest api or not.
### restFileExtension
| restFileExtension |
| :---: |
| string |
| "json" |

Default file extension to use over the rest api.
### restLocation
| restLocation |
| :---: |
| string |
| "/rest" |

Path to rest api files.
### restPrefix
| restPrefix |
| :---: |
| string |
| "/rest" |

Url to connect to rest api instead of normal site.
### start
| start |
| :---: |
| boolean |
| true |

Listen on the port for the server. Most useful for subdomains.
### staticPage
| staticPage |
| :---: |
| boolean |
| true |

Store pages in memory or read them from a file each time.
### streamFiles
| streamFiles |
| :---: |
| object |
| {} |

File types to be streamed. This bypasses what ever parser is selected.
```js
streamFiles: {
	'mp4': true,
	'png': true,
	'jpg': true
}
```
### subDomains
| subDomains |
| :---: |
| object |
| {} |

Subdomains to use. See [the subdomain documentation](/subdomain.html) for a guide.
### templateFileExtension
| templateFileExtension |
| :---: |
| string |
| "template" |

File extension for [the included parser](/parser.html)'s templates.
### templateLocation
| templateLocation |
| :---: |
| string |
| "/templates" |

Path to template files for [the included parser](/parser.html)'s templates.
### variables
| variables |
| :---: |
| object |
| {} |

Variables accessible to the  the [the included parser](/parser.html).
## Returns
----
### reloadFiles
| reloadFiles |
| :---: |
| function |

Reloads all static files asynchronously.
### reloadPosts
| reloadPosts |
| :---: |
| function |

Rebuilds the internal post request tree using the same object passed in the startup parameters.
### server
| server |
| :---: |
| http.Server |

The server object to be used to attach web socket servers to or for other access.
### start
| start |
| :---: |
| function |

Starts the sever listening if it is not already doing so.
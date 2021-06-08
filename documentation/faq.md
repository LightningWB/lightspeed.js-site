# Why do I get errors when using subdomains
Make sure you set `start` to false, so you don't get two servers trying to listen on one port.

# Why isn't my parser working
Streaming files bypasses the page parser, so just disabling streaming html files should fix the problem.

# Why am I getting weird response from returnFunction/asyncReturnFunction
This is because if an error occurs while writing data to the page, the marker for the location to write the result is never replaced.

Short answer: your code errors out.

# Why aren't any of these solutions what I'm looking for
Try to update lightspeed and if the issue persists, go and report it on [the issue tracker](https://github.com/LightningWB/lightspeed.js/issues).
# trackAll (for Mixpanel)

TrackAll is a script for the Mixpanel analytics platform which allows you to link once piece of javascript on your page which will automatically detect and send all major 'events' on your website, including *page clicks*, *link clicks*, *button clicks*, *completed forms*, and *page views*, to a Mixpanel project.

## Installation

To function, this script *REQUIRES* [Mixpanel's javascript library](https://mixpanel.com/help/reference/javascript) to be properly implemented on every page of your website before the `</head>` tag. It also requires [JQuery 2.x](https://code.jquery.com/)

Once you've added the Mixpanel library to your site, you can leverage this script in two ways. 

1) You can link to my *hosted* version by adding the following to your website AFTER the Mixpanel library but before the `</head>` tag:
```
<!-- AK trackAll for Mixpanel -->
<script src="https://dl.dropboxusercontent.com/u/51386401/trackAll.js"></script>
```


2) (preferred) You can download/clone the script from [github](https://raw.githubusercontent.com/ak--47/trackAll/master/trackAll.js) - host it on your website and make sure it loads before the `</head>` tag:
```
<!-- AK trackAll for Mixpanel -->
<script src="https://path.to/trackAll.js"></script>
```
Now, you can watch as _many_ different events (and properties) automatically populate inside of your Mixpanel project.

_Optional_: You can also use ```mpLogIn() ``` when users login or sign up to add a user profile and connect that user's behavior to his or her profile.


## Contributing

1. Fork it! (it's just one JS file!)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
6. Profit 


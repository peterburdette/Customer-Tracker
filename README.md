# Customer-Tracker
The Customer Tracker records cookies and their respective values and sends them off in an event to Google Analytics. This script assists with the tracking of new and returning customer behaviors and actions. All events can be seen in Google Analytics **(Behavior > Events > Top Events)**.

## Getting Started
### Installation
Add the latest JQuery and Customer Tracker files to the header of your site.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="customer-tracker.js"></script>
```

### Setup Google Analytics 
Additionally paste the following snippet right after the `<head>` tag. Make sure to substitute the two filler `UA-XXXXXXX-X` with your Google Analytics tracking ID.

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXX-X');
</script>
```
**NOTE:** For more information about installing the Google Analytics snippet, check out their [Quick Start Guide](https://support.google.com/analytics/answer/1008080?hl=en).

### Edit Script
After you have installed the required files and Google Analytics script you will need to add the cookie name you would like to track to the script. Open `customer-tracker.js` and look for the variable `customer_id`. Replace `customer_id` with the cookie name you will be tracking.

```html
var cookie_name_1 = "customer_id"; // Insert cookie name here
```

### Tracking Multiple Cookies
Tracking multiple cookies is simple. Go into `customer-tracker.js` and add the number of `cookie_name_X` and `cookie_value_X` variables as cookies that you would like to track. Your code should look something like this:

```html
// Cookies being tracked
var cookie_name_1 = "customer_id";
var cookie_name_2 = "account_type";

// Fetches the value of the cookies
var cookie_value_1 = getCookie(cookie_name_1); 
var cookie_value_2 = getCookie(cookie_name_2); 
```

Once you've done this find the conditional statment that sends the Google Analytics Events. Inside of the `else` statement duplicate the event and update the cookie name and cookie value in each instance to reflect the additional cookies you will be tracking. Your code should look something like this:

```html
// Checks if there is a value for the declared cookie
if (!cookie_value_1) {
	ga('send', 'event', 'Customer-Tracker', 'Guest (Logged Out)', 'Guest'); // Sends the value of Guest (Logged Out) to GA
} else {
	ga('send', 'event', 'Customer-Tracker', cookie_name_1, cookie_value_1); // Sends the Cookie Name 1 and Cookie Value 1 to GA
	ga('send', 'event', 'Customer-Tracker', cookie_name_2, cookie_value_2); // Sends the Cookie Name 2 and Cookie Value 2 to GA
}
```

### Customizing the Google Analytics Event
The event that is triggered in `customer-tracker.js` will by default send the name of the cookie being tracked and its respective value to Google Analytics. You can modify this to send anything you want.

```html
// Default Event
ga('send', 'event', 'Customer-Tracker', cookie_name_1, cookie_value_1);

// Custom Event
ga('send', 'event', 'Customer-Tracker', 'Account Holder', 'True');
```

Once done publish your changes and enjoy!

## Browser Support

*Supported Browsers* : Chrome, Firefox, Safari, Opera, Edge, IE7+.

## License

This source code is licensed under the [MIT](http://opensource.org/licenses/mit-license.php) license.

Developed by [Peter Burdette](https://www.linkedin.com/in/peter-burdette-76976552)

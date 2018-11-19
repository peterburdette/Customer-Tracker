document.addEventListener("DOMContentLoaded", function() {
	
	// Function to retrieve the cookie value
	function getCookie(c_name, c_value) {
		
		// Inital grab of all active cookies and their respective values
		var c_value = document.cookie,
			c_start = c_value.indexOf(" " + c_name + "=");
	
		// Retrieves the index of the equals and semicolon
		if (c_start == -1) {
			c_value = null;
		} else {
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
			
			// Grabs the length of c_value and assigns it as the index to c_end
			if (c_end == -1) {
				c_end = c_value.length;
			}
			
			// Stores the string value between the equals and semicolon in c_value
			c_value = decodeURI(c_value.substring(c_start, c_end));
		}
		
		// Returns the cookie value
		return c_value;
	}
	
	// Target cookie and cookie value declarations
	var cookie_name_1 = "customer_id"; // Insert cookie name here
	var cookie_value_1 = getCookie(cookie_name_1);

	// Checks if there is a value for the declared cookie
	if (!cookie_value_1) {
		ga('send', 'event', 'Customer-Tracker', 'Guest (Logged Out)', 'Guest'); // Sends the value of Guest (Logged Out) to GA
	} else {
		ga('send', 'event', 'Customer-Tracker', cookie_name_1, cookie_value_1); // Sends the Cookie Name 1 and Cookie Value 1 to GA
	}

});

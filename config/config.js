/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
		},
		{
			module: "calendar",
			header: "Kang Family Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/taylor.hani.kang%40gmail.com/public/basic.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				// location: "New York",
				locationID: "5984025", //ID from git; unzip the gz file and find your city
				apiKey: "46c389a310aff5eb1c0752fa38d09d53",
				units: "imperial",
				timeFormat: 12,
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				// location: "New York",
				locationID: "5984025", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "46c389a310aff5eb1c0752fa38d09d53",
				units: "imperial",
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Weird News - HuffPost",
						url: "https://chaski.huffpost.com/us/auto/vertical/weird-news"
					},
					{
						title: "Tech - Reuters",
						url: "https://www.reutersagency.com/feed/?best-topics=tech&post_type=best"
					},
					{
						title: "North America - Reuters",
						url: "https://www.reutersagency.com/feed/?best-regions=north-america&post_type=best"
					},
					{
						title:"Asia - Reuters",
						url: "https://www.reutersagency.com/feed/?best-regions=asia&post_type=best"
					},
					{
						title: "Morning Mix - Washington Post",
						url: "http://feeds.washingtonpost.com/rss/rss_morning-mix?itid=lk_inline_manual_41"
					},
					{
						title: "IGN",
						url: "http://feeds.ign.com/ign/games-all"
					},
					{
						title: "Nintendo Life",
						url: "http://www.nintendolife.com/feeds/latest"
					},
					{
						title: "Game Informer",
						url: "http://www.gameinformer.com/feeds/thefeedrss.aspx"
					},
					{
						title: "Polygon",
						url: "https://www.polygon.com/rss/index.xml"
					},
					{
						title: "Roblox Blog",
						url: "https://blog.roblox.com/feed/"
					},
					{
						title: "Official Playstation Blog",
						url: "https://blog.us.playstation.com/feed/"
					},
					{
						title: "Kotaku",
						url: "https://kotaku.com/rss"
					},
					{
						title: "Destructoid",
						url: "https://feeds.feedburner.com/Destructoid-Rss"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

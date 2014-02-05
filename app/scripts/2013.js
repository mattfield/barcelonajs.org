// DATA FORMAT:
// events : [
//      { date: new Date( <year>, <month - 1>, <day>),
//        talks:  /*optional*/ [ ... ],
//        special: /*optional*/ { ... },
//      }
// ]
var bcnjs_events = [
	{
		date: new Date(2013, 0, 3)
	},
	{
		date: new Date(2013, 1, 7)
	},
	{
		date: new Date(2013, 2, 7)
	},
	{
		date: new Date(2013, 3, 4)
	},
	{
		date: new Date(2013, 4, 2)
	},
	{
		date: new Date(2013, 5, 6),
		talks: [
			{
				title: 'Introduction to GruntJS',
				presenter: {
					username: 'drpicox',
					displayname: 'Dr. David Rodenas'
				},
				description: '**Optimize a web page with a single command.** Grunt is the *Makefile* for JS projects. In this talk I present what is Grunt, which is its philosophy, and a small example how to use it. And the best of it, how to build and optimize everything with a simple command.',
				resources: {
					slides: 'http://drpicox.github.io/gruntjs-presentation-introduction/#/grunt',
					github: 'https://github.com/drpicox/gruntjs-presentation-introduction'
				}
			},
			{
				title: 'Try a little tenderness',
				presenter: {
					username: 'masylum',
					displayname: 'Pau Ramon'
				},
				description: '**Stop writing ugly Javascript, you don\'t have to.** This talk is about enforcing good practices for building and maintaining big Javascript applications. I\'m going to share what we learned while building Teambox (more than 200k lines of javascript code)',
				resources: {
					github: '',
					slides: ''
				}
			},
			{
				title: 'GPU Deep Dive',
				presenter: {
					username: 'xbeumala',
					displayname: 'Xavi Beumala'
				},
				description: '**with a dose of browser internals understanding** Let\'s talk about rendering performance, how to boost pages speed and make 60+ FPS animations possible. Clunky and janky scrolls? Jumpy animatios? Unresponsive UIs? Let’s see how to identify, diagnose and fix reflows, composites, repaints, textures and automatic layer creation even for low end devices without die trying.',
				resources: {
					github: '',
					slides: ''
				}
			}
		],
	},
	{
		date: new Date(2013, 6, 4),
		talks: [
			{
				title: 'Offline storage and PouchDB',
				presenter: {
					username: 'toniher',
					displayname: 'Toni Hermoso Pulido'
				},
				description: '**There is life after connection** First part of the talk summarizes some current offlline storage options for web developers. Second part introduces and provides some examples of PouchDB, a convenient Javascript library for both offline (local) and online (remote) storage based on CouchDB API.',
				resources: {
					github: '',
					slides: 'http://www.cau.cat/slides/offline-pouchdb-bcnjs'
				}
			},
			{
				title: 'Motion Detection In Video Through JavaScript',
				presenter: {
				  username: 'demoive',
					displayname: 'Paulo Ávila'
				},
				description: '**Making use of HTML5 video, Webcam API and Canvas**. This interactive talk explores the possibilities of motion and even movement detection of a live video stream within the browser. Find out about accessing pixel-by-pixel information from individual video frames, different RGB (and alpha) channels, and contribute ideas for potential applications and improvements.',
				resources: {
					github: 'http://demoive.github.io/Shaky-Shake-JS/',
					slides: 'http://slid.es/demoive/shaky'
				}
	  },
			{
				title: 'Introduction to Elasticsearch',
				presenter: {
				  username: 'clintongormley',
					displayname: 'Clinton Gormley'
				},
				description: 'Elasticsearch is an open source, realtime, distributed search and analytics engine. It\'s easy to get started but will grow with your application. Come find out what Elasticsearch can do for you.',
				resources: {
					github: '',
					slides: 'https://plus.google.com/u/0/106524024522865941765/posts/HrYLVwDLs4p'
				}
			},
		]
	},
	{
		date: new Date(2013, 7, 1),
		special: {
			header: 'SpecialJS: Beachvolleyball and Beers',
			content: 'We meet at Platja Nova Icaria (<a href="https://maps.google.com/maps?q=41.390449,2.201804&num=1&t=h&z=18">41.390449,2.201804</a>, green arrow) at 18.30 to play some volleyball and have a beer and talk JavaScript in the chiringuito after.'
		}
	},
	{
		date: new Date(2013, 8, 10),
		talks: [
			{
				title: 'FirefoxOS (1) - opening the web to billions of new web developers and users',
				presenter: {
					username: 'alina_mierlus',
					displayname: 'Alina Mierlus'
				},
				description: 'FirefoxOS is the new project of Mozilla - a global movement to empower and bring choice in the lives of new billions of Internet users. FirefoxOS runs on very cheap hardware, bringing the web to people in development markets and opportunities to new web developers. In this talk we will demo some of the capabilities of FirefoxOS.',
				resources: {
					github: 'http://github.com/alinamierlus',
					slides: ''
				}
			},
			{
				title: 'FirefoxOS (2) - opening the web to billions of new web developers and users',
				presenter: {
					username: '@trufae',
					displayname: 'Sergi A.'
				},
				description: 'FirefoxOS is the new project of Mozilla - a global movement to empower and bring choice in the lives of new billions of Internet users. FirefoxOS runs on very cheap hardware, bringing the web to people in development markets and opportunities to new web developers. In this talk we will demo some of the capabilities of FirefoxOS.',
				resources: {
					github: '',
					slides: ''
				}
			},
			{
				title: 'Promises for Javascript',
				presenter: {
					username: 'drpicox',
					displayname: 'Dr. David Rodenas'
				},
				description: '**This is the end of weird callback structures.** Javascript codes are usually full of callbacks; they are so complex... Promises make them easy: cleaner method signatures, cleaner return/error semantics, simple compositions, easy parallel/join structures... And they are awesome. I *promise*.',
				resources: {
					slides: 'http://drpicox.github.io/promises-presentation-introduction/#/',
					github: 'https://github.com/drpicox/promises-presentation-introduction'
				}
			}
		]
	},
	{
		date: new Date(2013, 9, 8),
		talks: [
			{
				title: 'Videogular: An HTML5 video player for AngularJS',
				presenter: {
					username: 'elecash',
					displayname: 'Raúl Jiménez'
				},
				description: 'Videogular is an Open Source project to develop a fully customizable video player for AngularJS. I will be talking about internals, AngularJS tricks, how to use the API and much more.',
				resources: {
					github: 'https://github.com/2fdevs/videogular',
					slides: ''
				}
			},
			{
				title: 'API.js',
				presenter: {
					username: 'patrickheneise',
					displayname: 'Patrick Heneise'
				},
				description: 'In a world of mobile apps, single-page applications and flying web servers, JavaScript, Objective-C, Java and whats-so-not consumers, solid APIs are getting more and more important. Patrick is going to show how to create, test and document an API in Node.js with Express, Mocha, Dox and iodocs.',
				resources: {
					github: '',
					slides: ''
				}
			}
		]
	},
	{
		date: new Date(2013, 10, 12),
		talks: [{
			title: 'Architecture for big Backbone Apps',
			presenter: {
				username: 'eth0lo',
				displayname: 'Jean Carlos Meninno'
			},
			description: 'Backbone can be a dificult beast to tame, examples on how to manage complexity and scale the code base',
			resources: {
				github: '',
				slides: ''
			}
		},
		{
			title: 'From jQuery to AngularJS',
			presenter: {
				username: 'victorbjelkholm',
				displayname: 'Victor Bjelkholm'
			},
			description: 'From jQuery to AngularJS will be a talk for jQuery gods to become superheroic Angularistas. I\'ll start by explaining how jQuery works, how to create a todo application and then move on to an introduction of AngularJS and how to create the same application but in AngularJS instead of jQuery.',
			resources: {
				github: 'https://github.com/VictorBjelkholm/from-jquery-to-angularjs',
				slides: 'http://victorbjelkholm.github.io/from-jquery-to-angularjs/'
			}
		},
		{
			title: 'Using PouchDB for PhoneGap/Cordova apps',
			presenter: {
				username: 'chrisekelley',
				displayname: 'Chris E. Kelley'
			},
			description: 'This talk will focus on my experiences deploying Android apps that sync with CouchDB. I will focus mostly on PouchDB but will also discuss the other frameworks I have been using to deploy Android applications (Backbone.js, Coconut, GCM/Urban Airship, PhoneGap/Cordova).',
			resources: {
				github: 'https://github.com/chrisekelley/barcelonajs-pouchdb-talk-12nov2013',
				slides: 'http://chrisekelley.github.io/barcelonajs-pouchdb-talk-12nov2013/'
			}
		}]
	},
	{
		date: new Date(2013, 11, 10),
		talks: [{
			title: 'An introduction to the MongoDB Node.js driver',
			presenter: {
				username: 'christkv',
				displayname: 'Christian Kvalheim'
			},
			description: 'Get started with Node.js driver and MongoDB',
			resources: {
				github: 'https://github.com/mongodb/node-mongodb-native/',
				slides: ''
			}
		},
		{
			title: 'Tizen Development',
			presenter: {
				username: 'JulioStaude',
				displayname: 'Julio Cesar Staude'
			},
			description: 'Tizen is an Open Source Operative System, designed to run in smartphones, smart tvs, tablets and vehicles',
			resources: {
				github: '',
				slides: ''
			}
		},
    {
      title: 'Xmas Special JS',
      presenter: {
        username: 'BcnJS',
        displayname: 'Barcelona JS'
      },
      description: 'It\'s that time of the year again ... Let\'s get together, have a beer and celebrate the end of the year!',
      resources: {
        github: '',
        slides: ''
      }
    }]
	}
];

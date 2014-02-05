// DATA FORMAT:
// events : [
//      { date: new Date( <year>, <month - 1>, <day>),
//        talks:  /*optional*/ [ ... ],
//        special: /*optional*/ { ... },
//      }
// ]
var bcnjs_events = [
  {
    date: new Date(2014, 0, 25),
    special: {
      header: 'AngularJS Special',
      content: ''
		}
  },
	{
		date: new Date(2014, 1, 13),
    talks: [
      {
        title: 'Using the API Blueprint to generate nodejs consumers',
        presenter: {
          username: 'bpedro',
          displayname: 'Bruno Pedro'
        },
        description: 'I\'ll show you how to generate a nodejs API consumer by using the API Blueprint (http://apiblueprint.org/) to generate code from a Postman (http://www.getpostman.com/) collection.'
      },
      {
        title: 'Introduction to testing with AngularJS',
        presenter: {
          username: 'VictorBjelkholm',
          displayname: 'Victor Bjelkholm'
        },
        description: '*Introduction to testing with AngularJS* will be the talk for you if you\'ve always been interested what testing is but never took the step to finally start doing it. The talk will be mainly focused on testing basics and unit testing in AngularJS',
        resources: {
          github: '',
          slides: ''
        }
      }
    ]
	},
	{
		date: new Date(2014, 2, 13),
    talks: []
	},
	{
		date: new Date(2014, 3, 10),
    talks: [
{
			title: 'AngularJS and the Declarative / Imperative Impedance Mismatch',
			presenter: {
				username: 'jjenkov',
				displayname: 'Jakob Jenkov'
			},
			description: 'AngularJS uses its HTML directives at the core of its UI generation. That means that you specify how to generate the HTML using HTML. Part of that logic has been moved to the controller functions, but part of it cannot be moved. The result is imperative constructs like ng-if and ng-repeat inside the declarative HTML template. The mismatch between an imperative problem and a declarative tool ends up in a messy solution in the long run. JSP tried the same thing with custom tag libraries, and failed. XSL tried the same thing, and failed too. This talk will get into deeper detail about why I believe that the HTML directives - one of the core elements that AngularJS is praised for - is not such a great solution for UI generation.' 
}
]
	},
	{
		date: new Date(2014, 4, 8),
    talks: []
	},
	{
		date: new Date(2014, 5, 12),
    talks: []
	},
	{
		date: new Date(2014, 6, 10),
    talks: []
	},
	{
		date: new Date(2014, 7, 14),
    talks: []
	},
	{
		date: new Date(2014, 8, 11),
    talks: []
	},
	{
		date: new Date(2014, 9, 9),
    talks: []
	},
	{
		date: new Date(2014, 10, 13),
    talks: []
	},
	{
		date: new Date(2014, 11, 11),
    talks: []
	}
];

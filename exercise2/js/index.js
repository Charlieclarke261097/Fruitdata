$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
fruit = [
  { name: 'Banana', 	colour: 'Yellow', origin: 'Brazil' },
  { name: 'Orange',  colour: 'Orange', origin:'Brazil'	},
  { name: 'Lime',	colour: 'Green', origin: 'Brazil'	}
];


function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { fruitlist: fruit }
		});
}
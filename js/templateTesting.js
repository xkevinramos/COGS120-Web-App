var complexData = [
  {'title': 'Needfinding', 'profilePic': 'images/lorempixel.city.1.jpeg', 'index': 2},
  {'title': 'Prototyping', 'profilePic': 'images/lorempixel.technics.1.jpeg', 'index': 3},
  {'title': 'Heuristic Evaluation', 'profilePic': 'images/lorempixel.abstract.1.jpeg', 'index': 4},
  {'title': 'Visualization', 'profilePic': 'images/lorempixel.abstract.8.jpeg', 'index': 5},
  {'title': 'Social design', 'profilePic': 'images/lorempixel.people.2.jpeg', 'index': 6},
  {'title': 'Gestural interaction', 'profilePic': 'images/lorempixel.technics.2.jpeg', 'index': 7},
  {'title': 'Design tools', 'profilePic': 'images/lorempixel.city.2.jpeg', 'index': 8}
]


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");
	
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
	
});
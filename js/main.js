// create a grid using a loop that will print out divs for each object from API response

// create a simple object
	var filmography = [
	{
		"movie" : {
			"title" : "Jurrasic Park",
			"year"  : "1993",
			"genre" : "Action / Adventure"
		}
	},
	{
		"movie" : {
			"title" : "Independence Day",
			"year"  : "1996",
			"genre" : "Action / Adventure"
		}
	},
	{
		"movie" : {
			"title" : "The Fly",
			"year"  : "1986",
			"genre" : "Sci - Fi / Gross"
		}
	},
	{	
		"movie" : {
			"title" : "Lost World : Jurrasic Park 2",
			"year"  : "1997",
			"genre" : "Action / Adventure"
		}
	},
	{	
		"tv_show" : {
			"title" : "The League (TV Show) : Ruxin's Dad",
			"year"  : "2010",
			"genre" : "TV Show / Comedy"
		}
	}];


$(document).ready(function(){
	$.each(filmography, function(){
		$.each(this, function(index,value){
			// $('#film-grid').append('<p>' + index + '</p>');
			$.each(this, function(name, value){
				$('#film-grid').append('<h4>'+ value +'</h4>');
			})
		})
	})
})
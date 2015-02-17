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
			"title" : "The League (TV Show) : Ruxin&rsquo;s Dad",
			"year"  : "2010",
			"genre" : "TV Show / Comedy"
		}
	}];

$(document).ready(function(){
	$.each(filmography, function(arrayIndex, value){
		var br = '<br />';
		var movieTitle =  this.movie.title;
		var movieYear  =  this.movie.year;
		var movieGenre =  this.movie.genre;
		$('#film-grid').append('<p>' + movieTitle + '  ' + movieYear + '  ' + movieGenre + '</p>');
	})

	// $.each(filmography, function(arrayIndex, value){
	// 	var br = '<br />';
	// 	var tv_showTitle =  this.tv_show.title;
	// 	var tv_showYear  =  this.tv_show.year;
	// 	var tv_showGenre =  this.tv_show.genre;
	// 	$('#film-grid').append('<p>' + tv_showTitle + '  ' + tv_showYear + '  ' + tv_showGenre + '</p>');
	// })
})
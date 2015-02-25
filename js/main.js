(function(){
	var app = angular.module('filmography', [])
	
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
		}
	]; //end filmography array


	app.controller('FilmController', function(){
		this.movie = filmography;
	})

})(); // end closure






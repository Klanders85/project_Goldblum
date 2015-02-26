(function(){
	var app = angular.module('goldBlum', [])
	
	app.controller('FilmController', function(){
		this.filmData = filmography;
	})

	var filmography = [
		// {
		// 	title : "Invasion of The Body Snatchers",
		// 	year  : "1978",
		// 	genre : "Sci - Fi / Horror",
		// 	media : "Movie",
		// 	image : '/img/posters/bodySnatchers.jpg'
		// },
		{
			title : "The Fly",
			year  : "1986",
			genre : "Sci - Fi / Gross",
			media : "Movie",
			image : '/img/posters/theFly.jpg'
		},
		{
			title : "Jurrasic Park",
			year  : "1993",
			genre : "Action / Adventure",
			media : "Movie",
			image : '/img/posters/jurassicPark.jpg'
		},
		{
			title : "Independence Day",
			year  : "1996",
			genre : "Action / Adventure",
			media : "Movie",
			image : '/img/posters/independenceDay.jpg'
		},
		{	
			title : "Lost World:Jurrasic Park",
			year  : "1997",
			genre : "Action / Adventure",
			media : "Movie",
			image : '/img/posters/lostWorld.jpg'
		},
		{	
			title : "Grand Budapest Hotel",
			year  : "2014",
			genre : "Drama",
			media : "Movie",
			image : '/img/posters/grandBudapestHotel.jpg'
		}
	]; //end filmography array

})(); // end closure






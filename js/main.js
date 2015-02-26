(function(){
	var app     = angular.module('goldBlum', []);
	
	app.controller('FilmController', function($scope){
		this.filmData = filmography;
	})

	var filmography = [
		{
			title : "Invasion of the Body Snatchers",
			year  : "1978",
			genre : "Sci - Fi / Horror",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMTg1MTgxMTY2MF5BMl5BanBnXkFtZTgwODg0NTc1MDE@._V1_SX214_AL_.jpg',
			imdbId : 'tt0077745',
			showSummary : false,
			summary : 'In San Francisco, a group of people discover the human race is being replaced one by one, with clones devoid of emotion.s'
		},
		{
			title : "The Fly",
			year  : "1986",
			genre : "Sci - Fi / Horror",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMTQ5OTgwOTExM15BMl5BanBnXkFtZTcwMTE4ODE5OQ@@._V1_SY317_CR5,0,214,317_AL_.jpg',
			imdbId : 'tt0091064',
			showSummary : false,
			summary : 'A brilliant but eccentric scientist begins to transform into a giant man/fly hybrid after one of his experiments goes horribly wrong.'
		},
		{
			title : "Jurrasic Park",
			year  : "1993",
			genre : "Action / Adventure",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMjQzODQyMzk2Nl5BMl5BanBnXkFtZTcwNTg4MjQ3OA@@._V1_SX214_AL_.jpg',
			imdbId  : 'tt0107290',
			showSummary : false,
			summary : 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.' 
		},
		{
			title : "Powder",
			year  : "1995",
			genre : "Drama / Sad as Hell",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMTM2NDczNjYwMV5BMl5BanBnXkFtZTYwNTI3Mjc4._V1_SX214_AL_.jpg',
			imdbId  : 'tt0114168',
			showSummary : false,
			summary : 'A young bald albino boy with unique powers shakes up the rural community he lives in.' 
		},
		{
			title : "Independence Day",
			year  : "1996",
			genre : "Action / Adventure",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMTMwODY3NzQzNF5BMl5BanBnXkFtZTcwNzUxNjc0MQ@@._V1_SY317_CR6,0,214,317_AL_.jpg',
			imdbId  : 'tt0116629',
			showSummary : false,
			summary : 'The aliens are coming and their goal is to invade and destroy. Fighting superior technology, The best weapon is the will to survive.'
		},
		{	
			title : "Lost World : Jurrasic Park",
			year  : "1997",
			genre : "Action / Adventure",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMTYxNjY1NjE2OV5BMl5BanBnXkFtZTYwNzE0MDc4._V1_SX214_AL_.jpg',
			imdbId  : 'tt0119567',
			showSummary : false,
			summary : 'A research team is sent to the Jurassic Park Site B island to study the dinosaurs there while another team approaches with another agenda.'
		},
		{	
			title : "The Life Aquatic with Steve Zissou",
			year  : "2004",
			genre : "Drama / Comedy",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMTYzODYzNzg2MF5BMl5BanBnXkFtZTcwMTkzOTQzMw@@._V1_SY317_CR1,0,214,317_AL_.jpg',
			imdbId  : 'tt0362270',
			showSummary : false,
			summary : 'With a plan to exact revenge on a mythical shark that killed his partner, oceanographer Steve Zissou rallies a crew that includes his estranged wife, a journalist, and a man who may or may not be his son.'
		},
		{	
			title : "Grand Budapest Hotel",
			year  : "2014",
			genre : "Drama",
			media : "Movie",
			image : 'http://ia.media-imdb.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX214_AL_.jpg',
			imdbId  : 'tt2278388',
			showSummary : false,
			summary : 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.' 
		}
	]; //end filmography array

})(); // end closure
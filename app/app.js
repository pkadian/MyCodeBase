angular.module('myApp', ['ngSanitize']);

function anyName($scope, $rootScope) {
	var isGood = false;
	var prefix = 'Bad';
	if (isGood) {
		prefix = 'Good';
	}

	var greeting = prefix + 'Late Morning';

	$scope.greeting = greeting;


	$scope.companyName = "EMC";

	$scope.classEven = 'even';

	$scope.hotels = [{
		"name": "Golden Palms",
		"price": 30000,
		"location": "Golden Palms Avenue, Off Tumkur Road | Hobli, Tumkur Road, Bangalore 562123, India",
		"rating": 6,
		"description": "We had a company meeting there and it was not at all upto the mark. Rooms were looking very old. We stayed for 2 days and no one is interested to change soaps, and dont expect hot water to be hot , it would be warm only. For playing games timings are from 7 AM to 10 PM , no one would be there by 7 AM , we need to wait for them to arrive and provide kits. By the time we went in to ground at 7 AM some one else is already playing and he said that they are their members. ",
		"website": "http://www.clarksexotica.com/",
		"pic": "goldenpalms.jpg",
	}, {
		"name": "Clarks Exotica",
		"price": 13000,
		"location": "Swiss Town, Hollywood Junction, Sadahalli Post, Devanahalli Road, Bangalore 562 110, India",
		"description": "Very comfortable, clean and classy hotel with all modern amenities and hospitable staff. We couldn’t stop ourselves from extending our stay. I recommend for family to stay and enjoy the hospitality of Clarks Exotica. Food is good but just one suggestion that they can add few more non-veg items like kabab/grill/tandoor to the buffet spread.",
		"website": "http://www.clarksexotica.com/",
		"pic": "clarks-exotica-resort.jpg",
		"rating": 6
	}, {
		"name": "The Elanza Hotel",
		"price": 7000,
		"location": "88 / 2 Richmond Road, Bangalore 560025, India",
		"description": "Stayed at the Elanza for a night on a business trip. Affordable luxury without much fuss. Rooms have every modern convenience with top notch fittings in the bathroom, fantastic rain shower, electronic keypad based controls for lights etc., very comfortable bed, great lighting etc. The lobby is nice but not gigantic like that of a 5-star hotel but elegantly sufficient. The restaurant is fine for a night's dinner and a decent breakfast - although the food quality was fine it could stand some improvement. Friendly, attentive staff. Good location. Will stay there again.",
		"website": "http://www.clarksexotica.com/",
		"pic": "the-elanza-hotel.jpg",
		"rating": 3
	}, {
		"name": "Ramada Bangalore",
		"price": 17000,
		"location": "11 Park Road, Bangalore 560051, India",
		"description": "I stayed for two nights in this hotel. The hotel was right at the heart of the city near by commercial street. The room was neat clean especially the bathroom was so hygenic. The complementary breakfast buffet was simply awesome and delicious. Here I wud say that they match a five star hotel. About the cons, the staffs during check in were not bothered about welcoming, with no one to even carry the luggages it was a mere rude welcome I must say. The restaurant food there if u must have it is so expensive so better to dine out. Overall it is a very good stay. Cheers to Ramada people",
		"website": "http://www.clarksexotica.com/",
		"pic": "ramada.jpg",
		"rating": 8
	}, {
		"name": "Ibis",
		"price": 14500,
		"location": "26/1 Hosur Road | Near The Oxford College Bomanahalli, Bangalore 560068, India",
		"description": "I had a terrible experience of staying at Ibis Hosur road for two nights. Had expected a upmarket hotel as the rates at Ibis was equivalent to those charged by other 3 star hotels. Issued faced : Airconditioning wasn't working in the first night. Had to call reception at 4 am and asked for a single bedsheet as it was hot. Only one common low end iron box along with stand available across all floors. The iron box works only at a particular setting. I had to do a quick iron in the second day morning and had to call the room service to get my shirt ironed. Free WIFI is advertised. But it is only 256kbps connection. Rooms are pretty small and chairs were dirty. Even you need to swipe your room access card to use the life. First time I am facing this. The second day morning, I met the manager and complained about the airconditioning. She agreed to have it looked into. But when I came in the night, nothing was changed. After complaining again, they sent the technician. First he said that nothing is wrong. I called reception again and then he checked the system again and rectified the problem (blockage in the air vents). Ibis at Hosur road is not worth the amount we are paying unless you don't get better deals else where. Won't stay there again. Stayed November 2014, travelled on business",
		"website": "http://www.clarksexotica.com/",
		"pic": "ibis.jpg",
		"rating": 1
	}, {
		"name": "The Oberoi",
		"price": 24500,
		"location": "37-39,Mahatma Gandhi Road, Bangalore 560001, India",
		"description": "From the moment you walk into the Oberoi Bangalore, you are treated like royalty. The staff takes care of every single need and anticipates your potential needs. The food in the restaurants tastes fabulous and is also very creative. The décor and cleanliness of the hotel is also outstanding. Will definitely be back!",
		"website": "http://www.oberoi.com/",
		"pic": "oberoi.jpg",
		"rating": 10
	}];
}


angular.module('myApp').controller('mainController', anyName);
import React, { useEffect, useState } from "react";

//create our root component => App component
const Pagination = () => {
	//Set up our state
	const [currentPosition, setCurrentPosition] = useState(0);
	const [news, setNews] = useState(null);
	const [loading, setLoading] = useState(true);
	const [listsitems, setListItems] = useState(null);

	//Set our initial state
	useEffect(() => {
		//Lists news items
		const newsItems = [
			{
				title: "BBC Football",
				description: "Football news from the BBC",
				url: "https://www.bbc.com/sport/football",
			},
			{
				title: "Goal",
				description: "Football news from Goal",
				url: "https://www.goal.com/en",
			},
			{
				title: "Sky Sports",
				description: "Football news from Sky Sports",
				url: "https://www.skysports.com/football",
			},
			{
				title: "ESPN",
				description: "Football news from ESPN",
				url: "https://www.espn.com/soccer",
			},
			{
				title: "Soccer Planetom",
				description: "Football news from Soccer Planetom",
				url: "https://www.soccerplanetom.com",
			},
		];

		const item = newsItems[currentPosition];

		//set state
		setListItems(newsItems);

		//Set the state
		setNews(item);
		setLoading(false);
	}, [currentPosition]);

	//Handle next button click
	const handleNext = (e) => {
		e.preventDefault();
		//Update the state
		const length = listsitems.length;
		const count = length - 1;
		console.log(count);
		if (currentPosition < count) {
			setCurrentPosition(currentPosition + 1);
		} else {
			setCurrentPosition(0);
		}
	};

	//Handle previous button click
	const handlePrevious = (e) => {
		e.preventDefault();
		//Update the state
		if (currentPosition > 0) {
			setCurrentPosition((prev) => prev - 1);
		} else {
			setCurrentPosition(0);
		}
	};

	return (
		<section className="main-container">
			<section className="news">
				{loading ? (
					<p>Loading...</p>
				) : (
					<div className="news-item">
						<h2>{news.title}</h2>
						<p>{news.description}</p>
						<a href={news.url}>Visit {news.title}</a>
					</div>
				)}
			</section>
			<div className="paginate">
				<button onClick={handlePrevious}>Previous</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</section>
	);
};

export default Pagination;

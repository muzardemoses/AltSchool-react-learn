const Car = ({ data }) => {
	return (
		<div className="car">{`This is a ${data.brand} ${data.model} ${data.color} ${data.year}`}</div>
	);
};


const cars = [
  {
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  },
  {
    brand: "Fiat",
    model: "500",
    color: "white",
    year: 1957,
  },
  {
    brand: "Toyota",
    model: "Camry",
    color: "black",
    year: 2019,
  },
];
const carsList = cars.map((car) => {
  return < Car data={car } />
  //return <Car brand={car.brand} model={car.model} color={car.color} year={car.year} />
});

<section className="main-container">
  {carsList}
</section>;


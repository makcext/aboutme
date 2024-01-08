// WeatherModel.ts
interface WeatherData {
	
	main: {
		feels_like: number,
		humidity: number,
		pressure: number,
		temp: number,
		temp_max: number,
		temp_min: number;

	};

	weather: {
		id: number,
		description: string;
	}[];


}

export default WeatherData;
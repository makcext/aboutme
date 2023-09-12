// WeatherModel.ts
interface WeatherData {
	
	main: {
		pressure: number,
		temp: number;

	};

	weather: {
		id: number,
		description: string;
	}[];


}

export default WeatherData;
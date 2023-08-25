// WeatherModel.ts
interface WeatherData {
	main: {
		temp: number;
	};
	weather: {
		description: string;
	}[];
}

export default WeatherData;
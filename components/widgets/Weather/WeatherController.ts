// WeatherController.ts
import axios from 'axios';
import WeatherData from './WeatherModel';

const API_KEY = '149da3eb9110b7e6ba636b8ec43ac79a';

const fetchWeatherData = async (): Promise<WeatherData> => {
	try {
		const response = await axios.get<WeatherData>(
			`https://api.openweathermap.org/data/2.5/weather?lat=37.98&lon=23.72&appid=${API_KEY}&units=metric`
		);
		return response.data;
	} catch (error) {
		throw new Error('error');
	}
	};

	export default fetchWeatherData;

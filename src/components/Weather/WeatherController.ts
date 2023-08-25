// WeatherController.ts
import axios from 'axios';
import WeatherData from './WeatherModel';

const API_KEY = 'YOUR_API_KEY';
const CITY_NAME = 'Athens';
const COUNTRY_CODE = 'GR';

const fetchWeatherData = async (): Promise<WeatherData> => {
	try {
		const response = await axios.get<WeatherData>(
			`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME},${COUNTRY_CODE}&appid=${API_KEY}`
		);
		return response.data;
	} catch (error) {
		throw new Error('error');
	}
	};

	export default fetchWeatherData;

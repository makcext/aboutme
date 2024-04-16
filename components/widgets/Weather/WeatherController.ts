// "use client"
// WeatherController.ts
import axios from 'axios';
import WeatherData from './WeatherModel';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER;

const fetchWeatherData = async (latitude: number = 37.98, longitude: number = 23.72): Promise<WeatherData> => {
	try {
		// const API_KEY = process.env.OPENWEATHER;
		const response = await axios.get<WeatherData>(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
		);
		return response.data;
	} catch (error) {
		throw new Error('error');
	}
};

export default fetchWeatherData;
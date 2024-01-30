// Import axios
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERf;

const fetchForecastWeatherData = async (latitude: number = 37.98, longitude: number = 23.72) => {
	try {
			const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=3&appid=${API_KEY}&units=metric`
			);
			return response.data;
	} catch (error) {
			throw new Error('error');
	}
};

export default fetchForecastWeatherData;
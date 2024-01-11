// Import axios
import axios from 'axios';

const API_KEY = '149da3eb9110b7e6ba636b8ec43ac79a';

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
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';

function BackendData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://abtm-c97ea3f9a33e.herokuapp.com/status');
        setData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

console.log(data);

  return (
    <Typography variant='inherit'>
      backend is: {data}
    </Typography>
  );
}

export default BackendData;
import { useState } from 'react';
import WoltModel from './WoltModel';



export function useWoltController(): [typeof WoltModel['data'], (data: typeof WoltModel['data']) => void, () => void] {
  const [submitedData, setSubmitedData] = useState<typeof WoltModel['data']>(WoltModel.data);

  const handleDataChange = (data: typeof WoltModel['data']) => {
    const deliveryFee = WoltModel.calculate(data);
    setSubmitedData(prevState => ({ ...prevState, ...data, deliveryFee }));
  };

  const handleButtonClick = () => {
    WoltModel.data = submitedData;
    handleDataChange(submitedData);
  };

  return [submitedData, handleDataChange, handleButtonClick];
}
import axios from 'axios';
import { Dispatch } from 'redux';
import { carsActions } from './cars-slice';
import { CarProps } from '../shared/models/CarsProps';

export const fetchCarsData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`./cars.json`);
      const data = response.data.cars;

      const carsLoaded: CarProps[] = [];

      await data.map((car: CarProps) => {
        return carsLoaded.push({
          id: car.id,
          brand: car.brand,
          model: car.model,
          logo: car.logo,
          types: car.types,
          price: car.price
        });
      });

      dispatch(carsActions.addCars(carsLoaded));
    } catch (err) {
      console.log('Erro: ', err);
    }
  };
};

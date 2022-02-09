import { createSlice } from '@reduxjs/toolkit';
import { CarProps, CarsProps, TypeProps } from '../shared/models/CarsProps';

function changePosition(arr: any[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

const initialState: CarsProps = {
  cars: []
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCars(state, action) {
      state.cars = action.payload;
      state.cars.sort(function (a, b) {
        return a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0;
      });

      state.cars.map((car: CarProps) => {
        return car.types.map((type: TypeProps, index: number) => {
          if (type.number === 1) {
            return (type.selected = true);
          }
          return (type.selected = false);
        });
      });
    },
    selectCar(state, action) {
      const { id, number } = action.payload;

      const car = state.cars.find((car: CarProps) => car.id === id);

      car?.types.map((type: TypeProps) => {
        if (type.number === number) {
          return (type.selected = true);
        } else {
          return (type.selected = false);
        }
      });
    },
    carouselNavigation(state, action) {
      const { type, id } = action.payload;

      const car = state.cars.find((car: CarProps) => car.id === id);
      const selected = car?.types.find(
        (type: TypeProps) => type.selected === true
      );

      if (selected) {
        const index = car?.types.indexOf(selected);

        if (index !== undefined) {
          if (type === 'forward') {
            car?.types.map((type: TypeProps, indexArr: number) => {
              if (indexArr === index + 1) {
                return (type.selected = true);
              } else {
                return (type.selected = false);
              }
            });
          } else if (type === 'back') {
            car?.types.map((type: TypeProps, indexArr: number) => {
              if (indexArr === index - 1) {
                return (type.selected = true);
              } else {
                return (type.selected = false);
              }
            });
          }
        }
      }
    },
    organizingArray(state, action) {
      const { id } = action.payload;

      const car = state.cars.find((car: CarProps) => car.id === id);
      const selected = car?.types.find(
        (type: TypeProps) => type.selected === true
      );

      if (selected) {
        const index = car?.types.indexOf(selected);

        if (index !== undefined) {
          if (car?.types.length === 3) {
            car.types = changePosition(car?.types, index, 1);
          } else if (car?.types.length === 2) {
            car.types = changePosition(car?.types, index, 0);
          }
        }
      }
    }
  }
});

export const carsActions = carSlice.actions;

export default carSlice;

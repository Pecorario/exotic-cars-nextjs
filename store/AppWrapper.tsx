import { createContext, ReactNode, useContext, useState } from 'react';
import { CarProps, TypeProps } from '../shared/models/CarsProps';

type AppContextProps = {
  cars: CarProps[];
  addCars: (carsApi: CarProps[]) => void;
  selectCar: (id: string, number: number) => void;
  carouselNavigation: (type: 'forward' | 'back', id: string) => void;
  organizingArray: (id: string) => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContextProps);

function changePosition(arr: any[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

export function AppWrapper({ children }: AppContextProviderProps) {
  const [cars, setCars] = useState<CarProps[]>([]);

  function addCars(carsApi: CarProps[]) {
    carsApi.map((car: CarProps) => {
      return car.types.map((type: TypeProps) => {
        if (type.number === 1) {
          return (type.selected = true);
        }
        return (type.selected = false);
      });
    });
    setCars(carsApi);
    console.log('Add? ', cars);
  }

  function selectCar(id: string | undefined, number: number) {
    const carIndex = cars.findIndex((car: CarProps) => {
      return car.id === id;
    });

    const auxCars = [...cars];
    let direction;

    auxCars[carIndex]?.types.map((type: TypeProps, index: number) => {
      if (type.number === number) {
        if (index === 0) {
          direction = 'back';
        } else if (index === 2) {
          direction = 'forward';
        }
        return (type.selected = true);
      } else {
        return (type.selected = false);
      }
    });

    setCars(auxCars);

    if (id && direction) {
      organizingArray(id, direction);
    }
  }

  function carouselNavigation(type: 'forward' | 'back', id: string) {
    const carIndex = cars.findIndex((car: CarProps) => {
      return car.id === id;
    });

    const auxCars = [...cars];

    if (type === 'forward') {
      auxCars[carIndex]?.types.map((type: TypeProps, indexArr: number) => {
        if (indexArr === 2) {
          return (type.selected = true);
        } else {
          return (type.selected = false);
        }
      });
    } else if (type === 'back') {
      auxCars[carIndex]?.types.map((type: TypeProps, indexArr: number) => {
        if (indexArr === 0) {
          return (type.selected = true);
        } else {
          return (type.selected = false);
        }
      });
    }

    const direction = type === 'back' ? 'back' : 'forward';
    setCars(auxCars);
    organizingArray(id, direction);
  }

  function organizingArray(id: string, type?: 'forward' | 'back') {
    const carIndex = cars.findIndex((car: CarProps) => {
      return car.id === id;
    });

    const auxCars = [...cars];

    if (type === 'forward') {
      auxCars[carIndex].types = changePosition(auxCars[carIndex]?.types, 0, 2);
    } else if (type === 'back') {
      auxCars[carIndex].types = changePosition(auxCars[carIndex]?.types, 2, 0);
    } else {
      auxCars[carIndex].types = changePosition(auxCars[carIndex]?.types, 1, 0);
    }

    setCars(auxCars);
  }

  return (
    <AppContext.Provider
      value={{ cars, addCars, selectCar, carouselNavigation, organizingArray }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  const { cars, addCars, selectCar, carouselNavigation, organizingArray } =
    context;

  return {
    cars,
    addCars,
    selectCar,
    carouselNavigation,
    organizingArray
  };
}

import { createContext, ReactNode, useContext, useState } from 'react';
import { CarProps, CarsProps, TypeProps } from '../shared/models/CarsProps';

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

    auxCars[carIndex]?.types.map((type: TypeProps, index: number) => {
      if (type.number === number) {
        return (type.selected = true);
      } else {
        return (type.selected = false);
      }
    });

    setCars(auxCars);
  }

  function carouselNavigation(type: 'forward' | 'back', id: string) {
    const carIndex = cars.findIndex((car: CarProps) => {
      return car.id === id;
    });

    const auxCars = [...cars];

    const selected = auxCars[carIndex]?.types.find(
      (type: TypeProps) => type.selected === true
    );

    if (selected) {
      const index = auxCars[carIndex]?.types.indexOf(selected);

      if (index !== undefined) {
        if (type === 'forward') {
          auxCars[carIndex]?.types.map((type: TypeProps, indexArr: number) => {
            if (indexArr === index + 1) {
              return (type.selected = true);
            } else {
              return (type.selected = false);
            }
          });
        } else if (type === 'back') {
          auxCars[carIndex]?.types.map((type: TypeProps, indexArr: number) => {
            if (indexArr === index - 1) {
              return (type.selected = true);
            } else {
              return (type.selected = false);
            }
          });
        }
      }
    }
    setCars(auxCars);
    organizingArray(id);
  }

  function organizingArray(id: string) {
    const carIndex = cars.findIndex((car: CarProps) => {
      return car.id === id;
    });

    const auxCars = [...cars];

    const selected = auxCars[carIndex].types.find(
      (type: TypeProps) => type.selected === true
    );

    if (selected) {
      const index = auxCars[carIndex].types.indexOf(selected);
      console.log('QUal o index selecionado? ', index);
      if (index !== undefined) {
        if (auxCars[carIndex].types.length === 3) {
          auxCars[carIndex].types = changePosition(
            auxCars[carIndex]?.types,
            index,
            1
          );
        } else if (auxCars[carIndex]?.types.length === 2) {
          auxCars[carIndex].types = changePosition(
            auxCars[carIndex]?.types,
            index,
            0
          );
        }
      }
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

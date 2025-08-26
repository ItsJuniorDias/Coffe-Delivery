import { create } from "zustand";

type CoffeProps = {
  id: string;
  title: string;
  image: string;
  value: number;
}[];

type DataStore = {
  data: CoffeProps;
  fetch: (item: CoffeProps) => void;
  removeItem: (id: number) => void;
  total: () => number;
};

export const useCoffeStore = create<DataStore>((set, get) => ({
  data: [],
  fetch: (item: CoffeProps) =>
    set((state) => ({ data: [...state.data, item] })),
  removeItem: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
  total: () =>
    Number(
      get()
        .data.reduce((acc, item) => acc + item.value, 0)
        .toFixed(2)
    ),
}));

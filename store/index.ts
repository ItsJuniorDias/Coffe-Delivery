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
};

export const useUserStore = create<DataStore>((set) => ({
  data: [],
  fetch: (item: CoffeProps) =>
    set((state) => ({ data: [...state.data, item] })),
  removeItem: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
}));

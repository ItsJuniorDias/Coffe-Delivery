import { create } from "zustand";

type CoffeProps = {
  id: string;
  title: string;
  image: string;
  value: number;
  quantity: number;
}[];

type DataStore = {
  data: CoffeProps;
  fetch: (item: CoffeProps) => void;
  removeItem: (id: number) => void;
  total: () => number;
  filter: string;
  setFilter: (item: string) => void;

  setQuantityPlus: (id: string) => void;
  setQuantityMinus: (id: string) => void;
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
        .data.reduce((acc, item) => acc + item.value * item.quantity, 0)
        .toFixed(2)
    ),
  filter: "",
  setFilter: (text) => set({ filter: text }),

  setQuantityPlus: (id) =>
    set(() => {
      const existingItem = get().data.find((i) => i.id === id);

      let updatedCart;

      if (existingItem) {
        updatedCart = get().data.map((i) =>
          i.id === id
            ? { ...i, quantity: i.quantity + 1 } // ✅ só atualiza esse item
            : i
        );
      } else {
        updatedCart = [...get().data, { ...get(), quantity: 1 }];
      }

      return {
        data: updatedCart,
      };
    }),

  setQuantityMinus: (id) =>
    set(() => {
      const existingItem = get().data.find((i) => i.id === id);

      let updatedCart;

      if (existingItem) {
        updatedCart = get().data.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        updatedCart = [...get().data, { ...get(), quantity: 1 }];
      }

      return {
        data: updatedCart,
      };
    }),
}));

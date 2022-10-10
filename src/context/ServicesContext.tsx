import { createContext, ReactNode, useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  duration: number;
}

interface ServicesContextProviderProps {
  children: ReactNode;
}

export interface IService {
  id: string;
  name: string;
  price: number;
  time: number;
  descriptions: string[];
}

interface ServicesContextType {
  addServiceToCart: ({ id, name, price, duration }: CartItem) => void;
  cartItem: CartItem | null;
}

export const ServicesContext = createContext({} as ServicesContextType);

export function ServicesContextProvider({
  children,
}: ServicesContextProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const service_id = localStorage.getItem("@VaBeauty1.0:service_id");
    const service_name = localStorage.getItem("@VaBeauty1.0:service_name");
    const service_price = localStorage.getItem("@VaBeauty1.0:service_price");
    const service_duration = localStorage.getItem(
      "@VaBeauty1.0:service_duration"
    );

    if (service_id && service_name && service_price && service_duration) {
      setCartItem({
        id: service_id,
        name: service_name,
        price: Number(service_price),
        duration: Number(service_duration),
      });
    }
    setLoading(false);
  }, []);

  function addServiceToCart({ id, name, price, duration }: CartItem) {
    localStorage.setItem("@VaBeauty1.0:service_id", id);
    localStorage.setItem("@VaBeauty1.0:service_name", name);
    localStorage.setItem("@VaBeauty1.0:service_price", String(price));
    localStorage.setItem("@VaBeauty1.0:service_duration", String(duration));

    setCartItem({ id, name, price, duration });
  }

  function cleanCart() {
    setCartItem(null);
    localStorage.removeItem("@VaBeauty1.0:service_id");
    localStorage.removeItem("@VaBeauty1.0:service_name");
    localStorage.removeItem("@VaBeauty1.0:service_price");
    localStorage.removeItem("@VaBeauty1.0:service_duration");
  }

  return (
    <ServicesContext.Provider value={{ addServiceToCart, cartItem }}>
      {children}
    </ServicesContext.Provider>
  );
}

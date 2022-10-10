import { useEffect, useState } from "react";

import { MiddleText } from "../../components/MiddleText";
import { api } from "../../services/api";
import { Banner } from "./Banner";
import { Services } from "./Services";
import {
  ServiceContainer,
  ServiceCardContainer,
  ServicesContainer,
} from "./styles";

interface IServicesTitle {
  id: string;
  name: string;
  Services: IService[];
}
export interface IService {
  id: string;
  name: string;
  price: number;
  time: number;
  descriptions: string[];
}
interface IServicesTitle {
  id: string;
  name: string;
  Services: IService[];
}
export function Levres() {
  const [services, setServices] = useState<IServicesTitle[]>([]);

  async function fetchService() {
    const response = await api.get("service-header", {
      params: {
        category: "e43350c8-2f49-4f9d-b244-1f82f6d38c91",
      },
    });
    setServices(response.data);
  }

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <>
      <Banner />
      <ServicesContainer>
        {services.map((service) => {
          return (
            <ServiceContainer key={service.id}>
              <div>
                <h1 data-aos="fade-left">{service.name}</h1>
                <div className="Container">
                  <div className="imgContainer" data-aos="fade-up">
                    <img src="/sourcils/sourcil8.png" />
                  </div>
                  <ServiceCardContainer>
                    {service.Services.map((service) => {
                      return (
                        <Services
                          key={service.id}
                          id={service.id}
                          duration={service.time}
                          name={service.name}
                          price={service.price}
                          descriptions={service.descriptions}
                        />
                      );
                    })}
                  </ServiceCardContainer>
                </div>
              </div>
            </ServiceContainer>
          );
        })}
      </ServicesContainer>
    </>
  );
}

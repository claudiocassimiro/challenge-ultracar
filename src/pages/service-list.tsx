import { useEffect, useState } from "react";
import styles from "../styles/serviceList.module.css";
import Link from "next/link";
import Head from "next/head";

type Service = {
  coast: number;
  finishedServiceDatetime: number;
  id: string;
  initServiceDatetime: number;
  mechanicName: string;
  name: string;
  service: string;
  vehicle: string;
};

const ServiceList = () => {
  const [services, setServices] = useState([] as Service[]);

  useEffect(() => {
    const allServices = JSON.parse(sessionStorage.getItem("services") || `[]`);

    setServices(allServices);
  }, []);

  const handleFinishedServices = (item: Service) => {
    const newServicesArray = services.filter(
      (element) => element.id !== item.id
    );

    sessionStorage.setItem("services", JSON.stringify(newServicesArray));
    setServices(newServicesArray);
  };

  return (
    <>
      <Head>
        <title>ULTRACAR - Lista de Serviços</title>
        <meta
          name="description"
          content="Conheça o Ultracarweb, sistema de gestão especializado para empresas da reparação automotiva. Administre sua oficina com facilidade e segurança."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.containerServices}>
          {services.map((item) => {
            return (
              <div className={styles.service} key={item.id}>
                <div className={styles.containerClientInfos}>
                  <p className={styles.clientName}>{`Cliente: ${item.name}`}</p>
                  <p
                    className={styles.clientVehicle}
                  >{`Veículo do Cliente: ${item.vehicle}`}</p>
                </div>

                <div className={styles.containerServiceInfos}>
                  <p
                    className={styles.mechanicName}
                  >{`Nome do Mecânico: ${item.mechanicName}`}</p>
                  <p className={styles.servicePrice}>{`R$ ${item.coast}`}</p>
                </div>

                <button
                  className={styles.finishServiceButton}
                  type="button"
                  onClick={() => handleFinishedServices(item)}
                >
                  Finalizar Serviço
                </button>
              </div>
            );
          })}
        </div>
        <Link href="/" className={styles.registerAnotherServiceButton}>
          Cadastrar Outro serviço
        </Link>
      </div>
    </>
  );
};

export default ServiceList;

import { useRouter } from "next/router";
import styles from "../styles/services.module.css";
import { Client } from "@/utils/types";
import { mechanics, services } from "@/utils/mocks";
import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { uuid } from "uuidv4";
import Head from "next/head";

const Services = () => {
  const [selectedMechanic, setSelectedMechanic] = useState("Joab Silva");
  const [selectedService, setSelectedService] = useState("Troca de Oléo");

  const router = useRouter();
  const { client = "" } = router.query;

  const parsedClients = JSON.parse(client?.toString() || `{}`) as Client;

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceObj = services.find(
      (item) => item.service === selectedService
    );

    const newService = {
      ...serviceObj,
      ...parsedClients,
      id: uuid(),
      mechanicName: selectedMechanic,
      initServiceDatetime: Date.now(),
      finishServiceDatetime: "",
    };

    const getServices = sessionStorage.getItem("services");

    const inProgressServices = getServices ? JSON.parse(getServices) : [];

    sessionStorage.setItem(
      "services",
      JSON.stringify([...inProgressServices, newService])
    );

    return router.push("/service-list");
  };

  return (
    <>
      <Head>
        <title>ULTRACAR - Serviços</title>
        <meta
          name="description"
          content="Conheça o Ultracarweb, sistema de gestão especializado para empresas da reparação automotiva. Administre sua oficina com facilidade e segurança."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link className={styles.backButton} href="/clients-list">
            <IoIosArrowBack size={25} />
          </Link>
        </header>
        <form className={styles.form} onSubmit={(e) => handleSubmitForm(e)}>
          <div className={styles.containerSelects}>
            <label className={styles.label} htmlFor="select-mechanic">
              Selecione um Mecanico:
              <select
                className={styles.select}
                name="selectedMechanic"
                id="select-mechanic"
                value={selectedMechanic}
                onChange={(e) => setSelectedMechanic(e.target.value)}
                size={mechanics.length}
              >
                {mechanics.map((mechanic) => {
                  return (
                    <option key={mechanic.id} value={mechanic.name}>
                      {mechanic.name}
                    </option>
                  );
                })}
              </select>
            </label>

            <label className={styles.label} htmlFor="select-service">
              Selecione um serviço:
              <select
                className={styles.select}
                name="selectedService"
                id="select-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                size={services.length}
              >
                {services.map((service) => {
                  return (
                    <option key={service.id} value={service.service}>
                      {service.service}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          <button className={styles.submitButton} type="submit">
            Iniciar Manutenção
          </button>
        </form>
      </div>
    </>
  );
};

export default Services;

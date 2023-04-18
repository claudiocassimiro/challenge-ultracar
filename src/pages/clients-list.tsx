import Link from "next/link";
import styles from "../styles/clientsList.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { clients } from "@/utils/mocks";
import { Client } from "@/utils/types";
import { useRouter } from "next/router";
import Image from "next/image";

const ClientsList = () => {
  const [clientName, setClientName] = useState("");
  const router = useRouter();

  const handleClient = (client: Client) => {
    client;

    router.push({
      pathname: "/services",
      query: { client: JSON.stringify(client) },
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link className={styles.backButton} href="/">
          <IoIosArrowBack size={25} />
        </Link>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.containerLogo}>
          <Image
            src="/logo.webp"
            alt="logo da Ultracar"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.containerInput}>
          <input
            className={styles.input}
            type="text"
            placeholder="Buscar um Cliente"
            name="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>

        <div className={styles.containerClientsList}>
          <p className={styles.listText}>
            Lista de clientes - Escolha um cliente na lista
          </p>
          {clients.map((client) => {
            return client.name.includes(clientName) ? (
              <div
                className={styles.client}
                key={client.id}
                onClick={() => handleClient(client)}
              >
                <p className={styles.clientName}>{client.name}</p>
                <p className={styles.clientVehicle}>{client.vehicle}</p>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientsList;

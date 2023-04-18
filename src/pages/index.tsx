import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { ImQrcode } from "react-icons/im";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>ULTRACAR - Home</title>
        <meta
          name="description"
          content="Conheça o Ultracarweb, sistema de gestão especializado para empresas da reparação automotiva. Administre sua oficina com facilidade e segurança."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.containerMenu}>
          <div className={styles.containerLogo}>
            <Image
              src="/logo.webp"
              alt="logo da Ultracar"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.containerButton}>
            <Link href="#" className={styles.buttonRegisteredCustomers}>
              Clientes Cadastrados
            </Link>
            <Link
              href={{ pathname: "/incode", query: { page: "/" } }}
              className={styles.buttonsRegisterCustomer}
            >
              Cadastrar Cliente
            </Link>
          </div>
          <Link
            className={styles.linkToQrCode}
            href={{ pathname: "/incode", query: { page: "/" } }}
            title="Ler QRcode do Cliente"
          >
            <div className={styles.qrCodeTextContainer}>
              <p>Ler QRcode do Cliente</p>
              <ImQrcode className={styles.icon} size={20} />
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

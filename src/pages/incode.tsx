import Image from "next/image";
import styles from "../styles/incode.module.css";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

const InCode = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link className={styles.backButton} href={page?.toString() ?? "/home"}>
          <IoIosArrowBack size={25} />
        </Link>
      </header>
      <div className={styles.containerImage}>
        <Image
          className={styles.image}
          src="/in-code.webp"
          alt="Logo de pessoa programadora"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default InCode;

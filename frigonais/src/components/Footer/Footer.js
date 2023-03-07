import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/images/logo/fn-logo2.png";

import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { t } = useTranslation();

  const firstRow = [
    {
      image: {
        src: Logo,
        alt: "logo",
        style: { width: "118px" },
      },
    },
    {
      header: "Frigonais D.O.O.",
      lines: ["frigonais@gmail.com"],
    },
    {
      header: t("adress"),
      lines: ["Ulica Mladih 4, ", " 18000 Niš", "018 259-044"],
      links: [
        {
          href: "mail-to:" + "frigonaiskursumlija@gmail.com",
          title: "frigonaiskursumlija@gmail.com",
        },
      ],
    },
  ];

  const containerStyle = `${styles.container}`;
  const firstRowStyle = `${styles.rows} + ${styles.primary}`;
  const secondRowStyle = `${styles.rows} + ${styles.cards}`;
  const rowStyle = `${styles.row}`;
  const wrapperStyle = `${styles.wrapper}`;
  const copyrightStyle = `${styles.footer}`;

  return (
    <div className={containerStyle}>
      <div className={firstRowStyle}>
        <div className={wrapperStyle}>
          {firstRow.map((row, ind) => (
            <div key={`row-${ind}`} className={rowStyle}>
              <h4>{row.header}</h4>
              {row.image && (
                <a href="/">
                  <img
                    alt={row.image.alt}
                    style={row.image.style}
                    src={row.image.src}
                  />
                </a>
              )}
              {row.lines &&
                row.lines.map((line, ind) => (
                  <li key={`line-${ind}`} className={styles.li}>
                    {line}
                  </li>
                ))}
              {row.links &&
                row.links.map((link, ind) => (
                  <li key={`link-${ind}`} className={styles.li}>
                    {/* <Anchor customClass={styles.a} href={link.href}>{link.title}</Anchor> */}
                  </li>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className={copyrightStyle}>
        <p>{"copyright ® 2023"}</p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footer;

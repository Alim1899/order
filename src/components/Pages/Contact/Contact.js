import React from "react";
import classes from "./Contact.module.css";
import insta from "../../../assets/svg/insta.svg";
const Contact = () => {
  const apiKey = 'AIzaSyBos-57IZmV-HpSEnNeuQYL3fQLocEeroY';
   console.log(apiKey);
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.gradient}></div>
        <h2 className={classes.headerText}>
          Antalya Bilgisayar Tamiri, Bakımı ve Kurulum Hizmetleri
        </h2>
        <div className={classes.gradient}></div>
      </div>
      <p className={classes.paragraph}>
        Adres: Fener Mahallesi, 1984 Sokak, Aslı Menekşe Apartmanı, B Blok, No:
        3D, Muratpaşa/Lara - Antalya
      </p>
      <p className={classes.paragraph}>Mehmet Kıvanç ERBUDAK - 05451700658</p>
      <p className={classes.paragraph}>Instagram Sayfamız:</p>
      <a href="https://www.instagram.com/mkn.computer/" rel="noreferrer" target="_blank">
        <img className={classes.insta} alt="instalogo" src={insta}></img>
      </a>
      <iframe
        title="map"
        loading="lazy"
        allowFullScreen
        className={classes.map}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Kareli+magistrate+court,Kareli+Georgia&language=tr`}
      ></iframe>
    </div>
  );
};

export default Contact;

import React from "react";
import classes from "./Repair.module.css";
const Repair = () => {
  return (
    <div className={classes.main}>
      <section className={classes.firstSection}>
        <div className={classes.header}>
          <div className={classes.gradient}></div>
          <h2 className={classes.headerText}>
            Antalya Bilgisayar Tamiri, Bakımı ve Kurulum Hizmetleri
          </h2>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.text}>
          <p className={classes.paragraph}>
            MKN Computer olarak, bilgisayarlarınızın performansını artırmak,
            sorunları çözmek ve uzun ömürlü kullanımını sağlamak için kapsamlı
            bir bilgisayar tamiri ve bakım hizmeti sunuyoruz. Teknolojinin hızla
            geliştiği günümüzde, bilgisayarlarınızın sorunsuz ve güvenilir bir
            şekilde çalışması iş ve günlük yaşantınız için kritik önem taşıyor.
          </p>
          <p className={classes.paragraph}>
            MKN Computer olarak, bilgisayarlarınızın sağlığını ve güvenliğini ön
            planda tutuyor, uzman ekibimizle en iyi hizmeti sunuyoruz.
            Güvenilirlik, hızlı müdahale, kaliteli çözümler ve uygun fiyatlarla
            bilgisayar tamiri ve bakımında birinci tercihiniz olmaktan gurur
            duyuyoruz.
          </p>
          <p className={classes.paragraph}>
            Bilgisayarlarınızla ilgili herhangi bir sorunla karşılaştığınızda,
            MKN Computer sizin yanınızda! İletişime geçmek ve hizmetlerimiz
            hakkında daha fazla bilgi almak için bize ulaşın.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Repair;

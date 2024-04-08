import React from "react";
import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.gradient}></div>
        <h2 className={classes.headerText}>Hakkımızda</h2>
        <div className={classes.gradient}></div>
      </div>
      <div className={classes.aboutText}>
        <p className={classes.paragraph}>
          MKN Computer, yazılım dünyasında genç bir firma olarak,
          müşterilerimize her zaman en iyi hizmeti sunmayı hedefliyoruz.
          Amacımız, yenilikçi teknolojileri kullanarak, işletmelerin işlerini
          daha verimli hale getirmelerine yardımcı olmak ve uzun vadeli,
          sorunsuz yazılımlar sunmaktır.
        </p>
        <p className={classes.paragraph}>
          Müşterilerimize sunduğumuz hizmetler arasında, özelleştirilmiş yazılım
          çözümleri, web tasarımı, bilgisayar programlama, oto yıkama yazılımı -
          programı, restoran yazılımı - programı, b2b sistemler, e-ticaret
          sistemi, arayüz tasarımı, işletme yüzü - logo tasarımı ve dijital
          pazarlama stratejileri yer almaktadır. Bu hizmetleri, müşterilerimizin
          işlerini daha verimli hale getirmelerine yardımcı olmak amacıyla
          sunmaktayız. (Antalya ili içerisinde bilgisayar donanımı alanında da
          teknik destek sağlamaktayız.)
        </p>
        <p className={classes.paragraph}>
          Firmamızın temelinde müşteri memnuniyeti yatmaktadır. Müşterilerimizin
          ihtiyaçlarını anlamak ve onlara en uygun çözümleri sunmak için sürekli
          olarak çalışıyoruz. Tecrübeli ekibimiz, her müşterimiz için
          özelleştirilmiş çözümler sunarak, işletmelerin potansiyelini en üst
          düzeye çıkarmalarına yardımcı oluyor.
        </p>
        <p className={classes.paragraph}>
          Müşterilerimizle yakın bir işbirliği içinde olmayı tercih ediyoruz. Bu
          sayede, müşterilerimizin ihtiyaçlarını daha iyi anlayarak, onlara en
          uygun çözümleri sunabiliyoruz. Ayrıca, müşterilerimizin işlerinin her
          aşamasında, onlara destek olmaya hazırız.
        </p>
        <p className={classes.paragraph}>
          Bizimle çalışırken, işletmenizin başarısı bizim için en önemli
          önceliklerden biridir. İşletmenizin ihtiyaçlarını anlamak ve onlara en
          uygun çözümleri sunmak için her zaman buradayız.
        </p>
        <p className={classes.paragraph}>
          Siz de müşterilerimiz arasına katılmak ve işletmenizin potansiyelini
          en üst düzeye çıkarmak için, bizimle iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default About;

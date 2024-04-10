import React from "react";
import classes from "./Home.module.css";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import rest1 from "../../../assets/svg/rest1.svg";
import rest2 from "../../../assets/svg/rest2.svg";
import rest3 from "../../../assets/svg/rest3.svg";
import auto1 from "../../../assets/svg/auto1.svg";
import auto2 from "../../../assets/svg/auto2.svg";
import auto3 from "../../../assets/svg/auto3.svg";
import proj1 from "../../../assets/png/proj1.png";
import proj2 from "../../../assets/png/proj2.png";
import proj3 from "../../../assets/png/proj3.png";
import proj4 from "../../../assets/png/proj4.png";
import proj5 from "../../../assets/png/proj5.png";
import proj6 from "../../../assets/png/proj6.png";

const Home = () => {
  return (
    <div className={classes.main}>
      <section className={classes.firstSection}>
        <div className={classes.section}>
          <h2 className={classes.header}>Web Tasarım ve Yazılım Geliştirme</h2>
          <img alt="img1" src={img1}></img>
        </div>
        <div className={classes.section}>
          <h2 className={classes.header}>İşletme Yönetim Sistemleri</h2>
          <img alt="img1" src={img2}></img>
        </div>
        <div className={classes.section}>
          <h2 className={classes.header}>E-Ticaret Sistemleri
</h2>
          <img alt="img1" src={img3}></img>
        </div>
      </section>

      <section className={classes.secondSection}>
        <div className={classes.midSectionHeader}>
          <div className={classes.gradient}></div>
          <h1 className={classes.midSectionHeaderText}>Restoran Yazılımı</h1>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.restaurant}>
          <div className={classes.rest}>
            <img className={classes.svg} alt="rest1" src={rest1}></img>
            <h2>Restoranınızın tüm yönetimini tek bir panelden takip edin.</h2>
          </div>
          <div className={classes.rest}>
            <img className={classes.svg} alt="rest2" src={rest2}></img>
            <h2>
              İş verimliliğinizi gözden geçirmeniz ve artırmanız için günlük
              raporlar oluşturur.
            </h2>
          </div>
          <div className={classes.rest}>
            <img className={classes.svg} alt="rest3" src={rest3}></img>
            <h2>
              Ürünlerinizi anında menüye dönüştürün ve mutfak hatalarını ortadan
              kaldırın.
            </h2>
          </div>
        </div>
      </section>

      <section className={classes.thirdSection}>
        <div className={classes.midSectionHeader}>
          <div className={classes.gradient}></div>
          <h1 className={classes.midSectionHeaderText}>Oto Yıkama Yazılımı</h1>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.automotive}>
          <div className={classes.auto}>
            <img className={classes.svg} alt="auto1" src={auto1}></img>
            <h2>
              Oto yıkamanızın günlük gelir ve giderlerini kolayca takip etmenize
              olanak tanır.
            </h2>
          </div>
          <div className={classes.auto}>
            <img className={classes.svg} alt="auto2" src={auto2}></img>
            <h2>
              Müşterilerinizin bilgilerini tekrar tekrar almak zorunda
              kalmazsınız, araç plakası ile tüm bilgiler kaydedilir ve hızlıca
              işlem yaparsınız
            </h2>
          </div>
          <div className={classes.auto}>
            <img className={classes.svg} alt="auto3" src={auto3}></img>
            <h2>
              işletmenizin durumunu ister telefondan, ister bilgisayardan;
              nerede olursanız olun takip edebilirsiniz.
            </h2>
          </div>
        </div>
      </section>





      <section className={classes.fourthSection}>
        <div className={classes.midSectionHeader}>
          <div className={classes.gradient}></div>
          <h1 className={classes.midSectionHeaderText}>Kurumsal ve Diğer Tüm Projelerinizde Sizin Yanınızdayız
</h1>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.services}>
          <div className={classes.proj}>
            <img className={classes.svg} alt="proj1" src={proj1}></img>
            <h2>
            İsteklerinize cevap veren yazılımlarımız ile işinizi kolayca yönetin.

            </h2>
          </div>
          <div className={classes.proj}>
            <img className={classes.svg} alt="proj2" src={proj2}></img>
            <h2>
            Sistemlerimiz ve verileriniz uçtan uca koruma altında.

            </h2>
          </div>
          <div className={classes.proj}>
            <img className={classes.svg} alt="proj3" src={proj3}></img>
            <h2>
            Yönetim sistemlerimizi işinize özel optimize ederek iş analizlerinizi kolaylaştırıyoruz.
            </h2>
          </div>
          <div className={classes.proj}>
            <img className={classes.svg} alt="proj4" src={proj4}></img>
            <h2>
            B2B ve B2C sistemlerimiz ile iş ortaklarınıza ve müşterilerinize kolayca ulaşın.
            </h2>
          </div>
          <div className={classes.proj}>
            <img className={classes.svg} alt="proj5" src={proj5}></img>
            <h2>
            Satışlarınızı, gelir - gider muhasebenizi kolayca yönetin.
            </h2>
          </div>
          <div className={classes.proj}>
            <img className={classes.svg} alt="proj6" src={proj6}></img>
            <h2>
            Aklınızdaki projeyi en doğru yolu izleyerek beraber hayata geçirelim. İşiniz sizinle büyüsün.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

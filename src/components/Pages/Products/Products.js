import React from "react";
import classes from "./Products.module.css";
const Products = () => {
  return (
    <div className={classes.main}>
      <section className={classes.firstSection}>
        <div className={classes.header}>
          <div className={classes.gradient}></div>
          <h2 className={classes.headerText}>Restoran Yönetim Programı</h2>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.text}>
          <p className={classes.paragraph}>
            MKN Computer olarak, restoran sektöründe faaliyet gösteren
            işletmelerin günlük operasyonlarını daha etkili bir şekilde
            yönetmeleri ve müşteri deneyimini optimize etmeleri için
            tasarladığımız restoran takip programımızı sizlere sunmaktan gurur
            duyuyoruz. MKN Computer Restoran Takip Programı, siparişten stok
            yönetimine, rezervasyonlardan müşteri memnuniyetine kadar bir dizi
            özellik sunarak işletmenizin başarısını destekliyor.
          </p>
          <p className={classes.paragraph}>
            MKN Computer Restoran Takip Programı, restoran işletmelerinin
            rekabet avantajı sağlaması, verimliliği artırması ve müşteri
            memnuniyetini en üst düzeye çıkarması için tasarlanmıştır.
            İşletmenizin ihtiyaçlarına uygun, kullanımı kolay ve güçlü bir
            yönetim aracı arıyorsanız, MKN Computer sizin için doğru adres.
          </p>
          <p className={classes.paragraph}>
            Daha fazla bilgi için bizimle iletişime geçin ve restoranınız için
            en uygun çözümü keşfedin!
          </p>
        </div>
      </section>
      <section className={classes.secondSection}>
        <div className={classes.header}>
          <div className={classes.gradient}></div>
          <h2 className={classes.headerText}>Oto Yıkama Programı</h2>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.text}>
          <p className={classes.paragraph}>
            MKN Computer olarak, oto yıkama işletmelerinin ihtiyaçlarına uygun,
            kullanımı kolay ve güçlü bir takip programı sunuyoruz. İşletmenizin
            daha verimli çalışmasını sağlayarak zaman kazanmanıza ve müşteri
            memnuniyetinizi artırmanıza yardımcı oluyoruz.
          </p>
          <p className={classes.paragraph}>
            Unutmayın, başarılı bir oto yıkama işletmesi için güçlü bir yönetim
            aracına ihtiyaç vardır. MKN Computer Oto Yıkama Takip Programı,
            işletmenizin büyümesine katkıda bulunacak ve rekabet avantajı
            sağlayacaktır.
          </p>
          <p className={classes.paragraph}>
            Daha fazla bilgi için bizimle iletişime geçin ve sizin için en uygun
            çözümü bulalım!
          </p>
        </div>
      </section>

      <section className={classes.thirdSection}>
        <div className={classes.header}>
          <div className={classes.gradient}></div>
          <h2 className={classes.headerText}>Muhasebe Programi</h2>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.text}>
          <p className={classes.paragraph}>
            Bu sistemı, online olmanın avantajını işlevsellik ve modüler yapıyla
            birleştirerek müşterilere sunuyoruz. Bu sayede müşteriler, tüm iş
            süreçlerini yönetebilirken online ve bulut tabanlı olmanın
            özgürlüğünü yaşama fırsatı buluyorlar. Ayrıca bulut ve online
            altyapısıyla müşterilerini sunucu, güvenlik duvarı, donanım, SQL
            lisansı, sunucu bakımı gibi sorunlardan, siber saldırılardan ve
            maliyetlerden kurtarıyor.
          </p>
          <p className={classes.paragraph}>
            Sağladığımız ciddi güvenlik alt yapımızla müşterilerimize yerelde
            sağlanamayacak güvenlik avantajını sunuyoruz.
          </p>
          <p className={classes.paragraph}>
            Kullanıcılarımıza muhasebe işlemlerini daha etkin ve hatasız bir
            şekilde yönetme imkanı sunarak işletmelerin günlük muhasebe
            faaliyetlerini kolaylaştırmayı amaçlıyoruz. Bu programlar,
            işletmelerin finansal süreçlerini takip etmelerine ve işletme
            performanslarını analiz etmelerine yardımcı olabilir.
          </p>
          <p className={classes.paragraph}>
            Daha fazla bilgi için bizimle iletişime geçin ve sizin için en uygun
            çözümü bulalım!
          </p>
        </div>
      </section>

      <section className={classes.fourthSection}>
        <div className={classes.header}>
          <div className={classes.gradient}></div>
          <h2 className={classes.headerText}>NAKLİYE Programı</h2>
          <div className={classes.gradient}></div>
        </div>
        <div className={classes.text}>
          <p className={classes.paragraph}>
            Firmanızın tüm nakliye operasyonunu muhasebe ile entegre bir şekilde
            yönetmenizi sağlar. Bu program sayesinde tüm taşeron nakliyecilerin,
            kiralık plakaların, anlaşmalı petrol istasyonlarınızın, nakliye
            hizmeti verdiğiniz müşterilerinizin muhasebesini takip
            edebilirsiniz. Araçlarınızın masraf, yakıt, ceza vb. takibini
            yapabilirsiniz.
          </p>
          <p className={classes.paragraph}>
          Şubeleriniz arasında online bağlantı kurabilirsiniz. Birden çok şubeniz varsa, şubeler arasında otomatik veri transferi yaparak tüm nakliye operasyonlarınız arasında entegrasyon sağlayabilirsiniz.
          </p>
          <p className={classes.paragraph}>
            Daha fazla bilgi için bizimle iletişime geçin ve sizin için en uygun
            çözümü bulalım!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;

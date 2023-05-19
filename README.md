# NewspaperApp

Projeye göz atmadan önce bilmenizi isterim ki daha önce baştan sona bir Angular projesi geliştirmemiştim. Ayrıca, bu projede TypeScript'i ilk kez kullanıyorum ve kısa bir sürede öğrenmeye çalıştığım için teslimatımın geciktiğini belirtmek isterim. Bu proje aynı zamanda API kullanımını deneyimlediğim ilk projem oldu. Şu anda staj yaptığım yer ilk staj deneyimim ve HTML ve CSS dışında pek bir bilgim olmadığını fark ettim. Elimden geldiğince gereksinimlere uygun bir tasarım yapmaya çalıştım, ancak eksikliklerim olduğunu da kabul ediyorum. Muhtemelen bir sonraki aşamada benimle devam etmeyeceksiniz, fakat bu deneyim benim için son derece verimli oldu. Yine de öğrenmeye çok istekli olduğumu ve kendimi geliştirmek için elimden geleni yapacağımı bilmenizi isterim. Eğer bir sonraki aşamaya geçme şansım olursa, ekibinizdeki deneyimli frontend geliştiricilerin mentorluğunda kendimi daha da geliştirebileceğime inanıyorum.

## Tamamlanan Görevler
- Anasayfa, Hakkımda ve Kategori isimlerine özel sayfalar oluşturuldu.

- Anasayfa içeriğinin en üstüne slider eklendi. Api den gelen ilk 3 haberde burada, geri kalanlarda sayfanın devamında gösteriliyor. (slider daki problemler proje eksiklikleri başlığında anlatılacaktır.)

- Kategorilere özel api linkleri newsapiservices.service.ts dosyasına eklendi.

- Header ve Navbar tamamlandı ve tüm sayfalarda var.

- Hakkımda sayfası tamamlandı.

## Proje eksikleri

- apiden gelen ilk 3 haber slider da fakat sliderı çalıştırmak için yanlardakı butana çift tıklamak gerekiyo. Aslında aynı kodu başka projemde çalıştırdığımda sorunsuz çalışıyor ama burda çözemedim.

- apiden ulrToImage, description ve content değerleri null geliyor. newsapi nin web sitesine baktığımda ingilizce olan haberlerde böyle bir sorun yok sadece tr olanlarda var. ekibinize mail attiğimda bunu kendin çözmelisin dendi ama ben bi çözüm yolu bulamadım. Bu ndenle hiç bir haberin görseli yok.

- apiden kategorilere özel haberler geliyor ama bunu slider sayfası dışındaki sayfalarda kullandığımda hata veriyor. bu nedenle kategori sayfalarında haberler yok sadece tarasımı yaptım.

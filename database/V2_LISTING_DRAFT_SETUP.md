# Motoryat V2 — İlan Taslağı Kayıt Altyapısı

Yalnız `tasarim.motoryat.com` için geliştirilmiştir. Mevcut canlı Supabase projesini ve `motoryat.com` production şemasını değiştirmez.

## Durum
- `/ilan-ver`: Tekne türüne göre teknik alanlar, donanım seçimi, önizleme ve **Taslak Olarak Kaydet**.
- `/giris`: Supabase Auth e-posta/şifre; bağlantı kurulmamışsa açıkça uyarı verir.
- `POST /api/v2/listing-drafts`: **Varsayılan kapalı**. JWT doğrulama; veritabanı RLS ile kullanıcı ve mağaza üyeliği denetimi. Yalnız `draft` oluşturur; yayınlama YOK.
- Medya yükleme, ilan yayına alma, mağaza üyelik ataması henüz yapılmadı.

## Kurulum (ayrı V2 Supabase projesi)
1. Yeni ve **ayrı** Supabase projesinin SQL Editor bölümünde `database/v2-listing-drafts.sql` dosyasını uygula.
2. Supabase Auth üzerinde kullanıcı oluştur; mağaza adına kayıt için `public.v2_listing_store_members` tablosuna yönetici tarafından ilgili `store_id`, `user_id`, `role` satırı ekle. Giriş yapan kullanıcıya üyelik oluşturma yetkisi VERME.
3. Hostinger V2 ortamına aşağıdaki değişkenleri tanımla:

```env
MOTORYAT_V2_SUPABASE_URL=https://YOUR-V2-PROJECT.supabase.co
MOTORYAT_V2_SUPABASE_ANON_KEY=YOUR-PUBLISHABLE-OR-ANON-KEY
NEXT_PUBLIC_MOTORYAT_V2_SUPABASE_URL=https://YOUR-V2-PROJECT.supabase.co
NEXT_PUBLIC_MOTORYAT_V2_SUPABASE_ANON_KEY=YOUR-PUBLISHABLE-OR-ANON-KEY
MOTORYAT_V2_WRITES_ENABLED=true
```

4. Tekrar build/deploy yap. `MOTORYAT_V2_WRITES_ENABLED` yoksa veya `true` değilse API HTTP 503 döndürür.
5. Giriş yap, ilan formuna geç, alanları doldur, kaydı **taslak** olarak test et. Başka hesabın mağaza kimliğine kayıt yapılmasının RLS tarafından engellendiğini doğrula.

## Güvenlik
- Browser'da veya GitHub'da asla Supabase service-role / secret key tutma.
- İstemci yalnız geçici oturum belleğinde JWT tutar; sayfa/oturum yenileme yönetimi henüz tam uygulama değildir.
- Kullanıcının `owner_id` alanı istemciden kabul edilmez: sunucuda Auth /user ile doğrulanır.
- Mağaza yetkisinin asıl denetimi RLS'dir. Üye olmayan kullanıcı mağazaya kayıt yapamaz.
- `status='draft'` sabittir; yayına alma endpoint'i mevcut değildir.
- Veritabanı kısıtı veya Auth erişimi çözümlenmediyse kayıt çalışmaz.

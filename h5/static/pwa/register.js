/* ==========================================================================
   HK HUNG YAN TRADING LIMITED - 1:1 Replica of Staunton and Henry
   Store Catalog Data, Multi-Language, Multi-Currency, Cart & Guest Checkout
   ========================================================================== */
(function () {
  'use strict';

  var CDN_BASE = 'https://stauntonandhenry.com/cdn/shop/';

  var COMPANY_INFO = {
    name: 'HK HUNG YAN TRADING LIMITED',
    address: '九龍灣宏開道８號其士商業中心地下１０３室',
    phone: '+852 64443048',
    hours: 'Monday – Friday: 9:00 AM – 6:00 PM PST',
    copyright: '© 2026 HK HUNG YAN TRADING LIMITED All rights reserved.'
  };

  var FIXED_SHIPPING_USD = 15.00;

  var CURRENCIES = {
    USD: { code: 'USD', symbol: 'US$', rate: 1.00, label: 'United States (USD $)' },
    GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'United Kingdom (GBP £)' },
    EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'European Union (EUR €)' },
    CAD: { code: 'CAD', symbol: 'CA$', rate: 1.38, label: 'Canada (CAD $)' },
    AUD: { code: 'AUD', symbol: 'AU$', rate: 1.52, label: 'Australia (AUD $)' },
    HKD: { code: 'HKD', symbol: 'HK$', rate: 7.80, label: 'Hong Kong SAR (HKD $)' }
  };

  var SANCTIONED_COUNTRIES = [
    'North Korea',
    'Democratic People\'s Republic of Korea',
    'Iran',
    'Iran (Islamic Republic of)',
    'Myanmar',
    'Burma',
    'Russia',
    'Russian Federation',
    'Syria',
    'Syrian Arab Republic',
    'Cuba',
    'South Sudan',
    'Yemen',
    'Haiti',
    'Venezuela',
    'Afghanistan',
    'Belarus',
    'Crimea',
    'Donetsk',
    'Luhansk'
  ];

  var ALLOWED_CHECKOUT_COUNTRIES = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SE', name: 'Sweden' },
    { code: 'DK', name: 'Denmark' },
    { code: 'IE', name: 'Ireland' },
    { code: 'AT', name: 'Austria' },
    { code: 'BE', name: 'Belgium' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'SG', name: 'Singapore' },
    { code: 'HK', name: 'Hong Kong SAR' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'AE', name: 'United Arab Emirates' }
  ];

  var I18N = {
    en: {
      top_shipping: '🌎 Flat-Rate Standard Shipping ($15.00 USD) on All Orders',
      top_shipping_link: 'Shipping Policy',
      top_promo: '🏷️ Enjoy up to 30% Off Seasonal Home Collections',
      search_placeholder: 'Search furniture, lighting, rugs...',
      nav_new: 'New',
      nav_furniture: 'Furniture',
      nav_accessories: 'Home Accessories',
      nav_lighting: 'Lighting',
      nav_wall: 'Wall Decor',
      nav_rugs: 'Rugs',
      nav_kitchen: 'Kitchen',
      nav_style: 'By Style',
      nav_about: 'About',
      nav_contact: 'Contact',
      hero_eyebrow: 'Curated Homeware & Eclectic Living',
      hero_title: 'Cosy Autumn & Timeless Interiors',
      hero_sub: 'Enjoy up to 30% off our Seasonal Best Sellers. Direct-from-artisan quality with flat-rate $15.00 tracked delivery.',
      hero_cta: 'Shop Collection',
      sec_collections: 'Discover Collections',
      sec_collections_sub: 'Explore thoughtfully curated furniture, lighting, hand-knotted rugs, and tabletop pieces.',
      sec_styles: 'Discover Your Style',
      sec_styles_sub: 'From tranquil Japandi minimalism to richly layered vintage Persian and mid-century silhouettes.',
      sec_new_arrivals: 'New Arrivals',
      sec_best_sellers: 'Best Sellers',
      sec_spotlight: 'Featured Artisan Spotlight',
      sec_reviews: 'Customer Love',
      sec_reviews_sub: 'Verified reviews from homeowners and interior stylists around the world.',
      sec_inspiration: 'Homely Inspiration',
      sec_why_us: 'Love Decorating With Us',
      prop1_title: 'Friendly Prices',
      prop1_sub: 'Great Design, Great Value',
      prop1_desc: 'We believe great design should be accessible to everyone. Enjoy direct-from-workshop pricing.',
      prop2_title: 'Flat-Rate $15.00 Shipping',
      prop2_sub: 'Transparent & Tracked Delivery',
      prop2_desc: 'Every order ships with a consistent $15.00 USD flat-rate standard shipping fee—no hidden checkout surprises.',
      prop3_title: 'Quality Guaranteed',
      prop3_sub: 'Shop With Confidence',
      prop3_desc: 'Every piece is inspected prior to dispatch and backed by our 14-day return and exchange policy.',
      newsletter_title: 'Love Home? You\'ll Love This.',
      newsletter_sub: 'Get the latest decorating tips, subscriber-only deals and new arrivals. No junk, promise :)',
      newsletter_btn: 'Subscribe',
      cart_title: 'Shopping Cart',
      cart_empty: 'Your shopping cart is currently empty.',
      cart_subtotal: 'Subtotal',
      cart_shipping: 'Standard Tracked Shipping (Flat Rate)',
      cart_total: 'Total',
      cart_checkout_btn: 'Proceed to Guest Checkout',
      add_to_cart: 'Add to Cart',
      quick_view: 'Specs & Details',
      view_label: 'View',
      shipping_badge: 'Standard Shipping: $15.00 Flat Rate'
    },
    zh: {
      top_shipping: '🌎 全場統一固定標準運費 ($15.00 USD)，結賬透明無隱藏費用',
      top_shipping_link: '運輸條款',
      top_promo: '🏷️ 精選季節家居系列享高達 7 折優惠',
      search_placeholder: '搜尋家具、燈飾、地毯、餐具...',
      nav_new: '新品上市',
      nav_furniture: '家具系列',
      nav_accessories: '家居飾品',
      nav_lighting: '設計師燈具',
      nav_wall: '牆面裝飾',
      nav_rugs: '精選地毯',
      nav_kitchen: '餐廚美學',
      nav_style: '風格指南',
      nav_about: '關於我們',
      nav_contact: '聯絡我們',
      hero_eyebrow: '精選現代家居與美學生活',
      hero_title: '溫馨秋日與雋永室內設計',
      hero_sub: '季節熱銷單品享高達 30% 折扣。工坊直供品質，全站訂單統一收取 $15.00 標準追蹤運費。',
      hero_cta: '立即選購',
      sec_collections: '探索精選系列',
      sec_collections_sub: '發掘匠心打造的實木家具、氛圍燈飾、手工編織地毯與日式陶瓷餐具。',
      sec_styles: '探索您的專屬風格',
      sec_styles_sub: '從寧靜的日式北歐風 (Japandi) 到復古波斯與中古世紀現代設計。',
      sec_new_arrivals: '最新上架',
      sec_best_sellers: '暢銷經典',
      sec_spotlight: '本季主打星品',
      sec_reviews: '顧客真實好評',
      sec_reviews_sub: '來自全球屋主與室內設計師的真實購買評價。',
      sec_inspiration: '居家設計靈感',
      sec_why_us: '為什麼選擇我們',
      prop1_title: '親民直供價格',
      prop1_sub: '卓越設計，超值之選',
      prop1_desc: '我們深信好設計應觸手可及，直接與源頭工坊合作省去中間溢價。',
      prop2_title: '$15.00 固定標準運費',
      prop2_sub: '全程物流追蹤與一致收費',
      prop2_desc: '所有訂單均採用統一 $15.00 美元（或等值當地貨幣）標準運費，頁面與收銀台完全一致。',
      prop3_title: '品質保證',
      prop3_sub: '安心無憂購物支持遊客結賬',
      prop3_desc: '每件商品出貨前均經過嚴格品檢，並享有 14 天退換貨保障。',
      newsletter_title: '熱愛居家生活？訂閱我們的電子報',
      newsletter_sub: '獲取最新軟裝搭配靈感、訂閱者專屬優惠與新品通知。',
      newsletter_btn: '立即訂閱',
      cart_title: '購物車',
      cart_empty: '您的購物車目前是空的。',
      cart_subtotal: '商品小計',
      cart_shipping: '固定標準運費 (與 Shipping & Delivery 一致)',
      cart_total: '訂單總計',
      cart_checkout_btn: '前往收銀台結賬 (支持遊客免註冊)',
      add_to_cart: '加入購物車',
      quick_view: '查看規格詳情',
      view_label: '瀏覽',
      shipping_badge: '固定標準運費: $15.00'
    },
    de: {
      top_shipping: '🌎 Einheitlicher Standardversand ($15.00 USD Pauschalpreis) für alle Bestellungen',
      top_shipping_link: 'Versandbedingungen',
      top_promo: '🏷️ Bis zu 30% Rabatt auf saisonale Wohnkollektionen',
      search_placeholder: 'Möbel, Beleuchtung, Teppiche suchen...',
      nav_new: 'Neuheiten',
      nav_furniture: 'Möbel',
      nav_accessories: 'Wohnaccessoires',
      nav_lighting: 'Beleuchtung',
      nav_wall: 'Wanddekoration',
      nav_rugs: 'Teppiche',
      nav_kitchen: 'Küche & Essen',
      nav_style: 'Nach Stil',
      nav_about: 'Über uns',
      nav_contact: 'Kontakt',
      hero_eyebrow: 'Kuratierte Wohnkultur & Zeitloses Design',
      hero_title: 'Gemütliche Herbststimmung für Ihr Zuhause',
      hero_sub: 'Sichern Sie sich bis zu 30% Rabatt auf unsere Bestseller. Einheitlicher Standardversand für $15.00 USD.',
      hero_cta: 'Jetzt Entdecken',
      sec_collections: 'Kollektionen Entdecken',
      sec_collections_sub: 'Entdecken Sie handverlesene Möbel, Designerlampen, Wollteppiche und Keramikgeschirr.',
      sec_styles: 'Finden Sie Ihren Einrichtungsstil',
      sec_styles_sub: 'Von ruhigem Japandi-Minimalismus bis hin zu Mid-Century Modern und Vintage-Teppichen.',
      sec_new_arrivals: 'Neuzugänge',
      sec_best_sellers: 'Bestseller',
      sec_spotlight: 'Ausgewähltes Highlight',
      sec_reviews: 'Kundenbewertungen',
      sec_reviews_sub: 'Verifizierte Bewertungen von Kunden und Innenarchitekten weltweit.',
      sec_inspiration: 'Wohninspiration',
      sec_why_us: 'Warum Bei Uns Einkaufen',
      prop1_title: 'Faire Preise',
      prop1_sub: 'Großartiges Design, Großartiger Wert',
      prop1_desc: 'Direktpreise ab Werk ohne Zwischenhändler für erstklassiges Wohndesign.',
      prop2_title: '$15.00 Pauschalversand',
      prop2_sub: 'Transparenter Versand mit Sendungsverfolgung',
      prop2_desc: 'Jede Bestellung wird mit einer festen Versandpauschale von $15.00 USD berechnet.',
      prop3_title: 'Qualitätsgarantie',
      prop3_sub: 'Sicher Einkaufen als Gast',
      prop3_desc: 'Sorgfältig geprüfte Materialien und 14 Tage Rückgabe- und Umtauschrecht.',
      newsletter_title: 'Lieben Sie schönes Wohnen?',
      newsletter_sub: 'Erhalten Sie Einrichtungstipps, exklusive Angebote und Neuheiten direkt per E-Mail.',
      newsletter_btn: 'Abonnieren',
      cart_title: 'Warenkorb',
      cart_empty: 'Ihr Warenkorb ist derzeit leer.',
      cart_subtotal: 'Zwischensumme',
      cart_shipping: 'Standardversand (Pauschalpreis)',
      cart_total: 'Gesamtsumme',
      cart_checkout_btn: 'Weiter zur Kasse (Gastbestellung möglich)',
      add_to_cart: 'In den Warenkorb',
      quick_view: 'Details & Maße',
      view_label: 'Ansehen',
      shipping_badge: 'Standardversand: $15.00 Pauschal'
    }
  };

  var COLLECTIONS = [
    { id: 'rugs', title: 'Rugs', image: CDN_BASE + 'files/O1CN01SWOHO81EbxSAX8XDm__3705600371.webp?v=1793834839' },
    { id: 'lighting', title: 'Lighting', image: CDN_BASE + 'files/O1CN01fPHGgW1SueqifEBNU__677792307.webp?v=1778126153&width=600' },
    { id: 'accessories', title: 'Cushions & Throws', image: CDN_BASE + 'products/101287-b.jpg?v=1624673541' },
    { id: 'wall-decor', title: 'Wall Decor', image: CDN_BASE + 'products/101308-a.jpg?v=1624673619' },
    { id: 'kitchen', title: 'Kitchen & Dining', image: CDN_BASE + 'files/A_5.jpg?v=1778111470' },
    { id: 'furniture', title: 'Furniture', image: CDN_BASE + 'products/2_5a5eeb44-a104-4bf4-a0e0-02960bf68d6c.jpg?v=1642487077' }
  ];

  var STYLES = [
    { id: 'japandi', title: 'Japandi', image: CDN_BASE + 'files/O1CN01fPHGgW1SueqifEBNU__677792307.webp?v=1778126153&width=600' },
    { id: 'eclectic', title: 'Eclectic', image: CDN_BASE + 'files/Image_Oct_22_2026_11_10_34_AM-1.jpg?v=1792627912' },
    { id: 'mid-century', title: 'Mid-Century', image: CDN_BASE + 'files/O1CN01P1pyWh1HSkh4UNxCg__206080757.webp?v=1793667050' },
    { id: 'scandinavian', title: 'Scandinavian', image: CDN_BASE + 'products/101308-a.jpg?v=1624673619' },
    { id: 'asian', title: 'Asian', image: CDN_BASE + 'products/2_5a5eeb44-a104-4bf4-a0e0-02960bf68d6c.jpg?v=1642487077' },
    { id: 'traditional', title: 'Traditional', image: CDN_BASE + 'collections/ChatGPT_Traditional.jpg?v=1781587629&width=600' },
    { id: 'coastal', title: 'Coastal', image: CDN_BASE + 'files/7_10d75209-be7d-4895-8070-fa2e9868f47f.jpg?v=1716355022' },
    { id: 'bohemian', title: 'Bohemian', image: CDN_BASE + 'files/O1CN017Yn9mz1DxfCpNR6Eq__1883510283.webp?v=1793661188' }
  ];

  var PRODUCTS = [
    {
      id: 'faisal-vintage-red-persian-rug',
      title: 'Faisal Vintage Red Persian Rug',
      category: 'rugs',
      style: 'traditional',
      section: 'new',
      badges: ['New'],
      priceUSD: 102.00,
      compareUSD: 128.00,
      rating: 4.9,
      reviewsCount: 14,
      image: CDN_BASE + 'files/O1CN01SWOHO81EbxSAX8XDm__3705600371.webp?v=1793834839',
      options: ['140 x 200 cm', '160 x 230 cm', '200 x 300 cm'],
      specs: {
        Material: '100% High-Density Woven Polyester with Glue-Free Backing',
        Dimensions: '140 x 200 cm / 160 x 230 cm / 200 x 300 cm',
        PileHeight: '8 mm Low-Profile Distressed Weave',
        Backing: 'Non-Slip Cotton Canvas Backing',
        Care: 'Vacuum regularly without beater bar; spot clean with mild soap and cold water.'
      },
      description: 'Bring warmth, colour and a sense of timeless character to your home with the Faisal Vintage Red Persian Rug. Its intricate floral motifs and rich terracotta red tones, accented with deep navy blue and warm ivory, create a layered look that complements both modern and classic interiors.'
    },
    {
      id: 'winston-green-mid-century-area-rug',
      title: 'Winston Green Mid-Century Area Rug',
      category: 'rugs',
      style: 'mid-century',
      section: 'new',
      badges: ['New'],
      priceUSD: 140.00,
      compareUSD: 198.00,
      rating: 4.8,
      reviewsCount: 9,
      image: CDN_BASE + 'files/O1CN01P1pyWh1HSkh4UNxCg__206080757.webp?v=1793667050',
      options: ['140 x 200 cm', '160 x 230 cm', '200 x 300 cm'],
      specs: {
        Material: 'Soft Spun Polyester Pile with Reinforced Edge Binding',
        Dimensions: '140 x 200 cm / 160 x 230 cm / 200 x 300 cm',
        Style: 'Mid-Century Modern Geometric',
        SuitableFor: 'Living Room, Dining Room, Study',
        Care: 'Spot clean with a damp cloth or professional rug clean.'
      },
      description: 'Designed with balanced geometric blocks in sage and forest green, the Winston Mid-Century Area Rug anchors living and dining spaces with organic mid-century character and underfoot comfort.'
    },
    {
      id: 'zarah-colourful-transitional-persian-style-rug',
      title: 'Zarah Colourful Transitional Persian Style Rug',
      category: 'rugs',
      style: 'bohemian',
      section: 'new',
      badges: ['New'],
      priceUSD: 140.00,
      compareUSD: 204.00,
      rating: 4.9,
      reviewsCount: 11,
      image: CDN_BASE + 'files/O1CN017Yn9mz1DxfCpNR6Eq__1883510283.webp?v=1793661188',
      options: ['120 x 180 cm', '160 x 230 cm', '200 x 300 cm'],
      specs: {
        Material: 'Premium Wool and Nylon Blend',
        Dimensions: '120 x 180 cm / 160 x 230 cm / 200 x 300 cm',
        Features: 'Stain-Resistant Surface, Non-Slip Backing',
        Origin: 'Artisan Loom Woven',
        Care: 'Light vacuum regularly; blot spills immediately with a clean dry cloth.'
      },
      description: 'Add a touch of colour and personality to your home with this distressed vintage Persian rug. Its intricate floral pattern blends soft pinks, golden yellows and hints of blue against a muted neutral background.'
    },
    {
      id: 'farah-vintage-persian-style-area-rug',
      title: 'Farah Vintage Persian Style Area Rug',
      category: 'rugs',
      style: 'traditional',
      section: 'new',
      badges: ['New'],
      priceUSD: 306.00,
      compareUSD: 435.00,
      rating: 5.0,
      reviewsCount: 7,
      image: CDN_BASE + 'files/O1CN01948ZiOkGUnE2vHAO__1883510283.webp?v=1793655357',
      options: ['160 x 230 cm', '200 x 300 cm', '240 x 340 cm'],
      specs: {
        Material: 'Natural Wool and Durable Nylon Blend',
        Dimensions: '160 x 230 cm / 200 x 300 cm / 240 x 340 cm',
        Tone: 'Distressed Charcoal, Blush Pink, and Warm Ivory',
        Construction: 'High-Density Loom Knotted',
        Care: 'Professional clean or gentle cold surface wash.'
      },
      description: 'Bring a sense of depth and understated elegance to your home with the Farah Vintage Persian Rug. Its softly distressed charcoal, blush pink and ivory tones create a refined, collected-over-time look.'
    },
    {
      id: 'mehdi-vintage-persian-round-wool-rug',
      title: 'Mehdi Vintage Persian Round Wool Rug',
      category: 'rugs',
      style: 'eclectic',
      section: 'new',
      badges: ['New'],
      priceUSD: 140.00,
      compareUSD: 204.00,
      rating: 4.9,
      reviewsCount: 12,
      image: CDN_BASE + 'files/O1CN01A7Dfvh1DxfErdR5bG__1883510283.webp?v=1793332056',
      options: ['Beige - 150 cm Dia', 'Green - 180 cm Dia', 'Pink - 200 cm Dia'],
      specs: {
        Material: '100% Natural Carded Wool Pile',
        Shape: 'Circular / Round',
        AvailableDiameters: '150 cm, 180 cm, 200 cm, 240 cm',
        Thickness: '10 mm Cushioned Underfoot',
        Care: 'Vacuum with suction only; rotate periodically for even wear.'
      },
      description: 'Create a warm, inviting reading corner or dining nook with the Mehdi Vintage Persian Round Wool Rug, featuring an intricate botanical medallion in soft ivory, beige and muted taupe tones.'
    },
    {
      id: 'fez-pink-and-blue-vintage-persian-area-rug',
      title: 'Fez Pink and Blue Vintage Persian Area Rug',
      category: 'rugs',
      style: 'bohemian',
      section: 'new',
      badges: ['New'],
      priceUSD: 140.00,
      compareUSD: 190.00,
      rating: 4.8,
      reviewsCount: 8,
      image: CDN_BASE + 'files/O1CN01KtgJXJ1Dxf5UnefrN__1883510283.webp?v=1792641655',
      options: ['140 x 200 cm (Washable)', '160 x 230 cm (Imported Wool)', '200 x 300 cm (Imported Wool)'],
      specs: {
        Material: 'Choice of Machine-Washable Faux Cashmere or Imported Wool',
        Dimensions: '140 x 200 cm / 160 x 230 cm / 200 x 300 cm',
        Backing: 'Integrated Anti-Slip Grip Backing',
        Style: 'Transitional Persian Floral',
        Care: 'Cold gentle cycle for washable version; dry clean for wool version.'
      },
      description: 'Featuring delicate floral motifs and a softly faded palette of blush pink, slate blue and warm beige, the Fez Area Rug brings relaxed sophistication and plush softness to living rooms and bedrooms.'
    },
    {
      id: 'retro-green-non-slip-washable-area-rug',
      title: 'Retro Green Non-Slip Washable Area Rug',
      category: 'rugs',
      style: 'eclectic',
      section: 'new',
      badges: ['New'],
      priceUSD: 89.00,
      compareUSD: 128.00,
      rating: 4.9,
      reviewsCount: 15,
      image: CDN_BASE + 'files/Image_Oct_22_2026_11_10_34_AM-1.jpg?v=1792627912',
      options: ['120 x 180 cm', '160 x 230 cm', '200 x 300 cm'],
      specs: {
        Material: 'Woven Micro-Fiber Polyester with Anti-Slip Backing',
        Dimensions: '120 x 180 cm / 160 x 230 cm / 200 x 300 cm',
        Pattern: 'Over-Dyed Vintage Medallion in Emerald Green',
        Maintenance: 'Machine Washable, Vacuum Friendly',
        SuitableFor: 'Living Room, Hallway, Study, Bedroom'
      },
      description: 'Bold over-dyed emerald green tones meet classic Persian medallion detailing in this low-maintenance, non-slip washable area rug designed for busy modern households.'
    },
    {
      id: 'rufus-vintage-brick-red-wool-area-rug',
      title: 'Rufus Vintage Brick Red Wool Area Rug',
      category: 'rugs',
      style: 'mid-century',
      section: 'new',
      badges: ['New', 'Hand Made'],
      priceUSD: 562.00,
      compareUSD: 819.00,
      rating: 5.0,
      reviewsCount: 6,
      image: CDN_BASE + 'files/O1CN01Ss4zA81IneeQzOFoO__2209326070938.webp?v=1792553465',
      options: ['155 x 230 cm (Grey on Red)', '194 x 290 cm (Red on Cream)', '232 x 340 cm (Textured Red)'],
      specs: {
        Material: '80% Hand-Spun New Zealand Wool, 20% Cotton Warp',
        Dimensions: '155 x 230 cm / 194 x 290 cm / 232 x 340 cm',
        Style: 'Vintage French Mid-Century Geometric',
        Craftsmanship: 'Hand-Tufted by Artisans',
        Care: 'Vacuum gently; blot spills immediately without rubbing.'
      },
      description: 'Inspired by mid-century French geometric textiles, the Rufus Wool Area Rug pairs warm brick-red tones with charcoal motifs in a medium-pile wool blend.'
    },
    {
      id: 'kyoto-blue-white-stoneware-plate-set',
      title: 'Kyoto Blue & White Stoneware Plate - Set of 4',
      category: 'kitchen',
      style: 'japandi',
      section: 'new',
      badges: ['New'],
      priceUSD: 74.00,
      compareUSD: 102.00,
      rating: 4.9,
      reviewsCount: 22,
      image: CDN_BASE + 'products/6_cd273101-fee2-4e88-8712-c4f4ac573095.jpg?v=1634784069',
      options: ['Assorted Floral Set of 4 (21 cm)', 'Ginkgo & Wave Set of 4 (21 cm)'],
      specs: {
        Includes: 'Set of 4 Assorted Dinner / Breakfast Plates',
        Material: 'High-Fired Stoneware Porcelain with Underglaze Finish',
        Diameter: '21 cm (8.25 inches)',
        Safety: 'Lead-Free, Microwave Safe, Dishwasher Safe',
        Origin: 'Traditional Japanese Kiln Craftsmanship'
      },
      description: 'Elevate everyday dining and dinner parties with the Kyoto Blue & White Stoneware Plate Set. Each plate is finished with a high-temperature hand-applied underglaze pattern.'
    },
    {
      id: 'kyoto-hand-painted-ceramic-bowl-set',
      title: 'Kyoto Hand-Painted Blue and White Ceramic Bowl - Set of 4',
      category: 'kitchen',
      style: 'asian',
      section: 'new',
      badges: ['New'],
      priceUSD: 49.00,
      compareUSD: 68.00,
      rating: 5.0,
      reviewsCount: 19,
      image: CDN_BASE + 'products/101359-f.jpg?v=1647841784',
      options: ['12 cm Rice Bowl (Set of 4)', '16 cm Noodle Soup Bowl (Set of 4)'],
      specs: {
        Includes: 'Set of 4 Hand-Painted Ceramic Bowls',
        Material: 'Durable High-Temperature Fired Ceramic',
        Dimensions: '12 cm Diameter x 6.5 cm Height (or 16 cm Noodle Bowl)',
        Craftsmanship: 'Artisan Underglaze Brushwork',
        Care: 'Dishwasher and microwave safe.'
      },
      description: 'Ideal for rice, soups, noodles, and desserts, our Kyoto Hand-Painted Ceramic Bowls combine artisan cobalt-blue brushwork with durable everyday stoneware construction.'
    },
    {
      id: 'kaito-retro-japanese-rice-bowl-set',
      title: 'Kaito Retro Japanese Rice Bowl Set - Set of 4',
      category: 'kitchen',
      style: 'japandi',
      section: 'new',
      badges: ['New'],
      priceUSD: 54.00,
      compareUSD: 76.00,
      rating: 4.9,
      reviewsCount: 16,
      image: CDN_BASE + 'files/D_5.jpg?v=1778111562',
      options: ['Earth Tone Set of 4', 'Kiln Blue Set of 4'],
      specs: {
        Includes: 'Set of 4 Textured Ceramic Bowls',
        Material: 'Artisan Stoneware Clay with Reactive Glaze',
        Dimensions: '11.8 cm Diameter x 6.2 cm Height (320 ml)',
        Features: 'Heat-Insulating Thick Rim, Stackable Foot',
        Care: 'Microwave, sterilizer, and dishwasher safe.'
      },
      description: 'Finished in warm reactive kiln glazes, the Kaito Retro Japanese Rice Bowl Set brings tactile wabi-sabi charm to daily family meals.'
    },
    {
      id: 'hakim-vintage-persian-washable-area-rug',
      title: 'Hakim Vintage Persian Washable Area Rug',
      category: 'rugs',
      style: 'traditional',
      section: 'new',
      badges: ['New'],
      priceUSD: 178.00,
      compareUSD: 242.00,
      rating: 4.8,
      reviewsCount: 10,
      image: CDN_BASE + 'files/O1CN01FFwiV21ofvIsTJqJR__732395253.webp?v=1792622681',
      options: ['160 x 230 cm', '200 x 300 cm', '240 x 340 cm'],
      specs: {
        Material: 'Faux Cashmere Micro-Velvet Pile with Non-Slip TPR Backing',
        Dimensions: '160 x 230 cm / 200 x 300 cm / 240 x 340 cm',
        Thickness: '7 mm Low Pile (Door-Clearance Friendly)',
        Care: 'Machine washable in cold water; air dry flat.'
      },
      description: 'Combining classic Persian heritage medallions with modern stain-resistant, washable convenience, the Hakim Area Rug is ideal for high-traffic living and dining rooms.'
    },
    {
      id: 'mother-of-pearl-placemats',
      title: 'Mother of Pearl Placemats',
      category: 'kitchen',
      style: 'coastal',
      section: 'bestseller',
      badges: ['Best Seller', 'Hand Made'],
      priceUSD: 38.00,
      compareUSD: 52.00,
      rating: 4.9,
      reviewsCount: 27,
      image: CDN_BASE + 'files/7_10d75209-be7d-4895-8070-fa2e9868f47f.jpg?v=1716355022',
      options: ['Pearl White Round (38 cm)', 'Champagne Gold Round (38 cm)', 'Pearl White Oval (30 x 45 cm)'],
      specs: {
        Material: 'Natural Capiz Mother of Pearl Shell Inlay on Hardboard Backing',
        Dimensions: 'Round: 38 cm Diameter / Oval: 30 x 45 cm',
        Finish: 'Hand-Cut Petal Scale Mosaic with Protective Lacquer',
        Care: 'Wipe clean with a soft damp cloth; do not submerge in water or place in dishwasher.'
      },
      description: 'Add coastal elegance to your dining table with our handmade Mother of Pearl Placemats. Each piece features luminous capiz shell inlay that catches the light beautifully.'
    },
    {
      id: 'aless-arc-gold-floor-lamp',
      title: 'Aless Arc Gold Floor Lamp',
      category: 'lighting',
      style: 'mid-century',
      section: 'bestseller',
      badges: ['Best Seller'],
      priceUSD: 148.00,
      compareUSD: 195.00,
      rating: 4.9,
      reviewsCount: 18,
      image: CDN_BASE + 'products/1_d8b0247a-0bd6-4c56-804f-a15d97a52fd5.jpg?v=1650544975',
      options: ['Pleated White Shade / Brass Stand (US Plug)', 'Warm Linen Shade / Brass Stand (UK/EU Plug)'],
      specs: {
        Material: 'Brushed Brass Plated Steel Stem, Solid Marble Base, Pleated Fabric Shade',
        Dimensions: 'Height 162 cm x Width 42 cm (Shade Diameter 32 cm)',
        LightSource: 'E26 / E27 Warm LED Bulb Included (110V–240V Compatible)',
        SwitchType: 'Convenient Foot Pedal Switch',
        Assembly: 'Tool-free 10-minute assembly.'
      },
      description: 'Meet the Aless Arc Gold Floor Lamp, featuring a graceful brushed gold arch, weighted marble base, and a tailored pleated fabric shade that casts a warm ambient glow over sofas and reading chairs.'
    },
    {
      id: 'arlo-nordic-wall-clock-with-wood-frame',
      title: 'Arlo Nordic Wall Clock With Wood Frame',
      category: 'wall-decor',
      style: 'scandinavian',
      section: 'bestseller',
      badges: ['Best Seller'],
      priceUSD: 48.00,
      compareUSD: 68.00,
      rating: 4.9,
      reviewsCount: 34,
      image: CDN_BASE + 'products/101308-a.jpg?v=1624673619',
      options: ['White Dial / 12 Inch', 'Taupe Dial / 12 Inch', 'White Dial / 14 Inch', 'Taupe Dial / 16 Inch'],
      specs: {
        Material: 'Solid Ash Wood Frame, Matte Acrylic Face, Walnut Wood Hands',
        Movement: 'Silent Non-Ticking Quartz Sweep Movement',
        Sizes: '10 Inch (25 cm), 12 Inch (30 cm), 14 Inch (35 cm), 16 Inch (40 cm)',
        PowerSource: '1 x AA Carbon-Zinc Battery (Not Included)',
        Mounting: 'Rear nail slot included for flush wall hanging.'
      },
      description: 'A modern minimalist wall clock designed with highly legible Arabic hour markers, solid wooden baton hands, and an ultra-quiet non-ticking movement ideal for living rooms, kitchens, and bedrooms.'
    },
    {
      id: 'aroica-white-and-blue-wool-rug',
      title: 'Aroica White and Blue Wool Rug',
      category: 'rugs',
      style: 'coastal',
      section: 'bestseller',
      badges: ['Best Seller', 'Hand Made'],
      priceUSD: 255.00,
      compareUSD: 358.00,
      rating: 5.0,
      reviewsCount: 15,
      image: CDN_BASE + 'products/101807-e.jpg?v=1645058617',
      options: ['120 x 180 cm', '160 x 230 cm', '190 x 290 cm'],
      specs: {
        Material: '85% High-Density Hand-Tufted Wool, 15% Cotton',
        Dimensions: '120 x 180 cm / 160 x 230 cm / 190 x 290 cm',
        Origin: 'Handmade to Order by Skilled Artisans',
        Pile: '12 mm Plush Cushioned Wool Pile',
        Care: 'Use a soft brush or suction vacuum; blot spills immediately.'
      },
      description: 'Handcrafted by skilled artisans using traditional table-tufting techniques, the Aroica White and Blue Wool Rug brings serene coastal geometry and plush wool comfort to any room.'
    },
    {
      id: 'modern-chinese-ceramic-hand-painted-stool',
      title: 'Modern Chinese Ceramic Hand-Painted Stool',
      category: 'furniture',
      style: 'asian',
      section: 'bestseller',
      badges: ['Best Seller', 'Hand Made'],
      priceUSD: 118.00,
      compareUSD: 165.00,
      rating: 5.0,
      reviewsCount: 21,
      image: CDN_BASE + 'products/2_5a5eeb44-a104-4bf4-a0e0-02960bf68d6c.jpg?v=1642487077',
      options: ['Sage with Gold Rim', 'Turquoise with Gold Rim', 'White with Gold Rim', 'Imperial Yellow'],
      specs: {
        Material: 'High-Fired Glazed Porcelain Ceramic',
        Dimensions: 'Height 45 cm x Diameter 33 cm',
        WeightCapacity: 'Up to 120 kg (Suitable as Seat or Side Table)',
        Usage: 'Indoor Living Room, Bathroom Accent, or Covered Patio',
        Care: 'Wipe clean with a soft damp cloth.'
      },
      description: 'Expertly handcrafted from glazed ceramic, this drum garden stool showcases a delicate hand-painted bird and blossom motif. Use it as a side table, plant stand, or occasional seat.'
    },
    {
      id: 'woven-peacock-blue-throw-cushion',
      title: 'Woven Peacock Blue Throw Cushion',
      category: 'accessories',
      style: 'eclectic',
      section: 'bestseller',
      badges: ['Best Seller'],
      priceUSD: 62.00,
      compareUSD: 88.00,
      rating: 4.8,
      reviewsCount: 11,
      image: CDN_BASE + 'products/101287-b.jpg?v=1624673541',
      options: ['45 x 45 cm (Cover + Plush Insert)', '50 x 50 cm (Cover + Plush Insert)'],
      specs: {
        Material: '60% Combed Cotton, 40% Textural Linen Weave',
        Insert: 'Hypoallergenic Micro-Down Alternative Inner Included',
        Closure: 'Concealed Bottom Zipper',
        Dimensions: '45 x 45 cm / 50 x 50 cm',
        Care: 'Remove cover and cold gentle machine wash; lay flat to dry.'
      },
      description: 'Quickly refresh your sofa or bed with the Woven Peacock Blue Throw Cushion. Its rich textural weave pairs effortlessly with tan leather, neutral linen, or patterned accent pillows.'
    },
    {
      id: 'replica-george-nelson-night-clock',
      title: 'Mid-Century Brass & Walnut Desk Clock',
      category: 'wall-decor',
      style: 'mid-century',
      section: 'bestseller',
      badges: ['Best Seller'],
      priceUSD: 192.00,
      compareUSD: 250.00,
      rating: 4.8,
      reviewsCount: 14,
      image: CDN_BASE + 'products/101770-a_1.jpg?v=1652868413',
      options: ['Brushed Brass & Walnut', 'Matte Black & Walnut'],
      specs: {
        Material: 'Solid Brushed Brass, American Walnut Base, Acrylic Dome',
        Dimensions: 'Height 15 cm x Width 11.5 cm x Depth 9 cm',
        Movement: 'Precision Quartz Movement',
        PowerSource: '1 x AA Battery',
        Origin: 'Mid-Century Inspired Artisan Production'
      },
      description: 'Combining warm walnut wood with sculptural brushed brass and an angled domed face, this mid-century desk and mantel clock is a functional work of tabletop art.'
    },
    {
      id: 'kansai-modern-japanese-glass-tea-set',
      title: 'Kansai Modern Japanese Glass Tea Set',
      category: 'kitchen',
      style: 'japandi',
      section: 'bestseller',
      badges: ['Best Seller'],
      priceUSD: 58.00,
      compareUSD: 82.00,
      rating: 4.9,
      reviewsCount: 29,
      image: CDN_BASE + 'products/101207-1.jpg?v=1582629235',
      options: ['Teapot + 4 Cups + Bamboo Tray', 'Teapot + 6 Cups + Ceramic Warmer + Tray'],
      specs: {
        Material: 'Heat-Resistant Borosilicate Glass, Natural Bamboo Tray, Ceramic Infuser',
        TeapotCapacity: '600 ml (-20°C to 150°C Thermal Shock Resistant)',
        Includes: 'Glass Teapot, Removable Ceramic Filter, Double-Wall Cups, Bamboo Drainage Tray',
        Care: 'Hand wash recommended for bamboo tray; glass components are dishwasher safe.'
      },
      description: 'A complete set for the modern tea connoisseur, featuring a crystal-clear borosilicate glass teapot with a porcelain infuser, matching cups, and a slotted bamboo serving tray.'
    }
  ];

  var REVIEWS = [
    {
      author: 'Ramon M.R.',
      date: 'August 2026',
      product: 'Kyoto Blue & White Stoneware Plate - Set of 4',
      title: 'Beautifully Packaged & Authentic Quality',
      body: 'The plates received correspond exactly to the photos and were very carefully packaged with foam protection. They look wonderful on our dining table.'
    },
    {
      author: 'Igor A.',
      date: 'August 2026',
      product: 'Arlo Nordic Wall Clock With Wood Frame',
      title: 'Outstanding Quality & Silent Movement',
      body: 'Outstanding quality. Reasonably fast shipping and great handling. Completely silent on the wall and the natural wood frame matches our Scandinavian living room.'
    },
    {
      author: 'Sabrina B.',
      date: 'April 2026',
      product: 'Modern Chinese Ceramic Hand-Painted Stool',
      title: 'Amazing Craftsmanship & Support',
      body: 'The products I bought from HK HUNG YAN TRADING LIMITED are of amazing quality. The customer service and tracking updates they offered were prompt and helpful.'
    },
    {
      author: 'Nicola P.',
      date: 'May 2026',
      product: 'Arlo Nordic Wall Clock With Wood Frame',
      title: 'Second Purchase – Highly Recommended',
      body: 'This was the second clock I purchased. Both times I could not fault the service. When I emailed a question they got back to me within 24 hours.'
    },
    {
      author: 'Kirsty A.G.',
      date: 'February 2026',
      product: 'Faisal Vintage Red Persian Rug',
      title: 'Soft Underfoot & Rich Colours',
      body: 'The rug is absolutely beautiful and has made a great addition to our apartment. The quality is excellent, really soft and lies flat right out of the package.'
    },
    {
      author: 'Mabel W.',
      date: 'January 2026',
      product: 'Aless Arc Gold Floor Lamp',
      title: 'Stylish & Warm Ambient Lighting',
      body: 'Stylish and high-quality floor lamp that complements our reading nook. Easy to assemble and the foot switch is very convenient.'
    }
  ];

  var BLOG_POSTS = [
    {
      id: 'curves-interior-design',
      title: 'Curve\'s the Word: The Rise in Curved Home Decor + Tips from Interiors Experts',
      date: 'October 18, 2026',
      image: CDN_BASE + 'files/O1CN01A7Dfvh1DxfErdR5bG__1883510283.webp?v=1793332056',
      excerpt: 'Looking for a way to inject personality into your living room or soften angular architecture? Discover how round wool rugs, arched floor lamps, and drum stools create an inviting flow.',
      content: '<p>Curves are the most practical way to soften sharp corners and architectural lines that may otherwise feel cold or rigid. Whether you live in a compact city apartment or a spacious family home, introducing organic rounded silhouettes immediately draws the eye in a welcoming manner.</p><h3>1. Anchor Seating Zones with Round Wool Rugs</h3><p>A circular rug—such as our Mehdi Vintage Persian Round Wool Rug—breaks up the boxy grid of sofas and media consoles, making reading corners and dining nooks feel effortlessly cohesive.</p><h3>2. Soften Vertical Lines with Arched Lighting & Drum Stools</h3><p>Pair a pleated arc floor lamp with a glazed ceramic drum stool beside an armchair. The combination of warm diffused lighting and sculptural curves adds depth without cluttering your floor plan.</p>'
    },
    {
      id: 'interior-design-trends-2026',
      title: 'Interior Design Trends 2026: Warm Minimalism, Japandi & Collected Vintage',
      date: 'November 2, 2026',
      image: CDN_BASE + 'files/Image_1a_554c3c05-0481-4b29-a10a-93f947dacd0e.jpg?v=1792032553&width=1000',
      excerpt: 'With each new season comes an opportunity to refresh your space. Explore how natural timber, hand-painted ceramics, and distressed Persian textiles are defining homes in 2026.',
      content: '<p>Homeowners in 2026 are moving away from sterile, all-white rooms toward warm, tactile spaces that tell a personal story. By blending Scandinavian functionality with Japanese artisan textures (Japandi) and timeless vintage rugs, your home feels both calm and lived-in.</p><h3>1. Handcrafted Tableware for Everyday Rituals</h3><p>Replacing plain mass-produced dishes with hand-painted underglaze stoneware—like our Kyoto and Kaito collections—turns daily coffee and family dinners into a tactile pleasure.</p><h3>2. Layered Textiles in Terracotta, Sage & Indigo</h3><p>Anchor neutral walls with a distressed terracotta or sage green area rug, then echo those hues on your sofa with woven cotton-linen and corduroy throw cushions.</p>'
    }
  ];

  function getLang() { return localStorage.getItem('gs_lang') || 'en'; }
  function setLang(lang) {
    if (!I18N[lang]) lang = 'en';
    localStorage.setItem('gs_lang', lang);
    applyLanguageAndCurrency();
  }

  function getCurrency() { return localStorage.getItem('gs_currency') || 'USD'; }
  function setCurrency(curr) {
    if (!CURRENCIES[curr]) curr = 'USD';
    localStorage.setItem('gs_currency', curr);
    applyLanguageAndCurrency();
  }

  function formatMoney(usdAmount, currCode) {
    var code = currCode || getCurrency();
    var c = CURRENCIES[code] || CURRENCIES.USD;
    var converted = usdAmount * c.rate;
    return c.symbol + converted.toFixed(2) + (code === 'USD' ? ' USD' : '');
  }

  function getCart() {
    try {
      var raw = localStorage.getItem('gs_cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem('gs_cart', JSON.stringify(cart));
    renderCartUI();
  }

  function addToCart(productId, option, qty) {
    var product = PRODUCTS.find(function (p) { return p.id === productId; });
    if (!product) return;
    var selectedOpt = option || (product.options && product.options[0]) || 'Standard';
    var quantity = parseInt(qty, 10) || 1;
    var cart = getCart();
    var existing = cart.find(function (item) {
      return item.id === productId && item.option === selectedOpt;
    });
    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        priceUSD: product.priceUSD,
        image: product.image,
        option: selectedOpt,
        qty: quantity
      });
    }
    saveCart(cart);
    showToast('Added "' + product.title + '" to your cart.');
    openCartDrawer();
  }

  function updateCartQty(index, delta) {
    var cart = getCart();
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    if (typeof window.renderCheckoutSummary === 'function') {
      window.renderCheckoutSummary();
    }
  }

  function showToast(msg) {
    var toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'site-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3000);
  }

  function openCartDrawer() {
    var backdrop = document.getElementById('cart-backdrop');
    var drawer = document.getElementById('cart-drawer');
    if (backdrop && drawer) {
      backdrop.classList.add('open');
      drawer.classList.add('open');
      renderCartUI();
    }
  }

  function closeCartDrawer() {
    var backdrop = document.getElementById('cart-backdrop');
    var drawer = document.getElementById('cart-drawer');
    if (backdrop && drawer) {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
    }
  }

  function renderCartUI() {
    var cart = getCart();
    var count = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
    var badges = document.querySelectorAll('.js-cart-count');
    badges.forEach(function (el) { el.textContent = count; });

    var listEl = document.getElementById('cart-items-container');
    var footerEl = document.getElementById('cart-drawer-footer');
    var t = I18N[getLang()] || I18N.en;

    if (!listEl) return;

    if (cart.length === 0) {
      listEl.innerHTML = '<div style="text-align:center;padding:48px 16px;color:var(--text-muted);">' +
        '<p style="margin-bottom:20px;">' + t.cart_empty + '</p>' +
        '<a href="/categories.html" class="btn-primary" onclick="window.GoldstreamStore.closeCartDrawer()">Shop All Collections</a>' +
        '</div>';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (footerEl) footerEl.style.display = 'block';
    var subtotalUSD = 0;
    var html = '';
    cart.forEach(function (item, idx) {
      var lineUSD = item.priceUSD * item.qty;
      subtotalUSD += lineUSD;
      html += '<div class="cart-item">' +
        '<img src="' + item.image + '" alt="' + item.title + '" class="cart-item-img">' +
        '<div>' +
          '<div class="cart-item-title">' + item.title + '</div>' +
          '<div class="cart-item-variant">Option: ' + item.option + '</div>' +
          '<div class="cart-item-qty">' +
            '<button type="button" onclick="window.GoldstreamStore.updateCartQty(' + idx + ', -1)">−</button>' +
            '<span>' + item.qty + '</span>' +
            '<button type="button" onclick="window.GoldstreamStore.updateCartQty(' + idx + ', 1)">+</button>' +
          '</div>' +
        '</div>' +
        '<div style="font-weight:600;font-size:0.9rem;">' + formatMoney(lineUSD) + '</div>' +
      '</div>';
    });
    listEl.innerHTML = html;

    var subEl = document.getElementById('cart-subtotal-val');
    var shipEl = document.getElementById('cart-shipping-val');
    var totEl = document.getElementById('cart-total-val');
    if (subEl) subEl.textContent = formatMoney(subtotalUSD);
    if (shipEl) shipEl.textContent = formatMoney(FIXED_SHIPPING_USD);
    if (totEl) totEl.textContent = formatMoney(subtotalUSD + FIXED_SHIPPING_USD);
  }

  function renderProductCard(p) {
    var t = I18N[getLang()] || I18N.en;
    var badgesHtml = (p.badges || []).map(function (b) {
      var cls = 'badge-new';
      if (b === 'Best Seller') cls = 'badge-bestseller';
      if (b === 'Hand Made') cls = 'badge-handmade';
      return '<span class="badge ' + cls + '">' + b + '</span>';
    }).join('');

    return '<article class="product-card" data-category="' + p.category + '" data-style="' + p.style + '">' +
      '<div class="product-media" onclick="window.GoldstreamStore.openProductModal(\'' + p.id + '\')">' +
        '<div class="product-badges">' + badgesHtml + '</div>' +
        '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
        '<div class="product-quick-actions" onclick="event.stopPropagation()">' +
          '<button type="button" class="quick-btn" onclick="window.GoldstreamStore.addToCart(\'' + p.id + '\')">' + t.add_to_cart + '</button>' +
          '<button type="button" class="quick-btn" style="background:rgba(255,255,255,0.92);color:#222;" onclick="window.GoldstreamStore.openProductModal(\'' + p.id + '\')">' + t.quick_view + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="product-info">' +
        '<div class="product-category-label">' + p.category.replace('-', ' ') + ' • ' + p.style + '</div>' +
        '<h3 class="product-title" onclick="window.GoldstreamStore.openProductModal(\'' + p.id + '\')">' + p.title + '</h3>' +
        '<div class="product-rating">★★★★★ <span>' + p.rating.toFixed(1) + ' (' + p.reviewsCount + ')</span></div>' +
        '<div class="product-price-row">' +
          '<span class="price-current" data-usd="' + p.priceUSD + '">' + formatMoney(p.priceUSD) + '</span>' +
          '<span class="price-compare" data-usd="' + p.compareUSD + '">' + formatMoney(p.compareUSD) + '</span>' +
        '</div>' +
        '<div class="product-shipping-note">✓ ' + t.shipping_badge + '</div>' +
      '</div>' +
    '</article>';
  }

  function openProductModal(productId) {
    var p = PRODUCTS.find(function (item) { return item.id === productId; });
    if (!p) return;
    var modal = document.getElementById('product-detail-modal');
    var body = document.getElementById('product-modal-body');
    if (!modal || !body) return;

    var optionsHtml = (p.options || ['Standard']).map(function (opt, i) {
      return '<button type="button" class="option-pill ' + (i === 0 ? 'active' : '') + '" onclick="window.GoldstreamStore.selectModalOption(this, \'' + opt.replace(/'/g, "\\'") + '\')">' + opt + '</button>';
    }).join('');

    var specsHtml = Object.keys(p.specs || {}).map(function (k) {
      var label = k.replace(/([A-Z])/g, ' $1').trim();
      return '<tr><td style="padding:8px 12px;border-bottom:1px solid var(--border-color);font-weight:600;width:36%;color:var(--text-main);">' + label + '</td>' +
        '<td style="padding:8px 12px;border-bottom:1px solid var(--border-color);color:var(--text-muted);">' + p.specs[k] + '</td></tr>';
    }).join('');

    window._currentModalOption = (p.options && p.options[0]) || 'Standard';

    body.innerHTML = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:36px;align-items:start;">' +
      '<div style="border-radius:6px;overflow:hidden;background:var(--bg-warm);border:1px solid var(--border-color);">' +
        '<img src="' + p.image + '" alt="' + p.title + '" style="width:100%;aspect-ratio:1/1;object-fit:cover;">' +
      '</div>' +
      '<div>' +
        '<div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-gold);font-weight:600;margin-bottom:6px;">HK HUNG YAN TRADING LIMITED • Verified Specification</div>' +
        '<h2 style="font-family:var(--font-serif);font-size:2rem;line-height:1.2;margin-bottom:10px;">' + p.title + '</h2>' +
        '<div class="product-rating" style="margin-bottom:14px;">★★★★★ <span>' + p.rating.toFixed(1) + ' / 5.0 (' + p.reviewsCount + ' verified reviews)</span></div>' +
        '<div style="display:flex;align-items:baseline;gap:12px;margin-bottom:18px;">' +
          '<span style="font-size:1.5rem;font-weight:700;color:var(--accent-terracotta);">' + formatMoney(p.priceUSD) + '</span>' +
          '<span style="font-size:1.05rem;color:var(--text-light);text-decoration:line-through;">' + formatMoney(p.compareUSD) + '</span>' +
        '</div>' +
        '<p style="color:var(--text-muted);font-size:0.94rem;margin-bottom:20px;">' + p.description + '</p>' +
        '<div class="option-group">' +
          '<label class="option-label">Select Specification / Size:</label>' +
          '<div class="option-pills">' + optionsHtml + '</div>' +
        '</div>' +
        '<div style="background:var(--bg-warm);padding:12px 16px;border-radius:4px;font-size:0.84rem;margin-bottom:20px;border-left:3px solid var(--accent-gold);">' +
          '<strong>Shipping & Delivery:</strong> Flat-rate Standard Shipping of <strong>' + formatMoney(FIXED_SHIPPING_USD) + '</strong> applies at checkout (consistent with our <a href="/source.html#shipping" style="text-decoration:underline;color:var(--accent-gold);">Shipping & Delivery Policy</a>). Guest checkout is supported without registration.' +
        '</div>' +
        '<div style="display:flex;gap:12px;margin-bottom:24px;">' +
          '<button type="button" class="btn-primary" style="flex:1;" onclick="window.GoldstreamStore.addToCart(\'' + p.id + '\', window._currentModalOption, 1);window.GoldstreamStore.closeProductModal();">Add to Cart — ' + formatMoney(p.priceUSD) + '</button>' +
          '<a href="/genres.html" class="btn-outline" onclick="window.GoldstreamStore.addToCart(\'' + p.id + '\', window._currentModalOption, 1);">Buy Now (Guest Checkout)</a>' +
        '</div>' +
        '<h4 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Technical Specifications</h4>' +
        '<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">' + specsHtml + '</table>' +
      '</div>' +
    '</div>';

    modal.classList.add('open');
  }

  function selectModalOption(btn, opt) {
    window._currentModalOption = opt;
    var siblings = btn.parentElement.querySelectorAll('.option-pill');
    siblings.forEach(function (el) { el.classList.remove('active'); });
    btn.classList.add('active');
  }

  function closeProductModal() {
    var modal = document.getElementById('product-detail-modal');
    if (modal) modal.classList.remove('open');
  }

  function openBlogModal(blogId) {
    var post = BLOG_POSTS.find(function (b) { return b.id === blogId; });
    if (!post) return;
    var modal = document.getElementById('product-detail-modal');
    var body = document.getElementById('product-modal-body');
    if (!modal || !body) return;
    body.innerHTML = '<article style="max-width:760px;margin:0 auto;">' +
      '<div style="font-size:0.8rem;color:var(--accent-gold);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Homely Inspiration • ' + post.date + '</div>' +
      '<h2 style="font-family:var(--font-serif);font-size:2.2rem;margin-bottom:18px;">' + post.title + '</h2>' +
      '<img src="' + post.image + '" alt="' + post.title + '" style="width:100%;max-height:380px;object-fit:cover;border-radius:6px;margin-bottom:24px;">' +
      '<div class="policy-content">' + post.content + '</div>' +
    '</article>';
    modal.classList.add('open');
  }

  function applyLanguageAndCurrency() {
    var lang = getLang();
    var curr = getCurrency();
    var t = I18N[lang] || I18N.en;

    document.querySelectorAll('.js-lang-select').forEach(function (sel) { sel.value = lang; });
    document.querySelectorAll('.js-currency-select').forEach(function (sel) { sel.value = curr; });

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    var newGrid = document.getElementById('home-new-arrivals-grid');
    if (newGrid) {
      var newItems = PRODUCTS.filter(function (p) { return p.section === 'new'; });
      newGrid.innerHTML = newItems.map(renderProductCard).join('');
    }

    var bestGrid = document.getElementById('home-best-sellers-grid');
    if (bestGrid) {
      var bestItems = PRODUCTS.filter(function (p) { return p.section === 'bestseller'; });
      bestGrid.innerHTML = bestItems.map(renderProductCard).join('');
    }

    var catalogGrid = document.getElementById('catalog-products-grid');
    if (catalogGrid) {
      renderCatalogPage();
    }

    document.querySelectorAll('[data-usd]').forEach(function (el) {
      var usd = parseFloat(el.getAttribute('data-usd'));
      if (!isNaN(usd)) {
        el.textContent = formatMoney(usd);
      }
    });

    renderCartUI();
    if (typeof window.renderCheckoutSummary === 'function') {
      window.renderCheckoutSummary();
    }
  }

  function renderCatalogPage(filterCat, filterStyle, searchQuery) {
    var catalogGrid = document.getElementById('catalog-products-grid');
    if (!catalogGrid) return;

    var params = new URLSearchParams(window.location.search);
    var cat = filterCat !== undefined ? filterCat : (params.get('cat') || 'all');
    var style = filterStyle !== undefined ? filterStyle : (params.get('style') || 'all');
    var q = searchQuery !== undefined ? searchQuery : (params.get('q') || '');

    var filtered = PRODUCTS.filter(function (p) {
      var matchCat = (cat === 'all' || cat === 'new') ? (cat === 'new' ? p.section === 'new' : true) : p.category === cat;
      var matchStyle = style === 'all' ? true : p.style === style;
      var matchQ = !q ? true : (p.title.toLowerCase().indexOf(q.toLowerCase()) !== -1 || p.description.toLowerCase().indexOf(q.toLowerCase()) !== -1);
      return matchCat && matchStyle && matchQ;
    });

    var countEl = document.getElementById('catalog-result-count');
    if (countEl) {
      countEl.textContent = 'Showing ' + filtered.length + ' curated homeware pieces (Flat-Rate Standard Shipping: ' + formatMoney(FIXED_SHIPPING_USD) + ')';
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;">' +
        '<h3>No matching items found</h3>' +
        '<p style="color:var(--text-muted);margin:10px 0 20px;">Try clearing your search filter or exploring all collections.</p>' +
        '<button type="button" class="btn-primary" onclick="window.GoldstreamStore.filterCatalog(\'all\', \'all\', \'\')">Reset Filters</button>' +
      '</div>';
      return;
    }

    catalogGrid.innerHTML = filtered.map(renderProductCard).join('');
  }

  function filterCatalog(cat, style, q) {
    document.querySelectorAll('.filter-pill').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });
    renderCatalogPage(cat, style || 'all', q || '');
  }

  function injectSharedDrawers() {
    if (document.getElementById('cart-drawer')) return;
    var wrapper = document.createElement('div');
    wrapper.innerHTML =
      '<div id="cart-backdrop" class="drawer-backdrop" onclick="window.GoldstreamStore.closeCartDrawer()"></div>' +
      '<aside id="cart-drawer" class="cart-drawer" aria-label="Shopping Cart">' +
        '<div class="drawer-header">' +
          '<h2 class="drawer-title" data-i18n="cart_title">Shopping Cart</h2>' +
          '<button type="button" class="drawer-close" onclick="window.GoldstreamStore.closeCartDrawer()">×</button>' +
        '</div>' +
        '<div id="cart-items-container" class="drawer-body"></div>' +
        '<div id="cart-drawer-footer" class="drawer-footer">' +
          '<div class="summary-row"><span data-i18n="cart_subtotal">Subtotal</span><span id="cart-subtotal-val">$0.00</span></div>' +
          '<div class="summary-row"><span data-i18n="cart_shipping">Standard Tracked Shipping (Flat Rate)</span><span id="cart-shipping-val">$15.00</span></div>' +
          '<div class="summary-row total"><span data-i18n="cart_total">Total</span><span id="cart-total-val">$15.00</span></div>' +
          '<p style="font-size:0.76rem;color:var(--text-muted);margin:8px 0 14px;">Guest checkout is enabled. Shipping fee matches our <a href="/source.html#shipping" style="text-decoration:underline;">Shipping & Delivery</a> policy ($15.00 USD flat rate).</p>' +
          '<a href="/genres.html" class="btn-primary" style="width:100%;" data-i18n="cart_checkout_btn">Proceed to Guest Checkout</a>' +
        '</div>' +
      '</aside>' +
      '<div id="product-detail-modal" class="modal-overlay" onclick="if(event.target===this)window.GoldstreamStore.closeProductModal()">' +
        '<div class="modal-card">' +
          '<button type="button" class="modal-close-btn" onclick="window.GoldstreamStore.closeProductModal()">×</button>' +
          '<div id="product-modal-body"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrapper);
  }

  function init() {
    var heroEl = document.getElementById('home-hero-banner');
    if (heroEl) {
      heroEl.style.backgroundImage = 'linear-gradient(rgba(25, 22, 19, 0.38), rgba(25, 22, 19, 0.45)), url("' + CDN_BASE + 'files/Image_1a_554c3c05-0481-4b29-a10a-93f947dacd0e.jpg?v=1792032553&width=1600")';
    }

    var spotImg = document.getElementById('spotlight-main-image');
    if (spotImg) {
      spotImg.src = CDN_BASE + 'products/101308-a.jpg?v=1624673619';
    }

    injectSharedDrawers();

    var colGrid = document.getElementById('home-collections-grid');
    if (colGrid) {
      colGrid.innerHTML = COLLECTIONS.map(function (c) {
        return '<a href="/categories.html?cat=' + c.id + '" class="collection-card">' +
          '<img src="' + c.image + '" alt="' + c.title + '" loading="lazy">' +
          '<div class="collection-card-overlay">' +
            '<h3 class="collection-card-title">' + c.title + '</h3>' +
            '<span class="collection-card-btn">View</span>' +
          '</div>' +
        '</a>';
      }).join('');
    }

    var styleGrid = document.getElementById('home-styles-grid');
    if (styleGrid) {
      styleGrid.innerHTML = STYLES.map(function (s) {
        return '<a href="/categories.html?style=' + s.id + '" class="style-card">' +
          '<img src="' + s.image + '" alt="' + s.title + '" loading="lazy">' +
          '<div class="style-card-content">' +
            '<h3 class="style-card-title">' + s.title + '</h3>' +
            '<span class="style-card-link">View</span>' +
          '</div>' +
        '</a>';
      }).join('');
    }

    var revGrid = document.getElementById('home-reviews-grid');
    if (revGrid) {
      revGrid.innerHTML = REVIEWS.map(function (r) {
        return '<div class="review-card">' +
          '<div class="review-stars">★★★★★</div>' +
          '<div class="review-title">' + r.title + '</div>' +
          '<p class="review-body">"' + r.body + '"</p>' +
          '<div class="review-meta">' +
            '<span class="review-author">' + r.author + ' (Verified Buyer)</span>' +
            '<span>' + r.product + '</span>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    var blogGrid = document.getElementById('home-blog-grid');
    if (blogGrid) {
      blogGrid.innerHTML = BLOG_POSTS.map(function (b) {
        return '<article class="blog-card">' +
          '<div class="blog-card-img"><img src="' + b.image + '" alt="' + b.title + '" loading="lazy"></div>' +
          '<div class="blog-card-body">' +
            '<div style="font-size:0.78rem;color:var(--text-light);margin-bottom:6px;">' + b.date + '</div>' +
            '<h3 class="blog-card-title">' + b.title + '</h3>' +
            '<p class="blog-card-excerpt">' + b.excerpt + '</p>' +
            '<button type="button" class="btn-outline" onclick="window.GoldstreamStore.openBlogModal(\'' + b.id + '\')">Read Article</button>' +
          '</div>' +
        '</article>';
      }).join('');
    }

    applyLanguageAndCurrency();
  }

  window.GoldstreamStore = {
    COMPANY_INFO: COMPANY_INFO,
    FIXED_SHIPPING_USD: FIXED_SHIPPING_USD,
    CURRENCIES: CURRENCIES,
    SANCTIONED_COUNTRIES: SANCTIONED_COUNTRIES,
    ALLOWED_CHECKOUT_COUNTRIES: ALLOWED_CHECKOUT_COUNTRIES,
    PRODUCTS: PRODUCTS,
    setLang: setLang,
    setCurrency: setCurrency,
    formatMoney: formatMoney,
    getCart: getCart,
    saveCart: saveCart,
    addToCart: addToCart,
    updateCartQty: updateCartQty,
    openCartDrawer: openCartDrawer,
    closeCartDrawer: closeCartDrawer,
    openProductModal: openProductModal,
    closeProductModal: closeProductModal,
    selectModalOption: selectModalOption,
    openBlogModal: openBlogModal,
    filterCatalog: filterCatalog,
    showToast: showToast
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

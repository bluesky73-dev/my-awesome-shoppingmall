export type Product = {
  id: string
  name: string
  nameEn: string
  category: '셔츠' | '니트' | '팬츠' | '스커트' | '아우터'
  price: number
  color: string
  description: string
  fabric: string
  sizes: string[]
  image: string
  alt: string
}

export const products: Product[] = [
  {
    id: 'essential-shirt-white',
    name: '에센셜 코튼 셔츠',
    nameEn: 'Essential Cotton Shirt',
    category: '셔츠',
    price: 89000,
    color: '화이트',
    description:
      '고밀도 코튼 포플린으로 만든 NOON ESSENTIAL의 시그니처 셔츠. 매일의 옷장에 꼭 필요한 기본 아이템으로, 단독으로도 이너로도 활용도가 높습니다.',
    fabric: '코튼 100%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/essential-shirt-white.svg',
    alt: '화이트 코튼 셔츠 일러스트',
  },
  {
    id: 'oxford-shirt-sky',
    name: '오버사이즈 옥스포드 셔츠',
    nameEn: 'Oversized Oxford Shirt',
    category: '셔츠',
    price: 98000,
    color: '스카이 블루',
    description:
      '워싱 옥스포드 원단의 여유로운 실루엣 셔츠. 어깨 라인을 부드럽게 떨어뜨려 편안하면서도 단정한 인상을 줍니다.',
    fabric: '코튼 100%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/oxford-shirt-sky.svg',
    alt: '스카이 블루 옥스포드 셔츠 일러스트',
  },
  {
    id: 'silk-blouse-ivory',
    name: '실크 블렌드 블라우스',
    nameEn: 'Silk Blend Blouse',
    category: '셔츠',
    price: 128000,
    color: '아이보리',
    description:
      '실크 혼방 소재의 은은한 광택이 돋보이는 블라우스. 출근 룩부터 저녁 약속까지 자연스럽게 어울리는 한 벌입니다.',
    fabric: '실크 30%, 레이온 70%',
    sizes: ['S', 'M'],
    image: '/images/products/silk-blouse-ivory.svg',
    alt: '아이보리 실크 블라우스 일러스트',
  },
  {
    id: 'cashmere-knit-camel',
    name: '캐시미어 크루넥 니트',
    nameEn: 'Cashmere Crewneck Knit',
    category: '니트',
    price: 158000,
    color: '카멜',
    description:
      '몽골산 캐시미어를 블렌드한 부드러운 크루넥 니트. 가볍지만 따뜻해 가을부터 초봄까지 긴 시즌 함께할 수 있습니다.',
    fabric: '캐시미어 15%, 울 85%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/cashmere-knit-camel.svg',
    alt: '카멜 캐시미어 니트 일러스트',
  },
  {
    id: 'merino-turtleneck-charcoal',
    name: '메리노 울 터틀넥',
    nameEn: 'Merino Wool Turtleneck',
    category: '니트',
    price: 118000,
    color: '차콜',
    description:
      '엑스트라파인 메리노 울로 편직한 슬림 터틀넥. 재킷 안에 받쳐 입기 좋은 두께감과 목을 부드럽게 감싸는 착용감이 특징입니다.',
    fabric: '메리노 울 100%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/merino-turtleneck-charcoal.svg',
    alt: '차콜 메리노 울 터틀넥 일러스트',
  },
  {
    id: 'cable-cardigan-oatmeal',
    name: '케이블 가디건',
    nameEn: 'Cable Knit Cardigan',
    category: '니트',
    price: 138000,
    color: '오트밀',
    description:
      '클래식한 케이블 조직의 여유로운 가디건. 천연 소뿔 단추와 리브 조직 밑단으로 오래 입을수록 멋이 살아납니다.',
    fabric: '울 80%, 나일론 20%',
    sizes: ['M', 'L'],
    image: '/images/products/cable-cardigan-oatmeal.svg',
    alt: '오트밀 케이블 가디건 일러스트',
  },
  {
    id: 'wide-linen-pants-beige',
    name: '와이드 린넨 팬츠',
    nameEn: 'Wide Linen Pants',
    category: '팬츠',
    price: 109000,
    color: '베이지',
    description:
      '린넨 혼방 원단의 와이드 팬츠. 허리 뒷밴딩으로 편안하면서도 앞모습은 단정해 일상과 출근을 오가는 팬츠입니다.',
    fabric: '린넨 55%, 코튼 45%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/wide-linen-pants-beige.svg',
    alt: '베이지 와이드 린넨 팬츠 일러스트',
  },
  {
    id: 'tapered-slacks-black',
    name: '테이퍼드 슬랙스',
    nameEn: 'Tapered Slacks',
    category: '팬츠',
    price: 99000,
    color: '블랙',
    description:
      '발목으로 갈수록 좁아지는 테이퍼드 핏 슬랙스. 구김이 적은 트윌 원단으로 하루 종일 깔끔한 실루엣을 유지합니다.',
    fabric: '폴리에스터 70%, 레이온 28%, 스판 2%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/tapered-slacks-black.svg',
    alt: '블랙 테이퍼드 슬랙스 일러스트',
  },
  {
    id: 'pleats-skirt-brown',
    name: '플리츠 미디 스커트',
    nameEn: 'Pleated Midi Skirt',
    category: '스커트',
    price: 119000,
    color: '브라운',
    description:
      '걸을 때마다 부드럽게 흔들리는 플리츠 스커트. 미디 기장과 안정감 있는 허리 밴드로 편안함과 우아함을 함께 담았습니다.',
    fabric: '폴리에스터 100%',
    sizes: ['S', 'M'],
    image: '/images/products/pleats-skirt-brown.svg',
    alt: '브라운 플리츠 스커트 일러스트',
  },
  {
    id: 'denim-skirt-indigo',
    name: 'A라인 데님 스커트',
    nameEn: 'A-line Denim Skirt',
    category: '스커트',
    price: 95000,
    color: '인디고',
    description:
      '탄탄한 논스트레치 데님의 A라인 스커트. 시간이 지날수록 자연스럽게 길들여지는 인디고 컬러가 매력적입니다.',
    fabric: '코튼 100%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/denim-skirt-indigo.svg',
    alt: '인디고 데님 스커트 일러스트',
  },
  {
    id: 'wool-jacket-gray',
    name: '울 블렌드 재킷',
    nameEn: 'Wool Blend Jacket',
    category: '아우터',
    price: 198000,
    color: '그레이',
    description:
      '울 혼방 트윌로 만든 세미 오버핏 재킷. 어깨 패드를 최소화해 딱딱하지 않으면서도 단정한 실루엣을 완성합니다.',
    fabric: '울 60%, 폴리에스터 40%',
    sizes: ['S', 'M', 'L'],
    image: '/images/products/wool-jacket-gray.svg',
    alt: '그레이 울 재킷 일러스트',
  },
  {
    id: 'trench-coat-khaki',
    name: '오버핏 트렌치 코트',
    nameEn: 'Oversized Trench Coat',
    category: '아우터',
    price: 228000,
    color: '카키',
    description:
      '고밀도 코튼 개버딘의 오버핏 트렌치 코트. 허리 벨트를 묶거나 풀어 두 가지 실루엣으로 연출할 수 있는 시즌 아우터입니다.',
    fabric: '코튼 100%',
    sizes: ['M', 'L'],
    image: '/images/products/trench-coat-khaki.svg',
    alt: '카키 트렌치 코트 일러스트',
  },
]

export function formatPrice(price: number) {
  return `₩${price.toLocaleString('ko-KR')}`
}

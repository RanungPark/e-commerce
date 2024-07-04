import { PartialOptional } from 'src/@types/utils';

interface HomeAboutInfo {
  title: string;
  info: string;
  isButton: boolean;
  caption: string;
}

type OptionalFromHomeAboutInfo = PartialOptional<
  HomeAboutInfo,
  'isButton' | 'caption'
>;

interface HomeAboutData {
  title: string;
  infos: OptionalFromHomeAboutInfo[];
}

export const homeAboutDatas: HomeAboutData[] = [
  {
    title: 'About us',
    infos: [
      {
        title: 'Kyiv LuxeBouquets',
        info: `저희는 독특한 꽃다발을 전문적으로 디자인하고 배달하는 현대적인 로컬 플로럴 스튜디오입니다. 저희 스튜디오에는 각 룩을 신중하게 선택하는 최고의 플로리스트가 있으며, 다양한 꽃을 재배하기 위해 농장과 직접 협력하므로 항상 신선한 꽃을 보유하고 있으며 플로리스트가 정교한 꽃다발로 수집합니다. 생화 컬렉션, 드라이 부케 컬렉션, 관엽 식물, 럭셔리 브랜드의 향기로운 캔들까지 완벽한 분위기를 연출할 수 있는 다양한 컬렉션을 갖추고 있습니다. 꽃, 식물, 선물을 당일 또는 익일 배송으로 누군가의 하루를 특별하게 만들어 보세요. 온라인으로 꽃을 주문하는 것이 그 어느 때보다 쉬워졌습니다.`,
        isButton: true,
        caption: 'our story',
      },
    ],
  },
  {
    title: 'Why choose us ?',
    infos: [
      {
        title: 'Stylish bouquets by florists',
        info: `플로리스트 스튜디오에서는 전문 플로리스트가 가장 신선하고 최고 품질의 재료만을 사용하여 가장 우아하고 세련된 부케를 제작합니다. 저희는 최신 플로럴 디자인 트렌드를 파악하고 있으며 감동을 선사하는 독특한 어레인지먼트를 제공합니다. 멋진 부케와 당일 배송 서비스로 여러분의 하루를 더욱 빛나게 해드리겠습니다.`,
      },
      {
        title: 'On-time delivery',
        info: `정시 꽃 배달 서비스로 한순간도 놓치지 마세요. 택배 기사가 박스 없이 직접 꽃다발을 배달하여 완벽한 상태로 도착할 수 있도록 합니다. 정성스러운 선물을 안정적으로 배달해 드립니다.`,
      },
      {
        title: 'Safe payment',
        info: `결제 정보를 보호하기 위해 업계 표준 보안 조치를 사용하므로 안심하고 주문할 수 있습니다. 거래가 안전하고 번거롭지 않으므로 안심하고 쇼핑할 수 있습니다.`,
      },
      {
        title: 'Subscription by your needs',
        info: `특정 요구사항에 맞춘 구독 서비스를 이용하면 아름다운 꽃다발을 정기적으로 집 앞까지 배달해 주는 편리함을 누릴 수 있습니다. 이 유연한 서비스는 바쁜 개인이나 항상 신선한 꽃을 구비하고 싶은 분들에게 적합합니다. 번거로움 없이 꽃을 받아볼 수 있는 이 서비스를 이용하면 시간과 비용을 절약할 수 있습니다.`,
      },
    ],
  },
];

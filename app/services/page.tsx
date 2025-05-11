import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const services = [
  {
    id: 'web-design',
    title: '互聯網產品設計',
    shortDesc: '我們設計和開發以用戶體驗為中心的互聯網產品，從企業網站到複雜的網絡應用和平台。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    image: '/product.png',
    features: [
      '以用戶為中心的產品規劃與設計',
      '響應式網站和網絡應用開發',
      '現代化前端開發 (React, Next.js, Vue.js)',
      '用戶體驗研究與優化',
      '產品原型設計和用戶測試',
      '數據分析與持續優化'
    ],
    longDesc: '我們的互聯網產品設計服務專注於打造具有卓越用戶體驗的數字產品。從市場研究和用戶需求分析開始，到視覺設計、互動原型和最終開發，我們的團隊運用最新技術和設計方法，確保每個產品不僅外觀精美，而且功能強大、易於使用。我們重視數據驅動的設計決策，通過持續測試和優化，幫助您的產品獲得市場競爭優勢。'
  },
  {
    id: 'software-dev',
    title: '軟件開發（含桌面端和移動應用）',
    shortDesc: '我們為各類平台開發高品質的軟件，包括桌面應用和移動應用，滿足您的多元化業務需求。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    image: '/dev.png',
    features: [
      '桌面應用程序開發 (Windows, macOS, Linux)',
      'iOS 和 Android 移動應用開發',
      '跨平台應用解決方案 (React Native, Flutter, Electron)',
      '用戶體驗和界面設計',
      'API 整合和後端開發',
      '軟件維護和技術支持'
    ],
    longDesc: '我們的軟件開發團隊專注於創建高質量、易用且功能強大的應用程序，涵蓋桌面端和移動端平台。無論是需要企業級桌面應用、原生的 iOS/Android 移動應用還是跨平台解決方案，我們都能夠根據您的業務需求提供量身定制的開發服務。我們重視用戶體驗和技術穩定性，確保應用程序不僅功能完善，而且使用流暢，能夠有效提升您的業務效率和用戶滿意度。'
  },
  {
    id: 'pixel-art',
    title: '像素藝術設計',
    shortDesc: '我們專注於像素風格的視覺元素創作，包括遊戲資源、圖標設計、品牌插圖和動畫。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    image: '/pixel.png',
    features: [
      '像素風格角色和場景設計',
      '遊戲資源和精靈圖創作',
      '像素動畫',
      '像素風格圖標和界面元素',
      '品牌像素藝術',
      '復古風格視覺設計'
    ],
    longDesc: '像素藝術是我們工作室的特色服務之一。我們的像素藝術家團隊擅長創建各種風格的像素化視覺作品，從復古的8位風格到現代的高清像素藝術。我們的像素藝術設計廣泛應用於遊戲開發、品牌識別、網站和應用設計中，為項目增添獨特的視覺風格和懷舊魅力。'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">服務項目</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            點陣網絡科技工作室提供全方位的數碼服務，幫助您實現業務目標和創意願景
          </p>
        </div>
      </div>
      
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white dark:bg-black' : 'bg-gray-50 dark:bg-gray-900'}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6 text-black dark:text-white">
                  {service.icon}
                  <h2 className="text-3xl font-bold ml-3">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {service.longDesc}
                </p>
                
                <h3 className="text-xl font-bold mb-4">服務特點</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black dark:text-white mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      <Footer />
    </main>
  );
} 
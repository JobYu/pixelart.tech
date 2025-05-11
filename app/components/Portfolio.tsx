import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'pixel-ecommerce',
    title: 'Pixel Shop',
    category: '電子商務',
    description: '具有獨特像素風格UI的購物平台',
    imageUrl: 'https://placehold.co/600x400/252525/FFFFFF/png?text=Pixel+Shop',
  },
  {
    id: 'bitcraft-app',
    title: 'BitCraft 行動應用',
    category: '移動應用',
    description: '區塊鏈技術整合的創新行動應用',
    imageUrl: 'https://placehold.co/600x400/252525/FFFFFF/png?text=BitCraft+App',
  },
  {
    id: 'netwave-website',
    title: 'NetWave 企業官網',
    category: '網頁設計',
    description: '具有波浪動畫效果的現代企業網站',
    imageUrl: 'https://placehold.co/600x400/252525/FFFFFF/png?text=NetWave+Website',
  },
  {
    id: 'pixelgame-assets',
    title: 'PixelQuest 遊戲資源',
    category: '像素藝術',
    description: '為獨立遊戲開發的像素風格角色和場景',
    imageUrl: 'https://placehold.co/600x400/252525/FFFFFF/png?text=PixelQuest+Assets',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">精選作品</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            探索我們的項目，感受點陣工作室的創意與技術實力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/portfolio/${project.id}`} 
              key={project.id}
              className="group block overflow-hidden rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-lg text-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            查看所有作品
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 
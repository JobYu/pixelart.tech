import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Mock blog data (would come from a CMS or API in a real application)
const blogPosts = [
  {
    id: 'pixel-art-in-modern-web-design',
    title: '像素藝術在現代網頁設計中的應用',
    date: '2023-08-15',
    author: '張明',
    category: '設計趨勢',
    excerpt: '像素藝術如何從遊戲世界回歸主流，並在現代網頁設計中煥發新的生命力...',
    image: 'https://placehold.co/800x450/252525/FFFFFF/png?text=Pixel+Art+in+Web+Design',
    readTime: '8 分鐘閱讀'
  },
  {
    id: 'nextjs-versus-traditional-frameworks',
    title: 'Next.js vs 傳統框架：為什麼越來越多開發者選擇 Next.js？',
    date: '2023-07-28',
    author: '李華',
    category: '前端開發',
    excerpt: '探討 Next.js 的優勢，以及它如何解決傳統前端框架面臨的常見挑戰...',
    image: 'https://placehold.co/800x450/252525/FFFFFF/png?text=Next.js+vs+Traditional',
    readTime: '12 分鐘閱讀'
  },
  {
    id: 'ux-design-principles-2023',
    title: '2023年UX設計原則：以用戶為中心的設計策略',
    date: '2023-06-10',
    author: '王芳',
    category: 'UX設計',
    excerpt: '回顧2023年塑造用戶體驗設計的關鍵原則，以及如何將它們應用於您的項目...',
    image: 'https://placehold.co/800x450/252525/FFFFFF/png?text=UX+Design+Principles',
    readTime: '10 分鐘閱讀'
  },
  {
    id: 'blockchain-app-development-guide',
    title: '區塊鏈應用開發完全指南：從概念到部署',
    date: '2023-05-22',
    author: '陳傑',
    category: '區塊鏈',
    excerpt: '詳細探討區塊鏈應用開發的完整流程，包括技術選擇、架構設計和部署策略...',
    image: 'https://placehold.co/800x450/252525/FFFFFF/png?text=Blockchain+App+Development',
    readTime: '15 分鐘閱讀'
  },
  {
    id: 'creating-pixel-art-for-games',
    title: '遊戲像素藝術創作：從草圖到動畫',
    date: '2023-04-08',
    author: '林小玲',
    category: '像素藝術',
    excerpt: '深入了解遊戲像素藝術的創作過程，從角色設計到動畫製作的完整工作流程...',
    image: 'https://placehold.co/800x450/252525/FFFFFF/png?text=Pixel+Art+for+Games',
    readTime: '9 分鐘閱讀'
  }
];

// Categories for filtering
const categories = [
  '全部',
  '設計趨勢',
  '前端開發',
  'UX設計',
  '區塊鏈',
  '像素藝術'
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">部落格</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            探索我們的觀點、洞見和最新的行業趨勢
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          {/* Featured Post */}
          <div className="mb-16">
            <Link 
              href={`/blog/${blogPosts[0].id}`}
              className="group block overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-black text-white dark:bg-white dark:text-black rounded-full">
                      精選文章
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">{blogPosts[0].author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Categories Filter - Note: This would normally have client-side functionality */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                  ${category === '全部' 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id}
                className="group overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination - Would be dynamic in a real app */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity">
                1
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">訂閱我們的電子報</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            定期獲取最新的科技趨勢、設計靈感和實用技巧
          </p>
          <div className="max-w-lg mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="您的電子郵件地址"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                訂閱
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              我們尊重您的隱私，您可以隨時取消訂閱
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
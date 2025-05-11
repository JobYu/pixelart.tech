import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">點陣網絡科技</span>
              <span className="block">專業數碼體驗</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              我們專注於為客戶打造前衛的數字產品和服務，從網頁設計到應用開發，創造獨特體驗。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                查看作品集
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-black dark:border-white text-black dark:text-white rounded-lg text-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                聯絡我們
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-square w-full max-w-lg mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg relative overflow-hidden">
              {/* 像素化的圖案，呈現工作室的設計風格 */}
              <div className="absolute inset-0 grid grid-cols-16 grid-rows-16">
                {Array.from({ length: 256 }).map((_, i) => (
                  <div
                    key={i}
                    className="opacity-30"
                    style={{
                      backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
                      opacity: Math.random() * 0.5 + 0.1
                    }}
                  ></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-black dark:text-white opacity-80">PIXEL ART</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
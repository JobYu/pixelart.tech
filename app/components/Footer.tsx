import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">點陣網絡科技工作室</h3>
            <p className="text-gray-600 dark:text-gray-400">
              專業數碼科技服務，打造創新數字體驗
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">關於我們</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">服務項目</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">作品集</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡資訊</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-400 mb-2">Email：info@pixelart.tech</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 點陣網絡科技工作室. 保留所有權利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
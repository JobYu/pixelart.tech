'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// This data would normally come from a CMS or API
const projects = [
  {
    id: '32comic',
    title: '教你画像素画公众号官网',
    category: '網頁設計',
    description: '像素画教程与欣赏网站，提供全面的像素艺术学习资源和优秀作品展示。该网站为像素艺术爱好者提供系统化的学习路径和丰富的参考素材。',
    imageUrl: '/32comic.png',
    tags: ['網頁設計', '像素藝術', '教程网站'],
    externalLink: 'https://32comic.com'
  },
  {
    id: 'bilibili-pixelart',
    title: '像素熊像素画视频平台',
    category: '像素藝術',
    description: '提供像素画相关的免费教学视频和付费课程，包含从入门到精通的系统化学习内容。平台涵盖像素艺术的各个方面，从基础技巧到高级创作技法。',
    imageUrl: '/bilibili.png',
    tags: ['像素藝術', '视频教程', '在线学习'],
    externalLink: 'https://space.bilibili.com/11484264'
  },
  {
    id: 'image2pixel-steam',
    title: 'Image2pixel 像素画生成器',
    category: '軟件開發',
    description: '一款专业的图片转像素画工具，支持Windows和Mac系统。该软件可将普通图片转换为精美的像素风格作品，适用于游戏开发者、艺术家或内容创作者，轻松创建理想的像素艺术。',
    imageUrl: '/steam.png',
    tags: ['軟件開發', '像素藝術', '图像处理'],
    externalLink: 'https://store.steampowered.com/app/3475120'
  },
  {
    id: 'image2pixel-ios',
    title: 'Image2pixel iOS版',
    category: '軟件開發',
    description: 'Image2pixel 应用的iOS版本，轻松将您的图片转换为像素风格艺术作品。提供多种参数调整，满足个性化创作需求。',
    imageUrl: '/Image2pixel-ios.jpeg',
    tags: ['iOS應用', '像素藝術', '图像处理'],
    externalLink: null // Link removed, will fall back to internal portfolio page
  },
  {
    id: 'pix32-font',
    title: 'Pix32 像素字体',
    category: '像素藝術',
    description: '一款精心设计的像素字体，支持英文、简体中文和繁体中文。字体大小为12px(11px + 1px间距)，收录超过13000个汉字，适用于像素风格游戏、网站和应用程序的文字显示。',
    imageUrl: '/TCSample.png',
    tags: ['像素藝術', '字体设计', '中文字体'],
    externalLink: 'https://github.com/JobYu/Pix32'
  },
  {
    id: 'voxel-art-gallery',
    title: 'Voxel Art 体素模型展示',
    category: '網頁應用',
    description: '基于Three.js的优雅体素模型展示应用，支持MagicaVoxel .vox格式作品展示和体素积木图纸生成。提供分层浏览、网格显示和3D导航等功能，为体素艺术作品提供沉浸式展示体验。',
    imageUrl: '/voxel.png',
    tags: ['網頁應用', '體素藝術', '3D展示'],
    externalLink: 'https://github.com/JobYu/VoxelArt'
  }
];

// Define categories for filtering
const categories = [
  '全部',
  '網頁設計',
  '軟件開發',
  '像素藝術'
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === '全部'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">作品集</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            探索我們的精選項目，了解點陣網絡科技工作室的創意與專業能力
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${category === selectedCategory 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                href={project.externalLink || `/portfolio/${project.id}`}
                key={project.id}
                className="group block overflow-hidden rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                target={project.externalLink ? "_blank" : undefined}
                rel={project.externalLink ? "noopener noreferrer" : undefined}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                        {project.externalLink ? '訪問網站' : '查看詳情'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Show message when no projects match the filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 dark:text-gray-400">暂无符合此分类的项目</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

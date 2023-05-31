import BLOG from '@/blog.config'
import BlogPostListPage from './components/BlogPostListPage'
import BlogPostListScroll from './components/BlogPostListScroll'
import Header from './components/Header'
import CONFIG_MATERY from './config_matery'
import LayoutBase from './LayoutBase'
import React from 'react'
import Link from 'next/link'
import Announcement from './components/Announcement'
// import HeaderArticle from './components/HeaderArticle'
import BlogArticle from './components/BLogArticle'

// export const LayoutIndex = (props) => {
//   return (
//     <LayoutBase {...props} containerSlot={ <Announcement {...props}/>} headerSlot={CONFIG_MATERY.HOME_BANNER_ENABLE && <Header {...props} />}>
//       {/* 注释掉渲染博客文章的代码 */}
//       {/* {BLOG.POST_LIST_STYLE === 'page' ? <BlogPostListPage {...props} /> : <BlogPostListScroll {...props} />} */}
//     </LayoutBase>
//   )
// }

export const LayoutBlog = (props) => {
  const { category, categoryOptions } = props
  return <LayoutBase {...props} headerSlot={<BlogArticle {...props} />}>
      <div id='inner-wrapper' className='w-full'>

          <div className="drop-shadow-xl -mt-32 rounded-md mx-3 px-5 lg:border lg:rounded-xl lg:px-2 lg:py-4 bg-white dark:bg-hexo-black-gray  dark:border-black">

            <div className='flex justify-center flex-wrap'>
                    {categoryOptions.map(e => {
                      const selected = e.name === category
                      return (
                          <Link key={e.name} href={`/category/${e.name}`} passHref legacyBehavior>
                              <div className='duration-300 text-md whitespace-nowrap dark:hover:text-white px-5 cursor-pointer py-2 hover:text-indigo-400' >
                                  <i className={`mr-4 fas  ${selected ? 'fa-folder-open' : 'fa-folder'}`}/>
                                  {e.name}({e.count})
                              </div>
                          </Link>
                      )})}
              </div>
          </div>
      {BLOG.POST_LIST_STYLE === 'page' ? <BlogPostListPage {...props} /> : <BlogPostListScroll {...props} />}
      </div>
  </LayoutBase>
}
import Image from 'next/image'

export default function BlogArticle({ post, siteInfo }) {
  const headerImage = post?.page_cover ? post?.page_cover : siteInfo?.pageCover
  const title = post?.title
  return (
        <div
            data-aos="fade-down"
            data-aos-duration="300"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            id='header' className="flex h-96 justify-center align-middle items-center w-full relative duration-200 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
                src={headerImage}
                alt={title}
                className="opacity-50 dark:opacity-40 h-full w-full object-cover"
            /> */}
             <Image alt={title} src={headerImage} fill
                    style={{ objectFit: 'cover' }}
                    className='opacity-50'
                    placeholder='blur'
                    blurDataURL='/bg_image.jpg' />
            {/* 
             */}
             <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3l md:text-4xl text-white shadow-text'>
                <p>This is my BLog page.</p>
                <p>I'll share my thoughts from time to time : )</p>
             </div>

        </div>
  )
}

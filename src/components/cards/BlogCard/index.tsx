import { BlogCardPropsInterface } from './types';
import { useRouter } from 'next/router';

export function BlogCard(props: BlogCardPropsInterface) {
  const router = useRouter();
  const { id } = router.query;
  const pageId = id as string;

  const renderListBlogCard = props?.data?.results?.map((blogItem, idx) => {
    return (
      <div className='mb-8' key={idx}>
        <div className="mb-4">
          <span className="text-3xl font-medium hover:cursor-pointer" onClick={() => props.onClick(blogItem.id)}>
            {blogItem.properties.article?.title[0]?.text?.content ?? ''}
          </span>
        </div>

        <div className="mb-2">
          <span className='text-sm text-gray-700'>
            Ngày tạo: {blogItem.properties?.time?.created_time ?? 0}
          </span>
        </div> 

        <div>
          <span>{blogItem?.properties?.description?.rich_text[0]?.text?.content ?? ''}</span>
        </div>

        <div>
          <span className='text-sm text-gray-700'>
            {blogItem?.properties?.tags?.multi_select[0]?.name ?? ''}
          </span>
        </div> 
    </div>
    )
  })
  return (
    <>{renderListBlogCard}</>
  );
}

export default BlogCard;

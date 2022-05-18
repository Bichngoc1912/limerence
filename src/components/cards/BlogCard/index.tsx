import { BlogCardPropsInterface } from './types';
import dayjs from 'dayjs';

export function BlogCard(props: BlogCardPropsInterface) {
  const renderListBlogCard = props?.data?.results?.map((blogItem, idx) => {
    const createDate = dayjs(blogItem.properties?.time?.created_time ?? 0).unix();
    return (
      <div className="mb-8 px-2" key={idx}>
        <div className="mb-4">
          <span
            className="text-3xl text-slate-700 font-medium hover:cursor-pointer"
            onClick={() => props.onClick(blogItem.id)}
          >
            {blogItem?.properties?.title?.rich_text[0].text.content ?? ''}
          </span>
        </div>

        <div className="mb-2">
          <span className="text-sm text-gray-700">
            Ngày tạo: {dayjs(createDate * 1000).format('DD/MM/YYYY')}
          </span>
        </div>

        <div>
          <span>
            {blogItem?.properties?.description?.rich_text[0]?.text?.content ?? ''}
          </span>
        </div>

        <div>
          {blogItem?.properties?.tags?.multi_select?.map((item) => {
            return (
              <span key={item.id} style={{ color: item.color }} className="text-sm">
                {item.name ?? ''} &nbsp;
              </span>
            );
          })}
        </div>
      </div>
    );
  });
  return <div>{renderListBlogCard}</div>;
}

export default BlogCard;

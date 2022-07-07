import { BlogCardPropsInterface } from './types';
import dayjs from 'dayjs';

export function BlogCard(props: BlogCardPropsInterface) {
  const renderListBlogCard = props?.data?.results?.map((blogItem, idx) => {
    const createDate = dayjs(blogItem.properties?.time?.created_time ?? 0).unix();
    return (
      <div className="tw-mb-8 tw-px-2" key={idx}>
        <div className="tw-mb-4">
          <span
            className="tw-text-3xl tw-text-slate-700 tw-font-medium hover:tw-cursor-pointer"
            onClick={() => props.onClick(blogItem.id)}
          >
            {blogItem?.properties?.title?.rich_text[0].text.content ?? ''}
          </span>
        </div>

        <div className="tw-mb-2">
          <span className="tw-text-sm tw-text-gray-700">
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
              <span key={item.id} style={{ color: item.color }} className="tw-text-sm">
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

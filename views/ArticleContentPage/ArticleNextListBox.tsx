import { List } from '@arco-design/web-react';
import { HotListBoxData } from '@/models/data';

export const ArticleNextListBox = (props: { data: HotListBoxData }) => {
  return (
    <div className="bg-slate-50 rounded-sm px-2 border-t-7 border-red-800 my-5 sticky top-20">
      <List
        bordered={false}
        dataSource={props.data}
        render={(item, index) => (
          <List.Item key={index}>
            <a href={item.href} rel="noreferrer" target={'_blank'}>
              <h3 className=" text-lg hover:text-red-700">{item.title}</h3>
              {item.subtitle && <h4 className="text-sm my-1 text-gray-600">{item.subtitle}</h4>}
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};

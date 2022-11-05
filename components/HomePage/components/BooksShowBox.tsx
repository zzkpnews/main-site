import { Collapse } from '@arco-design/web-react';
import { BooksShowBoxData } from '../../../models/data';
const CollapseItem = Collapse.Item;

export const BooksShowBox = (props: { data: BooksShowBoxData }) => {
  if (props.data.length < 1) return null;
  return (
    <div className="bg-slate-50 rounded-sm px-2 pb-3 my-5 border-t-7 border-red-800">
      <div className="flex justify-between">
        <h3 className="text-red-700 text-xl font-bold px-4 my-2">{'书刊推荐'}</h3>
        <a
          className="hover:text-red-700 text-lg px-4 my-auto cursor-pointer"
          href="/book"
          target="_blank"
          rel="noreferrer"
        >
          {'更多'}
        </a>
      </div>
      <Collapse accordion>
        {props.data.map((item, index) => (
          <CollapseItem
            key={`books-show-box-${index}`}
            className="px-0"
            header={item.title}
            name={`books-item-${index}`}
          >
            <a href={item.href} target="_blank" rel="noreferrer">
              <div className="flex">
                <div className="basis-1/2 mx-1 my-auto">
                  <img className="mx-auto my-auto rounded-md object-cover h-56 w-40" src={item.img_url} alt="" />
                </div>
                <div className="basis-1/2 mx-1 my-auto">
                  <p className="text-sm">{item.citation}</p>
                </div>
              </div>
            </a>
          </CollapseItem>
        ))}
      </Collapse>
    </div>
  );
};

import classNames from 'classnames';
import { APIResponse } from '../../api';
import { BroadCastBar } from './BroadCastBar';
import { ColumnItem } from '../../models/data';
import { Dropdown, Menu } from '@arco-design/web-react';
import { print_api_error } from '../../utils/error';

const ColumnsNavigator = (props: { active: number; column_items_response: APIResponse<ColumnItem[]> }) => {

  if (props.column_items_response.code !== 0) {
    print_api_error('column-items',props.column_items_response)
    return (
      <nav className="tw-px-0 tw-py-1 tw-border-b-2 tw-border-t-2 tw-flex tw-flex-col tw-justify-center tw-align-middle tw-select-none">
        <a
          className="tw-rounded-md tw-my-2 tw-px-4 tw-py-2 tw-font-bold tw-text-base tw-select-none tw-bg-red-700 tw-text-white"
          href="/"
        >
          {'首页'}
        </a>
      </nav>
    );
  }

  const visible_columns: ColumnItem[] | undefined = props.column_items_response.data?.slice(0, 12);
  const combined_columns: ColumnItem[] | undefined = props.column_items_response.data?.slice(12);

  return (
    <nav className="tw-px-0 tw-py-1 tw-border-b-2 tw-border-t-2 tw-flex tw-flex-col tw-justify-center tw-align-middle tw-select-none">
      <div className="tw-my-auto tw-flex tw-flex-wrap tw-justify-center">
        <a
          className={classNames(
            'tw-rounded-md tw-my-2 tw-px-4 tw-py-2 tw-font-bold tw-text-base tw-select-none',
            { 'hover:tw-text-red-700': props.active !== 0 },
            { 'tw-bg-red-700': props.active === 0 },
            { 'tw-text-white': props.active === 0 }
          )}
          href={'/'}
        >
          {'首页'}
        </a>
        {visible_columns?.map((item, index) => (
          <a
            className={classNames(
              'tw-rounded-md tw-my-1 tw-px-4 tw-py-2 tw-font-bold tw-text-base tw-select-none',
              { 'hover:tw-text-red-700': props.active !== index + 1 },
              { 'tw-bg-red-700': props.active === index + 1 },
              { 'tw-text-white': props.active === index + 1 }
            )}
            key={`nav-col-${index}`}
            href={`/columns/${item.column_id}`}
          >
            {item.title}
          </a>
        ))}
        {combined_columns && combined_columns.length > 0 && (
          <Dropdown
            position="bl"
            droplist={
              <Menu>
                {combined_columns?.map((item, index) => (
                  <Menu.Item className={'tw-font-bold active:tw-text-red-700'} key={`nav-col-${index}`}>
                    <a className="tw-px-2 tw-py-3" href={`/columns/${item.column_id}`} target={'_blank'}>
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <div className={'tw-rounded-md tw-my-2 tw-px-4 tw-py-2 tw-font-bold tw-cursor-pointer tw-text-red-700'}>
              {'更多'}
            </div>
          </Dropdown>
        )}
      </div>
      <BroadCastBar open={false} />
    </nav>
  );
};

export { ColumnsNavigator };

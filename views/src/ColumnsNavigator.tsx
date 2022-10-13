import classNames from 'classnames';
import { BroadCastBar } from './BroadCastBar';
import { Dropdown, Menu } from '@arco-design/web-react';
import { ColumnItem } from '../../models';

const ColumnsNavigator = (props: { Active: number; Columns: ColumnItem[] }): JSX.Element => {
  const visible_columns: ColumnItem[] = props.Columns.slice(0, 12);
  const combined_columns: ColumnItem[] = props.Columns.slice(12);
  return (
    <nav className="tw-px-0 tw-py-1 tw-border-b-2 tw-border-t-2 tw-flex tw-flex-col tw-justify-center tw-align-middle ">
      <div className="tw-my-auto tw-flex tw-flex-wrap tw-justify-center">
        <a
          className={classNames(
            'tw-rounded-md',
            'tw-my-auto',
            'tw-my-2',
            'tw-px-4',
            'tw-py-2',
            'tw-font-bold',
            'tw-text-base',
            'tw-select-none',
            { 'hover:tw-text-red-700': props.Active !== 0 },
            { 'tw-bg-red-700': props.Active === 0 },
            { 'tw-text-white': props.Active === 0 }
          )}
          href={'/'}
        >
          {'首页'}
        </a>
        {visible_columns.map((item, index) => (
          <a
            className={classNames(
              'tw-rounded-md',
              'tw-my-auto',
              'tw-my-1',
              'tw-px-4',
              'tw-py-2',
              'tw-font-bold',
              'tw-text-base',
              'tw-select-none',
              { 'hover:tw-text-red-700': props.Active !== index + 1 },
              { 'tw-bg-red-700': props.Active === index + 1 },
              { 'tw-text-white': props.Active === index + 1 }
            )}
            key={`nav-col-${index}`}
            href={`/columns/${item.column_id}`}
          >
            {item.title}
          </a>
        ))}
        {props.Columns.length >= 12 && (
          <Dropdown
            position="bl"
            droplist={
              <Menu>
                {combined_columns.map((item, index) => (
                  <Menu.Item className={'tw-font-bold active:tw-text-red-700'} key={`nav-col-${index}`}>
                    <a className="tw-px-2 tw-py-3" href={`/columns/${item.column_id}`} target={'_blank'}>
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <div
              className={classNames(
                'tw-rounded-md',
                'tw-my-auto',
                'tw-my-2',
                'tw-px-4',
                'tw-py-2',
                'tw-font-bold',
                'tw-text-base',
                'tw-select-none',
                'tw-cursor-pointer',
                'tw-text-red-700'
              )}
            >
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

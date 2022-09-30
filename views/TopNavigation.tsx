import classNames from 'classnames';
import { Dropdown, Menu } from '@arco-design/web-react';
import { NavColumns } from '../types/Columns';
import { BroadCastBar } from './BroadCastBar';

export default function TopNavigation(props: { selectedIndex: number; navItems: NavColumns[] }): JSX.Element {
  return (
    <nav className="tw-px-0  tw-border-b-2 tw-border-t-2 tw-flex tw-flex-col tw-justify-center tw-align-middle ">
      <div className="tw-my-auto tw-flex tw-flex-wrap tw-justify-center ">
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
            { 'hover:tw-text-red-700': props.selectedIndex !== 0 },
            { 'tw-bg-red-700': props.selectedIndex === 0 },
            { 'tw-text-white': props.selectedIndex === 0 }
          )}
          href={'/'}
        >
          {'首页'}
        </a>
        {((navItems: NavColumns[]) => {
          const navItemDoms = [];
          for (let index = 0; index < (navItems.length > 12 ? 12 : navItems.length); index++) {
            navItemDoms.push(
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
                  { 'hover:tw-text-red-700': props.selectedIndex !== index + 1 },
                  { 'tw-bg-red-700': props.selectedIndex === index + 1 },
                  { 'tw-text-white': props.selectedIndex === index + 1 }
                )}
                key={`nav-col-${index}`}
                href={`/columns/${navItems[index].id}`}
              >
                {navItems[index].title}
              </a>
            );
          }
          return navItemDoms;
        })(props.navItems)}
        {props.navItems.length >= 12 && (
          <Dropdown
            position="bl"
            droplist={((navItems) => {
              const dropItemDoms = [];
              for (let index = 12; index < navItems.length; index++) {
                dropItemDoms.push(
                  <Menu.Item className={'tw-font-bold active:tw-text-red-700'} key={`nav-col-${index}`}>
                    <a className="tw-px-2 tw-py-3" href={`/columns/${navItems[index].id}`} target={'_blank'}>
                      {navItems[index].title}
                    </a>
                  </Menu.Item>
                );
              }
              return <Menu>{dropItemDoms}</Menu>;
            })(props.navItems)}
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
}
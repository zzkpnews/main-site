import { Button, Collapse, Divider, Drawer, Dropdown, Input, List, Menu } from '@arco-design/web-react';
import { useResponsive } from 'ahooks';
import { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
const CollapseItem = Collapse.Item;
const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);
export const Navigation = () => {
  const responsive = useResponsive();
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Drawer
        width={'100%'}
        title={<span>中原科技网</span>}
        visible={visible && !responsive['lg']}
        placement="left"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        <div className="flex">
          <Collapse defaultActiveKey={['1', '2']}>
            <CollapseItem className="px-0" header="网站" name="1">
              <List
                bordered={false}
                size="small"
                dataSource={['首页', '专栏', '话题', '书刊', '创作者', '']}
                render={(item, index) => <List.Item key={index}>{item}</List.Item>}
              />
            </CollapseItem>

            <CollapseItem header="Introduce" name="2" disabled>
              core product, , is a content platform in China and around the world. Toutiao started out as a news
              recommendation engine and gradually evolved into a platform delivering content in various formats, such as
              texts, images, question-and-answer posts, microblogs, and videos.
            </CollapseItem>

            <CollapseItem header="The Underlying AI Technology" name="3">
              In 2016, AI Lab and Peking University co-developed Xiaomingbot (张小明), an artificial intelligence bot
              that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de
              Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.
            </CollapseItem>
          </Collapse>
        </div>
      </Drawer>
      <nav className="m-0 border-b py-3 flex justify-between px-5 xl:px-40 lg:px-35 md:px-25 sm:px-20 bg-white">
        <div className="flex">
          <img src="/logo.png" className="mr-7 h-9" alt="zzkpnews-logo" />
          <div className="lg:flex my-auto hidden">
            <a className="hover:text-red-700 cursor-pointer text-base mx-5" href="/">
              {'首页'}
            </a>
            <Dropdown trigger={'hover'} droplist={dropList} position="bottom">
              <span className="hover:text-red-700 cursor-pointer text-base mx-5">{'观察'}</span>
            </Dropdown>
            <Dropdown trigger={'hover'} droplist={dropList} position="bottom">
              <span className="hover:text-red-700 cursor-pointer text-base mx-5">{'评论'}</span>
            </Dropdown>
            <Dropdown trigger={'hover'} droplist={dropList} position="bottom">
              <span className="hover:text-red-700 cursor-pointer text-base mx-5">{'科普'}</span>
            </Dropdown>
            <Dropdown trigger={'hover'} droplist={dropList} position="bottom">
              <span className="hover:text-red-700 cursor-pointer text-base mx-5">{'河南看点'}</span>
            </Dropdown>
            <Dropdown trigger={'hover'} droplist={dropList} position="bottom">
              <span className="hover:text-red-700 cursor-pointer text-base mx-5">{'教育专题'}</span>
            </Dropdown>
            <Dropdown trigger={'hover'} droplist={dropList} position="bottom">
              <span className="hover:text-red-700 cursor-pointer text-base mx-5">{'疫情报道'}</span>
            </Dropdown>
            <a className="hover:text-red-700 cursor-pointer text-base mx-5" href="/">
              {'更多'}
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <Button
            className="text-center p-5"
            size="large"
            type="secondary"
            shape="circle"
            onClick={() => {
              setVisible(true);
            }}
          >
            <BsMenuButtonWideFill size="2em" className="mx-auto" />
          </Button>
        </div>
      </nav>
    </>
  );
};

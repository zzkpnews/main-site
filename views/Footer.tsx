import { FaGithub, FaWeixin } from 'react-icons/fa';
import { FriendsListItem } from '../models/Friends';
import { WebsiteInfo } from '../models/WebsiteInfo';

const Footer = (props: { friendsList: FriendsListItem[]; websiteInfo: WebsiteInfo }): JSX.Element => {
  return (
    <footer className=" tw-bg-gray-800 tw-text-white tw-py-10 tw-px-10 md:tw-px-20 tw-select-none">
      <div className=" md:tw-flex">
        <div className="tw-flex tw-flex-col tw-justify-center">
          <div className=" tw-my-auto">
            <div className="tw-flex tw-justify-start tw-flex-wrap tw-my-3">
              <span className="tw-text-lg tw-font-bold tw-mr-5">{'加入我们'}</span>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3" href="/job">
                {'人才招聘'}
              </a>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3" href="/contact">
                <div>
                  <FaWeixin size={'1.7em'} className="tw-inline" />
                  <div className="tw-my-auto tw-inline tw-mx-1">{'联系我们'}</div>
                </div>
              </a>
            </div>
            <div className="tw-flex tw-justify-start tw-flex-wrap tw-my-3">
              <span className="tw-text-lg tw-font-bold tw-mr-5">{'开放平台'}</span>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3" href="/rss">
                {'RSS订阅源'}
              </a>
              <a
                className="tw-my-1 tw-block tw-align-middle hover:tw-text-gray-200 tw-mr-3"
                href="https://github.com/zzkpnews/"
                target={'_blank'}
                rel="noreferrer"
              >
                <div>
                  <FaGithub size={'1.5em'} className="tw-inline " />
                  <div className="tw-my-auto tw-inline tw-mx-1">{'开发者社区'}</div>
                </div>
              </a>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3" href="/job">
                {'爬虫API约定'}
              </a>
            </div>
            <div className="tw-flex tw-justify-start tw-flex-wrap tw-my-3">
              <span className="tw-text-lg tw-font-bold tw-mr-5">{'商业合作'}</span>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3">{'关于我们'}</a>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3">{'会员服务'}</a>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3">{'成功案例'}</a>
              <a className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3">{'商业灵感'}</a>
            </div>
            <div className="tw-flex tw-justify-start tw-flex-wrap tw-my-3">
              <span className="tw-text-lg tw-font-bold tw-mr-5">{'合作伙伴'}</span>
              {props.friendsList.map((item, index) => {
                return (
                  <a
                    className="tw-my-1 hover:tw-text-gray-300 tw-cursor-pointer tw-mr-3"
                    title={item.describe}
                    key={`friendsList-${index}`}
                    href={item.url}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="tw-my-3 tw-flex tw-flex-col md:tw-flex-row tw-justify-center">
        <span className="tw-mr-5 tw-my-1 tw-text-gray-300">{`版权所有 © 2015-${new Date().getFullYear()} ${
          props.websiteInfo.owner
        }`}</span>
        <span className="tw-mr-5 tw-my-1 tw-text-gray-300">{props.websiteInfo.icp}</span>
        <span className="tw-mr-5 tw-my-1 tw-text-gray-300">{`Powered By ${props.websiteInfo.poweredBy}`}</span>
        <a className="tw-mr-5 tw-my-1 tw-text-gray-300 hover:tw-text-white tw-cursor-pointer">{'免责声明'}</a>
      </div>
    </footer>
  );
};

export default Footer;

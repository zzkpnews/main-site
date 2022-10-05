import { Button } from '@arco-design/web-react';
import { useState } from 'react';
import { HeadBannerNews } from '../../models';


const HeadBanner = (props: HeadBannerNews): JSX.Element | null => {
  const [isClosed, setClosed] = useState<boolean>(false);
  return props.open && props.imgsrc && !isClosed ? (
    <a href={props.href} className="tw-select-none" target="_blank" rel="noreferrer">
      <div
        className="tw-bg-gradient-to-b to-transparent tw-w-screen tw-h-96"
        style={{
          backgroundImage: `linear-gradient(to top, rgb(249,250,251), transparent), url("${props.imgsrc}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="tw-flex tw-justify-end">
          <Button
            type="dashed"
            className={'tw-font-bold tw-mx-5 tw-my-3'}
            onClick={(e) => {
              e.preventDefault();
              setClosed(true);
            }}
          >
            {'关闭'}
          </Button>
        </div>
      </div>
    </a>
  ) : null;
};

HeadBanner.defaultProps = {
  open: false,
};

export { HeadBanner };

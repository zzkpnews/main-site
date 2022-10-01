import { Alert } from '@arco-design/web-react';

const BroadCastBar = (props: { open: boolean; title?: string }): JSX.Element | null => {
  return props.open ? (
    <Alert
      closable
      type="warning"
      showIcon={false}
      content={
        <div className=" tw-text-center">
          <b>{'公告通知：'}</b>
          {props.title}
        </div>
      }
    />
  ) : null;
};

export default BroadCastBar;

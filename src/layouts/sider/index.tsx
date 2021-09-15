import { FC } from 'react';

interface ISider {
  collapsed: boolean;
  toggleSider: any;
}

const Sider: FC<ISider> = ({ toggleSider, collapsed }: ISider) => {
  return <>Sider</>;
};

export default Sider;

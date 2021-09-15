import { FC } from 'react';

interface INavHeader {
  collapsed: boolean;
  toggleSider: any;
};

const NavHeader: FC<INavHeader> = ({ toggleSider, collapsed }: INavHeader) => {
  return <>NavHeader</>;
};

export default NavHeader;

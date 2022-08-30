type Props = {
  title: string;
  children: React.ReactChild;
};

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return <main>{children}</main>;
};

export default MainLayout;

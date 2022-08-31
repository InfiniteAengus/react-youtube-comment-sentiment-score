import { Container } from '@mui/material';
import Header from './Header';

type Props = {
  title?: string;
  children: React.ReactChild;
};

const MainLayout: React.FC<Props> = ({ title = 'Test App', children }) => {
  return (
    <>
      <Header />
      <main style={{ padding: '30px 0' }}>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default MainLayout;

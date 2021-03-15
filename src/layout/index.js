import Header from '../components/Header'
import "./styles.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="page__wrapper">
      <Header />
      <div className="page__content">{children}</div>
    </div>
  );
};

export default MainLayout;

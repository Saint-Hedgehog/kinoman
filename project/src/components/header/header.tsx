import Profile from './profile/profile';

const Header: React.FC = (): JSX.Element => (
  <div>
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>

      <Profile />
    </header>
  </div>
);
export default Header;

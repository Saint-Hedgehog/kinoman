import Logo from './logo/logo';
import Profile from './profile/profile';

const Header: React.FC = (): JSX.Element => (
  <div>
    <header className="header">
      <Logo />
      <Profile />
    </header>
  </div>
);

export default Header;

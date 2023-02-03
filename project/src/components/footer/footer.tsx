import Logo from '../header/logo/logo';

const Footer: React.FC = (): JSX.Element => (
  <footer className="footer">
    <Logo isFooter/>

    <section className="footer__statistics">
      <p>130 291 movies inside</p>
    </section>
  </footer>
);

export default Footer;

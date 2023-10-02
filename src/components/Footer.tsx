import { Link } from "react-router-dom"

const Footer = () => {
  const year: number = new Date().getFullYear();

  const toggleMenuLink = () => {
    const hamburger: HTMLElement = document.querySelector('.navigation-wrapper-mobile__hamburger')!;
    const close: HTMLElement = document.querySelector('.navigation-wrapper-mobile__close')!;
    const menu: HTMLElement = document.querySelector('.navigation-wrapper-mobile__bottom')!;

    if (menu.classList.contains('navigation-wrapper-mobile__bottom--display')) {
        hamburger.classList.remove('navigation-wrapper-mobile__hamburger--opacity')
        close.classList.remove('navigation-wrapper-mobile__close--opacity')
        menu.classList.remove('navigation-wrapper-mobile__bottom--display')
    } else {
        return
    }
}

  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__box footer-wrapper__box--margin footer-wrapper__box--padding-bottom footer-wrapper__box--gap">
        <Link to="/" className="footer-wrapper__link" onClick={toggleMenuLink}>
          <img src="/logo.png" alt="logo" className="footer-wrapper__logo" />
        </Link>
        <div className="footer-wrapper__content footer-wrapper__content--gap">
          <h3 className="footer-wrapper__footer-heading">
            Contact
          </h3>
          <p className="footer-wrapper__footer-text">
            Please don't.
          </p>
          <p className="footer-wrapper__footer-text footer-wrapper__footer-text--padding">
            If You must then send us Your message on:
          </p>
          <a href="mailto:please.dont@ever.com" className="footer-wrapper__mail">
            please.dont@ever.com
          </a>
        </div>
      </div>
      <div className="footer-wrapper__box footer-wrapper__box--padding-top footer-wrapper__box--align footer-wrapper__box--flex">
        <p className="footer-wrapper__copyright">
          Needless &copy;
          {year}
        </p>
        <a href="mailto:bak.13@hotmail.com" className="footer-wrapper__mail">
          Bruno Bakarić
        </a>
        <p className="footer-wrapper__copyright">
          {year}
        </p>
      </div>
    </div>
  )
}

export default Footer
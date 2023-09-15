
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__box footer-wrapper__box--margin footer-wrapper__box--padding-bottom footer-wrapper__box--gap">
        <img src="/logo.png" alt="logo" className="footer-wrapper__logo" />
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
      <div className="footer-wrapper__box footer-wrapper__box--padding-top footer-wrapper__box--align">
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
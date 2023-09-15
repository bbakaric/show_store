
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__box">
        <img src="/logo.png" alt="logo" className="footer-wrapper__logo" />
        <div className="footer-wrapper__content">
          <h3 className="footer-wrapper__footer-heading">
            Contact
          </h3>
          <p className="footer-wrapper__footer-text">
            Please don't.
          </p>
          <p className="footer-wrapper__footer-text">
            If You must then send us Your message on:
          </p>
          <a href="mailto:please.dont@ever.com" className="footer-wrapper__mail">
            please.dont@ever.com
          </a>
        </div>
      </div>
      <div className="footer-wrapper__box">
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
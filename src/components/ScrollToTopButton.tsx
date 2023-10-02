const ScrollToTopButton = () => {
    const toTop = () => {
        window.scrollTo(0, 0);
    }

  return (
    <>
        <button className="scrollToTop-btn" onClick={toTop}>
            To Top
        </button>
    </>
  )
}

export default ScrollToTopButton
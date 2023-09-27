import Swiper from "../components/Swiper";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <div className="home-wrapper__banner-wrapper">
                <img src="/banner-2.jpg" alt="banner" className="home-wrapper__banner-img" />
            </div>
            <h3 className="home-wrapper__sub-heading">
                New Products
            </h3>
            <Swiper />
            <div className="home-wrapper__popular-wrapper">
                <h3 className="home-wrapper__popular-heading">
                    Popular Categories
                </h3>
                <div className="home-wrapper__categories-box">
                    <Link to='/womens' className="home-wrapper__category-link">
                        <div className="home-wrapper__category">
                            <h4 className="home-wrapper__category-name">
                                Women's Clothing
                            </h4>
                            <div className="home-wrapper__img-wrapper">
                                <img src="/women.jpg" alt="category" className="home-wrapper__category-img" />
                            </div>
                        </div>
                    </Link>
                    <Link to='/mens' className="home-wrapper__category-link">
                        <div className="home-wrapper__category">
                            <h4 className="home-wrapper__category-name">
                                Men's Clothing
                            </h4>
                            <div className="home-wrapper__img-wrapper">
                                <img src="/men.jpg" alt="category" className="home-wrapper__category-img" />
                            </div>
                        </div>
                    </Link>
                    <Link to='/jewelery' className="home-wrapper__category-link">
                        <div className="home-wrapper__category">
                            <h4 className="home-wrapper__category-name">
                                Jewelery
                            </h4>
                            <div className="home-wrapper__img-wrapper">
                                <img src="/jewelery.jpg" alt="category" className="home-wrapper__category-img" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
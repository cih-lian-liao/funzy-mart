import "./Section1.css";
import { NavLink } from "react-router-dom";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1__card-container">
        <div className="section1__card">
          <div className="section1__card-content">
            <div className="section1__image-wrapper section1__image--top-left">
              <img
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
                alt="Stuffed Animal"
              />
            </div>
            <div className="section1__text-content">
              <h2 className="section1__card-title">Stuffed Animals</h2>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? "section1__link active" : "section1__link"
                }
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>

        <div className="section1__card">
          <div className="section1__card-content">
            <div className="section1__image-wrapper section1__image--top-left">
              <img
                src="http://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
                alt="Wooden Toy"
              />
            </div>
            <div className="section1__text-content">
              <h2 className="section1__card-title">Wooden Toys</h2>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? "section1__link active" : "section1__link"
                }
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

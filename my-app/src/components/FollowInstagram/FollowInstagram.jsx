import './FollowInstagram.css';

export default function FollowInstagram() {
  return (
    <section className="social-instagram">
      <div className="social-instagram__container">
        <p className="social-instagram__title">We're on Instagram!</p>
        <ul className="social-instagram__photo-list">
          <li>
            <a href="https://instagram.com/" className="social-instagram__photo-link" target="_blank" rel="noopener noreferrer">
              <img
                className="social-instagram__photo"
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg"
                alt="Instagram 1"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" className="social-instagram__photo-link" target="_blank" rel="noopener noreferrer">
              <img
                className="social-instagram__photo"
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg"
                alt="Instagram 2"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" className="social-instagram__photo-link" target="_blank" rel="noopener noreferrer">
              <img
                className="social-instagram__photo"
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg"
                alt="Instagram 3"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" className="social-instagram__photo-link" target="_blank" rel="noopener noreferrer">
              <img
                className="social-instagram__photo"
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg"
                alt="Instagram 4"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" className="social-instagram__photo-link" target="_blank" rel="noopener noreferrer">
              <img
                className="social-instagram__photo"
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg"
                alt="Instagram 5"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" className="social-instagram__photo-link" target="_blank" rel="noopener noreferrer">
              <img
                className="social-instagram__photo"
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg"
                alt="Instagram 6"
              />
            </a>
          </li>
        </ul>
        <a className="social-instagram__cta" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          See More Photos
        </a>
      </div>
    </section>
  );
}
import './Contacts.css';
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function Contacts() {
  return (
    <section className="contacts">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Contacts", path: "/contacts" },
        ]}
      />
      
      <div className="contacts__hero">
        <div className="contacts__hero-content">
          <h1 className="contacts__title">📞 Get in Touch with FunzyMart</h1>
          <p className="contacts__subtitle">
            We're here to help! Whether you have questions about our toys, need support with your order, 
            or want to share feedback, our friendly team is ready to assist you.
          </p>
        </div>
        <div className="contacts__hero-image">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Happy customer service team"
          />
        </div>
      </div>

      <div className="contacts__content">
        <div className="contacts__info">
          <div className="contacts__card">
            <div className="contacts__card-icon">📞</div>
            <h3 className="contacts__card-title">Phone Support</h3>
            <p className="contacts__card-description">
              Speak directly with our friendly customer service team
            </p>
            <a href="tel:+12139749090" className="contacts__card-link">
              +1 (213) 974-9090
            </a>
            <p className="contacts__card-hours">
              Monday - Friday: 8 AM - 8 PM EST<br />
              Saturday: 9 AM - 5 PM EST
            </p>
          </div>

          <div className="contacts__card">
            <div className="contacts__card-icon">📧</div>
            <h3 className="contacts__card-title">Email Support</h3>
            <p className="contacts__card-description">
              Send us a message and we'll respond within 4 hours
            </p>
            <a href="mailto:support@funzymart.com" className="contacts__card-link">
              support@funzymart.com
            </a>
            <p className="contacts__card-hours">
              We typically respond within 4 hours during business hours
            </p>
          </div>

          <div className="contacts__card">
            <div className="contacts__card-icon">💬</div>
            <h3 className="contacts__card-title">Live Chat</h3>
            <p className="contacts__card-description">
              Chat with us instantly on our website
            </p>
            <button className="contacts__card-button">
              Start Chat
            </button>
            <p className="contacts__card-hours">
              Available during business hours
            </p>
          </div>
        </div>

        <div className="contacts__form-section">
          <div className="contacts__form-wrapper">
            <h2 className="contacts__form-title">💌 Send Us a Message</h2>
            <p className="contacts__form-subtitle">
              Have a question or feedback? We'd love to hear from you!
            </p>
            
            <form className="contacts__form">
              <div className="contacts__form-row">
                <div className="contacts__form-group">
                  <label htmlFor="name" className="contacts__form-label">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="contacts__form-input" 
                    placeholder="Your full name"
                    required 
                  />
                </div>
                <div className="contacts__form-group">
                  <label htmlFor="email" className="contacts__form-label">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="contacts__form-input" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
              </div>
              
              <div className="contacts__form-group">
                <label htmlFor="subject" className="contacts__form-label">Subject *</label>
                <select id="subject" name="subject" className="contacts__form-select" required>
                  <option value="">Select a topic</option>
                  <option value="order-inquiry">Order Inquiry</option>
                  <option value="product-question">Product Question</option>
                  <option value="shipping-delivery">Shipping & Delivery</option>
                  <option value="returns-exchanges">Returns & Exchanges</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="contacts__form-group">
                <label htmlFor="message" className="contacts__form-label">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="contacts__form-textarea" 
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="contacts__form-submit">
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}

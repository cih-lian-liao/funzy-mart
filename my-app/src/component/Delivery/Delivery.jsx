import "./Delivery.css";
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import Subscribe from "../Subscribe/Subscribe";
import FollowInstagram from "../FollowInstagram/FollowInstagram";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div>
      <section className="delivery">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Delivery", path: "/delivery" },
          ]}
        />
        <div className="delivery__content">
          <div className="delivery__info">
            <h2>🚚 Fast & Reliable Delivery</h2>
            <p>
              At FunzyMart, we understand that when you order toys for your little ones, 
              you want them delivered quickly and safely. That's why we've partnered with 
              trusted shipping providers including FedEx, UPS, and USPS to ensure your precious 
              toys arrive in perfect condition, ready to bring joy to your family.
            </p>
            <p>
              Our fulfillment center operates Monday through Friday, processing orders within 
              24 hours of placement. During peak seasons (holidays, back-to-school), processing 
              may take up to 48 hours. All orders placed after 2 PM EST will be processed 
              the next business day.
            </p>

            <h2>📦 Shipping Options & Timeframes</h2>
            <p>
              We offer multiple shipping options to fit your needs and budget. 
              All orders are carefully packaged with protective materials to ensure 
              your toys arrive safely, whether it's a cuddly teddy bear or a delicate 
              wooden puzzle.
            </p>
            <ul className="design-list">
              <li><strong>Standard Shipping (USPS Ground):</strong> 5-7 business days - $4.99</li>
              <li><strong>Express Shipping (FedEx 2-Day):</strong> 2-3 business days - $9.99</li>
              <li><strong>Next Day Delivery (FedEx Overnight):</strong> 1 business day - $19.99 (Available in select metropolitan areas)</li>
              <li><strong>Free shipping on orders over $50</strong> (Standard shipping only)</li>
              <li><strong>Same-day delivery:</strong> Available in Los Angeles, New York, Chicago, and Miami - $24.99 (Orders must be placed before 12 PM)</li>
            </ul>
            <p>
              <strong>Important Note:</strong> Delivery times are calculated from the day your order 
              ships, not from the day you place your order. Business days exclude weekends and 
              federal holidays. Rural areas may experience 1-2 additional delivery days.
            </p>

            <h2>🌍 Delivery Areas & Coverage</h2>
            <p>
              We deliver nationwide across the United States, bringing smiles to families 
              from coast to coast. Our delivery network covers all 50 states, including 
              Alaska and Hawaii, ensuring that no matter where you are, your child's new 
              favorite toy is just a few clicks away.
            </p>
            <p>
              <strong>Special Delivery Services:</strong>
            </p>
            <ul className="design-list">
              <li><strong>PO Boxes:</strong> We deliver to PO Boxes via USPS</li>
              <li><strong>Military Addresses (APO/FPO):</strong> Special rates available for military families</li>
              <li><strong>International Shipping:</strong> Available to Canada and Mexico (additional fees apply)</li>
              <li><strong>Remote Areas:</strong> Extended delivery times may apply to rural locations</li>
            </ul>

            <h2>📋 Order Tracking & Updates</h2>
            <p>
              Once your order is placed, you'll receive a confirmation email with your 
              tracking number within 2 hours. You can track your package in real-time 
              through our website or directly with the carrier. We'll send you updates 
              at key milestones:
            </p>
            <ul className="design-list">
              <li><strong>Order Confirmation:</strong> Immediate email confirmation with order details</li>
              <li><strong>Processing Update:</strong> Notification when your order enters our fulfillment center</li>
              <li><strong>Shipping Notification:</strong> Email with tracking number when your package ships</li>
              <li><strong>In Transit Updates:</strong> Real-time location updates via carrier tracking</li>
              <li><strong>Delivery Confirmation:</strong> Notification when your package is delivered</li>
            </ul>
            <p>
              <strong>Tracking Options:</strong> You can opt-in for SMS notifications, email updates, 
              or both. You can also track your order anytime by logging into your FunzyMart account 
              or using the tracking number provided in your shipping confirmation.
            </p>

            <h2>🛡️ Safe Packaging Guarantee</h2>
            <p>
              Every toy is carefully wrapped in protective packaging to prevent damage 
              during transit. Our packaging specialists use industry-standard materials 
              and techniques to ensure your toys arrive in perfect condition.
            </p>
            <p>
              <strong>Packaging Standards by Product Type:</strong>
            </p>
            <ul className="design-list">
              <li><strong>Stuffed Animals:</strong> Individual protective bags, anti-static wrapping, and cushioned boxes</li>
              <li><strong>Wooden Toys:</strong> Bubble wrap protection, corner guards, and reinforced packaging</li>
              <li><strong>Electronic Toys:</strong> Anti-static foam, secure compartmentalization, and shock-resistant materials</li>
              <li><strong>Art Supplies:</strong> Sealed containers, moisture-resistant wrapping, and upright packaging</li>
              <li><strong>Board Games:</strong> Corner protection, shrink wrapping, and reinforced edges</li>
            </ul>
            <p>
              <strong>Quality Assurance:</strong> Every package undergoes a final inspection 
              before shipping. We use tamper-evident seals and include packing slips with 
              detailed contents. If your item arrives damaged, we'll replace it immediately 
              at no cost to you.
            </p>

            <h2>🔄 Returns & Exchanges</h2>
            <p>
              Not completely satisfied with your purchase? No worries! We offer a 
              comprehensive 30-day return policy for unused items in original packaging. 
              Your satisfaction is our top priority, and we want every child to love 
              their new toy.
            </p>
            <p>
              <strong>Return Policy Details:</strong>
            </p>
            <ul className="design-list">
              <li><strong>Return Window:</strong> 30 days from delivery date</li>
              <li><strong>Condition:</strong> Items must be unused and in original packaging</li>
              <li><strong>Return Shipping:</strong> Free return shipping for defective items</li>
              <li><strong>Refund Processing:</strong> 3-5 business days after we receive your return</li>
              <li><strong>Exchange Policy:</strong> Free exchanges for different sizes or colors</li>
            </ul>
            <p>
              <strong>How to Return:</strong> Simply contact our customer service team 
              at support@funzymart.com or call (213) 974-9090. We'll provide you with 
              a prepaid return label and detailed instructions. You can also initiate 
              returns directly through your FunzyMart account.
            </p>
            <p>
              <strong>Special Circumstances:</strong> For items damaged in transit or 
              defective products, we offer immediate replacement or full refund. 
              Personalized or custom items may have different return policies - 
              please check product descriptions for details.
            </p>

            <h2>📞 Customer Support & Contact Information</h2>
            <p>
              Our dedicated customer service team is here to help with any delivery 
              questions or concerns. We're available Monday through Friday, 8 AM to 8 PM EST, 
              and Saturday, 9 AM to 5 PM EST.
            </p>
            <ul className="design-list">
              <li><strong>Phone Support:</strong> (213) 974-9090</li>
              <li><strong>Email Support:</strong> support@funzymart.com</li>
              <li><strong>Live Chat:</strong> Available on our website during business hours</li>
              <li><strong>Response Time:</strong> Email responses within 4 hours during business hours</li>
            </ul>

            <h2>⚠️ Important Delivery Notes</h2>
            <p>
              <strong>Weather Delays:</strong> Severe weather conditions may cause delivery 
              delays. We'll notify you if weather affects your delivery timeline.
            </p>
            <p>
              <strong>Signature Requirements:</strong> Orders over $100 require adult signature 
              upon delivery. You can authorize package release by adding delivery instructions 
              to your order.
            </p>
            <p>
              <strong>Delivery Attempts:</strong> Carriers will attempt delivery 3 times. 
              After 3 failed attempts, packages will be returned to sender. You can arrange 
              pickup at local carrier facilities.
            </p>
            <p>
              <strong>Holiday Schedule:</strong> During major holidays (Christmas, Thanksgiving, 
              New Year), delivery times may be extended. We recommend ordering early during 
              peak seasons.
            </p>
          </div>

          <div className="delivery__sidebar">
            <div className="delivery__card">
              <p className="delivery__card-text">
                🤝 Need Help with Your Order?
              </p>
              <p className="delivery__card-subtext">
                Our friendly customer service team is here to help with any delivery questions or concerns. 
                We're just a click away! 💬✨
              </p>
              <Link to='/contacts' className="delivery__button">📞 Contact Support</Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

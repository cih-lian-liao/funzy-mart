import './Contacts.css';
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import Subscribe from "../Subscribe/Subscribe";
import FollowInstagram from "../FollowInstagram/FollowInstagram";
import Footer from "../Footer/Footer";

export default function Contacts() {
  return (
    <section className="contacts">
      <Breadcrumb
                items={[
                  { label: "Home", path: "/" },
                  { label: "Contacts", path: "/contacts" },
                ]}
              />
      <div className="map-api"></div>

    </section>
  );
}

import './App.css';
import Nav from './component/Nav/Nav.jsx';
import Top from './component/Top/Top.jsx'
import MainRoutes from './MainRoutes.jsx';
import Subscribe from './component/Subscribe/Subscribe.jsx';
import FollowInstagram from './component/FollowInstagram/FollowInstagram.jsx';
import Footer from './component/Footer/Footer.jsx';
import CartModal from './CartModal/CartModal.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <CartModal></CartModal>
        <Top></Top>
        <Nav></Nav>
        <MainRoutes></MainRoutes>
        <Subscribe></Subscribe>
        <FollowInstagram></FollowInstagram>
        <Footer></Footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;

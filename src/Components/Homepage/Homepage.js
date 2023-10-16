import refugeesImage from '../../images/refugees.png';
import NavBar from "../NavBar/NavBar";



function Homepage() {
  return (
    <>
      <header className="home-header">
        <NavBar />
        <img src={refugeesImage} alt="Refugees" className="refugees-img" />
      </header>
      <main></main>
    </>
  );
}

export default Homepage;
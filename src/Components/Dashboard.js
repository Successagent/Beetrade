import Button from "./Button";
import Nav from "./Nav";

const Dashboard = ({ showMenu }) => {
  return (
    <section className="dashboard">
      <header className="header">
        <div className="header-logo">
          <img src="./logo3.svg" alt="" />
          <h3>Bee-Trade finance</h3>
        </div>
        <img className="bell" src="./bell.svg" alt="" />
        <div className="dashboard-btn-con">
          <Button text="Connect Wallet" />
        </div>
        <img src="./icon-menu.svg" alt="" onClick={showMenu} />
      </header>
      <section className="dashboard-con">
        <Nav />
        <section className="dashboard-sec">
          <div className="candle-stick">
            <img src="./Frame60.svg" alt="" />
            <img src="./Frame61.svg" alt="" />
          </div>
          <div>
            <img src="./Frame62.svg" alt="" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;

const Nav = () => {
  return (
    <nav className="dashboard-nav">
      <ul className="">
        <div className="dashboard-list">
          <h3 className="brown-bg">Trade</h3>
        </div>
        <div className="dashboard-list">
          <h3>Swap</h3>
        </div>
        <div className="dashboard-list">
          <h3>Staking</h3>
        </div>
        <div className="dashboard-list">
          <h3>Pool</h3>
        </div>
        <div className="dashboard-list">
          <h3>Farm</h3>
        </div>

        <hr />

        <div className="dashboard-list">
          <h3>Docs</h3>
        </div>
        <div className="dashboard-list">
          <h3>Community</h3>
        </div>
        <div className="dashboard-list">
          <h3>Setting</h3>
        </div>
        <div className="dashboard-list">
          <h3>Feedbacks</h3>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

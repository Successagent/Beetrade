import ListItems from "./ListItems";
import Button from "./Button";

const HeaderNav = ({ showMenu, visibility }) => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src="./logo3.svg" alt="" />
          <h3>Bee-Trade finance</h3>
        </div>
        <ListItems visibility={visibility} />
        <Button text="Launch App" />
        <img
          src="./icon-menu.svg"
          alt=""
          onClick={showMenu}
        />
      </header>
    </>
  );
};

export default HeaderNav;

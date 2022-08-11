import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="header-logo">
          <img src="./logo3.svg" alt="" />
          <h3>Bee-Trade finance</h3>
        </div>
        <h3>Subscribe</h3>
        <p>Subscrible to the our newsletter</p>
        <form>
          <input placeholder="Your Email" />
          <Button text="Subscribe" />
        </form>
      </div>
      <div>
        <ul>
          <h3>App</h3>
          <li>Trade</li>
          <li>Swap</li>
          <li>Pool</li>
          <li>Farm</li>
        </ul>
        <ul>
          <h3>Company</h3>
          <li>Docs</li>
          <li>Team</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
        </ul>
        <ul>
          <h3>Community</h3>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Telegram</li>
          <li>Discord</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

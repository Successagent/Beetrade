import Button from "./Button";
import ButtonTwo from "./ButtonTwo";

const TradeSec = () => {
  return (
    <>
      <h1>Features Of Bee Trade Hybrid DEX</h1>
      <div className="trade">
        <div>
          <img src="./Frame39.svg" />
          <h3>$BTF Staking</h3>
          <p>
            Stake your $BTF to earn rewards. And get exclusive access to
            benefits.
          </p>
          <Button text="Stake BTF" />
        </div>
        <div>
          <img src="./Frame40.svg" alt="" />
          <h3>Trade</h3>
          <p>Swap or Trade quickly at the lowest fees.</p>
          <Button text="Launch Trade" />
        </div>
        <div>
          <img src="./Frame41.svg" alt="" />
          <h3>Hybrid DEX</h3>
          <p>Swap or Trade quickly at the lowest fees.</p>
          <Button text="Launch App" />
        </div>
        <div>
          <img src="./Frame42.svg" alt="" />
          <h3>Pool</h3>
          <p>Provide liquidity for your favourite tokens and earn</p>
          <ButtonTwo text="Coming Soon" />
        </div>
        <div>
          <img src="./Frame39.svg" alt="" />
          <h3>Farm</h3>
          <p>Earn extra yield by depositing your Liquidity Pool tokens.</p>
          <ButtonTwo text="Coming Soon" />
        </div>
        <div>
          <img src="./Frame44.svg" alt="" />
          <h3>Multi-Chain Dashboard</h3>
          <p>Easily track your Web3 portfolio & access yield opportunities.</p>
          <ButtonTwo text="Coming Soon" />
        </div>
      </div>
    </>
  );
};

export default TradeSec;

import Built from "./Built";
import FutureSec from "./FutureSec";
import MainSecPart from "./MainSecPart";
import TradePartTwo from "./TradePartTwo";
import TradeSec from "./TradeSec";
import Support from "./Support";

const Main = () => {
  return (
    <main className="main">
      <section className="main-first-sec">
        <FutureSec />
        <Built />
      </section>
      <section>
        <div className="main-part-two">
          <MainSecPart />
        </div>
      </section>
      <section>
        <TradeSec />
      </section>
      <section>
        <TradePartTwo />
      </section>
    <section>
      <Support/>
    </section>
    </main>
  );
};

export default Main;

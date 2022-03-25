import "./Section.css";
function Section() {
  return (
    <>
      <section className="different container">
        <h2>Weʼre different</h2>
        <div className="different-items">
          <div className="different-item">
            <img src="./images/icon-snappy-process.svg" alt="" />
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
          <div className="different-item">
            <img src="./images/icon-affordable-prices.svg" alt="" />
            <h3>Affordable Prices</h3>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="different-item">
            <img src="./images/icon-people-first.svg" alt="" />
            <h3>People First</h3>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>

        <div className="cta">
          <h4>
            Find out more
            <br /> about how we work
          </h4>
          <a href="/" className="view-plans cta-btn">
            how we work
          </a>
        </div>
      </section>
    </>
  );
}

export default Section;

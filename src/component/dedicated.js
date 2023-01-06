import styled from "styled-components";

const Item = [
  {
    image: "../Assets/dungeon.png",
    heading: "UAE Free Zone Company",
    paragraph:
      "Your registration agent, will answer all of your questions and help you to reacha conclusion that meets your objectivesof investing in the UAE.",
  },
  {
    image: "../Assets/Vector-2.png",
    heading: "Dubai Local Companies",
    paragraph:
      "The Dubai LLC formation documentsare actually articles of organization or acertificate of organization. You can get yours today.",
  },
  {
    image: "../Assets/Vector-1.png",
    heading: "Offshore Compamies",
    paragraph:
      "You can register an offshore company and open its bank account in Dubai.Your agent will help you along all the process",
  },
];

function Dedicated() {
  return (
    <>
      <Dedicated1>
        <div>
          <img src="../Assets/Ellipse 19-1.png" alt="" />{" "}
        </div>
        <div className="Dedicated-heading">
          <span className="text-underline">Dedicated</span>
          <br />
          to our mission we are
        </div>
        <div className="paragraph">
          Our services include Company Formation & Renewals, Trust & Fiduciary,
          Tax Residency Setup With Family, Bank Accounts, Remote Management,
          Stock Trading Platforms, Ownership Solutions.
        </div>
        <div className="card">
          {Item.map((i) => {
            return (
              <div key={i}>
                <div className="card-img">
                  <img src={i.image} alt="loading..." />
                </div>
                <div className="card-heading">{i.heading}</div>
                <div className="card-paragraph">{i.paragraph}</div>
                <div className="card-started">Get Started</div>
              </div>
            );
          })}
        </div>

        <div className="card-circle hidden">
          <img src="../Assets/Ellipse 16.png" alt="loading" />
        </div>
        <div className="card-circle-2 hidden">
          <img src="../Assets/Ellipse 24.png" alt="laoding" />
        </div>

        <div className="main-div">
          <div className="hidden">
            <img src="../Assets/Ellipse 19-1.png" alt="" />{" "}
          </div>

          <div class="hero-section">
            <div class="heading">
              <div className="border-text">
                Learn the ways in which you can benefit from a UAE/Offshore
                Company. Then ge
                <div className="border-blue-text">Claim a free Quote</div>
              </div>
            </div>

            <div class="img-container">
              <div className="card-0">
                <div className="border-card ">
                  <div>
                    <div className="border-circle">
                      <img src="../Assets/Ellipse 19.png" alt="" />
                    </div>
                    <div className="border-img">
                      <img src="../Assets/Group.png" alt="logo" />
                    </div>
                    <div className="border-heading">Advice & Guidance</div>
                    <div className="border-paragraph">
                      All activities in the UAE are licensed. Whether
                      manufacturing, finance, trading, marketing, consultancy or
                      restaurants. In some countries only manufacturing is
                      licensed. In others there is a threshold below which
                      business are encouraged. Get our insightfull guidance
                      today
                    </div>
                    <div className="border-arrow">
                      <div className="border-blue-text-Learn">Learn More </div>
                      <img
                        className="vertor-img"
                        src="../Assets/Vector.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-circle hidden">
                  <img src="../Assets/Ellipse 16.png" alt="loading" />
                </div>
                <div className="border-card  hidden">
                  <div>
                    <div className="border-circle">
                      <img src="../Assets/Ellipse 19.png" alt="" />
                    </div>
                    <div className="border-img">
                      <img src="../Assets/Group-1.png" alt="logo" />
                    </div>
                    <div className="border-heading">
                      Registration Document Perparation
                    </div>
                    <div className="border-paragraph">
                      Several documents must be prepared to start the process of
                      registering a new company in the United Arab Emirates. Be
                      it a Dubai local company, a free zone one or an offshore
                      entity. Your registered agent is dedicated to get this
                      done for you for a seamless process.
                    </div>
                    <div className="border-arrow">
                      <div className="border-blue-text-Learn">Learn More </div>
                      <img
                        className="vertor-img"
                        src="../Assets/Vector.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sub">
              <div className="card-0">
                <div className="border-card ">
                  <div>
                    <div className="border-circle">
                      <img src="../Assets/Ellipse 19.png" alt="" />
                    </div>
                    <div className="border-img">
                      <img src="../Assets/bankSetup.png" alt="logo" />
                    </div>
                    <div className="border-heading"> Bank Account Setup</div>
                    <div className="border-paragraph">
                      There are many banks in the United Arab Emirates [UAE].
                      Both locally owned and branches of multinational ones.
                      Foreign banks adjust according to their parent
                      ’sstrategies and have changed local requirements overnight
                      in the past. But we are here to help you.
                    </div>

                    <div className="border-arrow">
                      <div className="border-blue-text-Learn">Learn More </div>
                      <img
                        className="vertor-img"
                        src="../Assets/Vector.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-card  hidden">
                  <div>
                    <div className="border-circle">
                      <img src="../Assets/Ellipse 19.png" alt="" />
                    </div>
                    <div className="border-img">
                      <img src="../Assets/Group-2.png" alt="logo" />
                    </div>
                    <div className="border-heading"> UAE Company Visas</div>
                    <div className="border-paragraph">
                      Your application for visas is critical especially if you
                      intend to move to Dubai. This becomes even more urgent if
                      your family will also move with you. All the paperwork is
                      done on your behalf smoothly so that you may only focus on
                      doing what matters most to you.
                    </div>
                    <div className="border-arrow">
                      <div className="border-blue-text-Learn">Learn More </div>
                      <img
                        className="vertor-img"
                        src="../Assets/Vector.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-circle hidden">
            <img src="../Assets/Ellipse 16.png" alt="loading" />
          </div>
        </div>
      </Dedicated1>
    </>
  );
}
export default Dedicated;
const Dedicated1 = styled.div`
  .main-div {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 50px;
    margin: auto;
  }

  .heading {
    grid-area: heading;
    display: flex;
    align-items: flex-end;
  }
  .img-container {
    grid-area: img;
    margin: 0 auto;
  }
  .sub {
    margin-top: 20px;
    grid-area: sub;
  }
  .card-0 {
    display: grid;
    gap: 4rem;
    justify-content: center;
    margin: 10px 0;
  }

  .hero-section {
    display: grid;
    gap: 1rem;
    grid-template-areas:
      "heading"
      "img"
      "sub";
    text-align: center;
    margin: 2em auto;
  }

  @media screen and (min-width: 770px) {
    .hero-section {
      grid-template-areas:
        "heading img"
        "sub img";
      text-align: left;
      gap: 0;
    }
    .img-container {
      margin-left: 5vw;
    }
  }

  .hidden {
    @media (max-width: 770px) {
      display: none;
    }
  }
  .border-blue-text-Learn {
    margin-top: 20px;
    color: var(--blueColor);
    font-size: 18px;
    font-weight: 500;
  }
  .vertor-img {
    margin-top: 20px;
  }
  .border-arrow {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .border-circle {
    display: none;
    @media (max-width: 426px) {
      display: block;
    }
  }
  .border-blue-text {
    margin-top: 20px;
    color: var(--blueColor);
  }
  .border-text {
    font-size: 24px;
    width: 400px;
    @media screen and (max-width: 426px) {
      width: 250px;
    }
  }
  .borderParent {
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 20px;
  }
  .borderChild {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .border-card {
    border: 1px solid var(--grayColor);
    border-radius: 8px;
    padding: 50px 20px;
    width: 400px;
    margin: auto;
    @media (max-width: 769px) {
      width: 250px;
    }
    @media (max-width: 426px) {
      width: 250px;
      padding: 20px 30px;
    }
  }
  .border-paragraph {
    width: 350px;
    color: var(--grayColor);
    font-size: 18px;
    margin-top: 1rem;
    line-height: 1.3;
    @media (max-width: 769px) {
      width: 250px;
    }
    @media (max-width: 426px) {
      width: 250px;
    }
  }
  .border-heading {
    font-size: 24px;
    font-weight: 500;
    margin-top: 1rem;
    color: var(--blackColor);
  }
  .border-img {
    text-align: center;
  }

  .Dedicated-heading {
    margin-top: 2rem;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    color: var(--blackColor);
    @media (max-width: 426px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 1.4;
    }
  }
  .text-underline {
    text-decoration: underline var(--orangeColor) 10px;
  }
  .paragraph {
    color: var(--grayColor);
    opacity: 0.5;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    margin: auto;
    margin-top: 20px;
    width: 800px;
    @media (max-width: 769px) {
      font-weight: 500;
      font-size: 30px;
      width: 500px;
    }
    @media (max-width: 426px) {
      font-weight: 500;
      font-size: 24px;
      width: 320px;
    }
    @media (max-width: 321px) {
      font-weight: 500;
      font-size: 24px;
      width: 200px;
    }
  }
  .card {
    display: flex;
    margin-top: 3rem;
    gap: 50px;
    justify-content: space-between;
    @media (max-width: 769px) {
      flex-wrap: wrap;
      text-align: center;
    }
  }
  .card-heading {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 24px;
    color: var(--blackColor);
    @media (max-width: 426px) {
      text-align: center;
    }
  }
  .card-paragraph {
    color: var(--grayColor);
    opacity: 0.5;
    line-height: 1.2;
    font-size: 18px;
  }
  .card-started {
    color: var(--orangeColor);
    margin-top: 1rem;
    font-size: 18px;
  }
  .card-circle {
    margin-left: 8rem;
    @media (max-width: 426px) {
      display: none;
    }
  }
  .card-circle-2 {
    margin-left: 48rem;
    marhin-top: 4rem;
    @media (max-width: 426px) {
      display: none;
    }
  }
  /* .border-card {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  } */
`;

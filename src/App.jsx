import "./App.css"
import persona5 from "./assets/Persona5.png"
import idea from "./assets/idea.png"
import joker from "./assets/joker.png"
import phone from "./assets/phone.png"
import { Routes, Route, Link } from 'react-router-dom'
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
function App() {
  return (
    <div>
      <div id="navbar">
        <div style={{ display: 'flex' }}>
          <div className="Main">
            <Link to="/" style={{ color: 'white' }}>Main</Link>
          </div>
          <div>
            <Link to="/page1" style={{ color: 'white' }}>Page1</Link>
          </div>
          <div>
            <Link to="/page2" style={{ color: 'white' }}>Page2</Link>
          </div>
        </div>
        <div id="search">
          <i className="fa fa-search" />
        </div>
      </div>
      <div id="header">
        <div className="layout">
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
          <div className="P5"><img src={persona5} alt="persona5" height="600px" /></div>
          <div className="hello"> HELLO!</div>
          <div className="name">I'm Andika Ridho,<br />a Web Developer.</div>
          <div className="from">image from <u className="ff">freepik</u></div>
          <div />
          <div className="readmore"><button>read more</button></div>
        </div>
      </div>
      <div id="profil">
        <div className="profilhead">profile</div>
        <p>I'm creative multitasking developer</p>
        <div id="profilbody">
          <div id="aboutme" style={{ textAlign: 'left' }}>
            <h2>
              About me
            </h2>
            <p style={{ textAlign: 'left' }}>I am an allround web developer. I am a senior programmer with good
              knowledge of
              front-end techniques.
              Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec
              adipiscing tristique risus. </p>
          </div>
          <div id="photo">
            <img src={joker} alt="p5" width="100%" height="100%" />
          </div>
          <div id="detail" style={{ textAlign: 'left' }}>
            <h2>
              Details
            </h2>
            <p style={{ textAlign: 'left' }}>
              <b style={{ padding: '20px 20px 0 0' }}>Name:</b> <br /> Andika Ridho <br /><br /> <b>Age:</b> <br /> 26 years
              <br /><br />
              <b>Location:</b>
              <br /> BSD
            </p>
          </div>
        </div>
      </div>
      <div id="contain1">
        <div className="idea"><img src={idea} alt="idea" height="470px" /></div>
        <div className="open">
          Hello
        </div>
        <div className="equally">
          I am equally happy working across<br />both print and digital media
        </div>
        <div className="sample">
          Sample text. Click to select the text box.<br />Click again or double-click to start editing<br />the text.
        </div>
        <div />
        <div className="readmore"><button>read more</button></div>
        <div />
        <div className="from1">Image from <u className="ff">Freepik</u></div>
        <div />
      </div>
      <div id="capability">
        <div id="capa">
          <div className="capahead">
            <h1>capabilities</h1>
          </div>
          <p>Theresult of our company branding process is a comprehensive brand guideline that can be <br /> used to
            design
            a and other design assets like brand illustrations that reflect <br /> the new brand.</p>
        </div>
        <div id="capabody">
          <div id="brandstrategy" style={{ textAlign: 'left' }}>
            <h2>
              Brand Strategy
            </h2>
            <p> - Brand Equity audit <br /> - Audience analysis <br /> - Competitive Review <br /> - Strategic direction
            </p>
          </div>
          <div id="brandidentity">
            <h2>
              Brand Identity
            </h2>
            <p> - Visual positioning <br /> - Visual identity system <br /> - Icon &amp; ilustration guides <br /> - Brand
              Application
            </p>
          </div>
          <div id="communication">
            <h2>
              Communication Strategy
            </h2>
            <p> - Verbal Identity <br /> - Tagline exploration <br /> - Communication style guide <br />
            </p>
          </div>
        </div>
        <div id="sample">
          <div class="phone"><img src={phone} alt="phone" style={{ height: '400px' }} /> </div>
          <div className="mainsample">
            <div class="sample1">
              <h3>
                Sample Headline
              </h3>
              <p>
                Sample text. Click to select the text box. Click again or double click to start editing the text.
              </p>
            </div>
            <div class="sample2">
              <h3>
                Sample Headline
              </h3>
              <p>
                Sample text. Click to select the text box. Click again or double click to start editing the text.
              </p>
            </div>
            <div class="sample3">
              <h3>
                Sample Headline
              </h3>
              <p>
                Sample text. Click to select the text box. Click again or double click to start editing the text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

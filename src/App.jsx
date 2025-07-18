import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <img src="/logo.png" className="logo"></img>
        <h1 className="title">Fact Matic</h1>
        <p className="info">Get your daily facts from Fact Matic.</p>
        <div className="button-container">
          <button>
            <a href="https://www.tiktok.com/@fact_matic?lang=en">
              Check out my TikTok!
            </a>
          </button>
          <button>
            <a href="https://www.instagram.com/maticfact/">
              Check out my Instagram!
            </a>
          </button>
          <button>
            <a href="https://www.threads.com/@maticfact">
              Check out my Thread!
            </a>
          </button>
          <button>
            <a href="">Buy my 30 days, 30 facts book!</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App

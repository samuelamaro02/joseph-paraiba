import './App.css'
import { HomilyContent } from './HomilyContent'

function App() {
  return (
    <div className="liturgical-page">
      <div className="content-wrapper">
        <header className="page-header">
          <div className="golden-cross">✝</div>
          <h1>Joseph</h1>
          <p className="subtitle">Testemunho de Vida</p>
        </header>

        <div className="carousel-wrapper">
          <section className="hero-image-grid">
            <div className="image-container">
              <img src="/foto 01.png" alt="Joseph da Paraíba" className="hero-image" />
              <div className="warm-overlay"></div>
            </div>
            <div className="image-container">
              <img src="/foto 02.png" alt="Joseph Testemunho 1" className="hero-image" />
              <div className="warm-overlay"></div>
            </div>
            <div className="image-container">
              <img src="/foto 03.png" alt="Joseph Testemunho 2" className="hero-image" />
              <div className="warm-overlay"></div>
            </div>
          </section>
        </div>

        <main>
          <blockquote className="highlight-quote">
            <p>“Se for para ofender Jesus de alguma forma, eu prefiro nunca sair desta cama de hospital.”</p>
          </blockquote>

          <section className="biography">
            <HomilyContent />
          </section>

          <div className="golden-divider"></div>

          <section className="prayer-request">
            <h2>Pedido de Oração</h2>
            <p>Unidos em oração, peçamos a Deus a graça de vivermos nossa vocação à santidade, a exemplo de Joseph, que soube fazer da sua dor uma oblação de amor.</p>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

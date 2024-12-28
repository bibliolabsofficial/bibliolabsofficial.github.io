export default function AppShowcase() {
  return (
    <section className='app-showcase'>
      <h2 className="app-showcase__title">Descubra nosso app</h2>

      <div className="app-showcase__cards">
        <div className="app-showcase__card">
          <img src="../../../images/audiobook-player-display.png" alt="imagem mostrando o player de audiobook dentro do aplicativo Bibliophile" />
          <h3 className='app-showcase__card-title'>Audiobooks</h3>
          <p className='app-showcase__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum, fugit totam doloremque cum, quidem sed labore, quam earum ratione ex. Officia nisi quia nobis asperiores error, illum debitis! Eveniet?</p>
        </div>

        <div className="app-showcase__card">
          <img src="../../../images/book-details-display.png" alt="imagem mostrando a tela de detalhes do livro dentro do aplicativo Bibliophile" />
          <h3 className='app-showcase__card-title'>Detalhes do livro</h3>
          <p className='app-showcase__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum, fugit totam doloremque cum, quidem sed labore, quam earum ratione ex. Officia nisi quia nobis asperiores error, illum debitis! Eveniet?</p>
        </div>

        <div className="app-showcase__card">
          <img src="../../../images/library-display.png" alt="image showcasing the library inside the Bibliophile app" />
          <h3 className='app-showcase__card-title'>Gêneros diversos</h3>
          <p className='app-showcase__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum, fugit totam doloremque cum, quidem sed labore, quam earum ratione ex. Officia nisi quia nobis asperiores error, illum debitis! Eveniet?</p>
        </div>
      </div>
    </section>
  );
}
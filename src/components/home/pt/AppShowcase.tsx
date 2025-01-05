export default function AppShowcase() {
  return (
    <section className='app-showcase'>
      <h2 className="app-showcase__title">Descubra nosso app</h2>

      <div className="app-showcase__cards">
        <div className="app-showcase__card">
          <img src="../../../images/audiobook-player-display.png" alt="imagem mostrando o player de audiobook dentro do aplicativo Bibliophile" />
          <h3 className='app-showcase__card-title'>Audiobooks</h3>
          <p className='app-showcase__card-description'>
            Quer você esteja se deslocando, se exercitando ou relaxando em casa, nossos audiolivros dão vida aos seus livros favoritos com narrações cativantes. Explore uma vasta biblioteca de gêneros, marque seu progresso e aproveite histórias envolventes, onde e quando quiser.
          </p>
        </div>

        <div className="app-showcase__card">
          <img src="../../../images/book-details-display.png" alt="imagem mostrando a tela de detalhes do livro dentro do aplicativo Bibliophile" />
          <h3 className='app-showcase__card-title'>Leitura personalizada</h3>
          <p className='app-showcase__card-description'>Organize sua jornada literária com facilidade! Crie e gerencie listas de leitura personalizadas para acompanhar o que você quer ler, está lendo ou já leu. É sua experiência de leitura, do seu jeito!</p>
        </div>

        <div className="app-showcase__card">
          <img src="../../../images/library-display.png" alt="image showcasing the library inside the Bibliophile app" />
          <h3 className='app-showcase__card-title'>Conquistas e medalhas</h3>
          <p className='app-showcase__card-description'>Transforme sua leitura em uma jornada divertida e recompensadora! Com Bibliophile, você pode ganhar medalhas e conquistas conforme explora novos gêneros, completa livros ou atinge metas de leitura. Ler nunca foi tão envolvente e motivador!</p>
        </div>
      </div>
    </section>
  );
}

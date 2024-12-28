export default function AppShowcase() {
  return (
    <section className='app-showcase'>
      <h2 className="app-showcase__title">Discover our app</h2>

      <div className="app-showcase__cards">
        <div className="app-showcase__card">
          <img src="../../../images/audiobook-player-display.png" alt="image showcasing the audiobook player inside the Bibliophile app" />
          <h3 className='app-showcase__card-title'>Audiobooks</h3>
          <p className='app-showcase__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum, fugit totam doloremque cum, quidem sed labore, quam earum ratione ex. Officia nisi quia nobis asperiores error, illum debitis! Eveniet?</p>
        </div>

        <div className="app-showcase__card">
          <img src="../../../images/book-details-display.png" alt="image showcasing the book details screen inside the Bibliophile app" />
          <h3 className='app-showcase__card-title'>Detailed book info</h3>
          <p className='app-showcase__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum, fugit totam doloremque cum, quidem sed labore, quam earum ratione ex. Officia nisi quia nobis asperiores error, illum debitis! Eveniet?</p>
        </div>

        <div className="app-showcase__card">
          <img src="../../../images/library-display.png" alt="image showcasing the library inside the Bibliophile app" />
          <h3 className='app-showcase__card-title'>Various genres</h3>
          <p className='app-showcase__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum, fugit totam doloremque cum, quidem sed labore, quam earum ratione ex. Officia nisi quia nobis asperiores error, illum debitis! Eveniet?</p>
        </div>
      </div>
    </section>
  );
}
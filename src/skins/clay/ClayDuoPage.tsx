// Clay · Duo page — the clay console laid out for the iPhone Duo, inside the same fold simulator as
// Papercut · Duo. The Duo variant lives in ./duo and reuses ./skin's pieces and controls (edit the shared skin in
// skins-src/clay, then `npm run sync-skin -- clay`). The phone, its poses and the simulated fullscreen come from the
// papercut Duo route.
import { DuoSimulation } from '../../duo-kit/duo-simulation';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_TITLE } from '../../media';
import { ClayDuoSkin } from './duo/clay-duo-skin';

export default function ClayDuoPage() {
  return (
    <main className="duo-page">
      <header className="duo-page__header">
        <h1 className="visually-hidden">Clay · Duo</h1>
        <p className="duo-page__links">
          <a href="../">Player</a>
          <a href="https://github.com/luzbas/clay-skin-">GitHub</a>
        </p>
      </header>

      <DuoSimulation
        src={DEMO_HLS}
        poster={DEMO_POSTER}
        chapters={DEMO_CHAPTERS}
        renderSkin={(media) => <ClayDuoSkin title={DEMO_TITLE}>{media}</ClayDuoSkin>}
      />
    </main>
  );
}

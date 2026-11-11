// Clay skin demo: just the player, plus a small link to the source.
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoPlayer } from '@videojs/react/video';
import { VideoSkin, type VideoSkinProps } from './skin/video/skin';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_TITLE } from '../../media';

/** `?island=fs-desktop` (or fs-phone, phone, desktop) previews one layout, for reviewing the design. */
function previewModeFromUrl(): VideoSkinProps['previewMode'] {
  const mode = new URLSearchParams(window.location.search).get('island');
  return mode === 'desktop' || mode === 'phone' || mode === 'fs-desktop' || mode === 'fs-phone' ? mode : undefined;
}

export default function ClayPage() {
  return (
    <div className="stage">
      <h1 className="visually-hidden">Clay · Video.js skin</h1>
      <div className="stage__player">
        <VideoPlayer poster={DEMO_POSTER} title={DEMO_TITLE}>
          <VideoSkin style={{ width: '100%' }} previewMode={previewModeFromUrl()}>
            <HlsVideo src={DEMO_HLS} playsInline crossOrigin="anonymous">
              <track kind="chapters" label="English" srcLang="en" src={DEMO_CHAPTERS} default />
            </HlsVideo>
          </VideoSkin>
        </VideoPlayer>
      </div>
      <nav className="source-links" aria-label="More">
        <a className="source-link" href="./duo/">
          Duo
        </a>
        <a className="source-link" href="https://github.com/luzbas/clay-skin-">
          GitHub
        </a>
      </nav>
    </div>
  );
}

# Clay · Video.js skin

A modelling-clay diorama skin for [Video.js v10](https://videojs.org). The video plays on a clay TV standing on a floating island, and every control lives on the scenery around it: sound on the mushroom, view options in the tree, the timeline along the TV's chin. Go fullscreen and the island's pieces stand over the video's edges instead. Every piece is pressed from clay in Blender; only the letters and numbers are plain text.

Made for the Video.js Skins Design Challenge.

## Live demo

https://luzbas.github.io/clay-skin-/

Add `?island=desktop`, `phone`, `fs-desktop` or `fs-phone` to the URL to preview one layout.

## Use the skin

The skin is React + CSS on top of `@videojs/react`, with the clay pieces as WebP images in `skin/assets`. Copy `src/skins/clay/skin` into your project, install `@videojs/react`, `@videojs/core` and `cn`, then:

```tsx
import { VideoPlayer } from '@videojs/react/video';
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoSkin } from './skins/clay/skin/video/skin';

<VideoPlayer poster="https://example.com/poster.jpg" title="My video">
  <VideoSkin style={{ width: '100%' }}>
    <HlsVideo src="https://example.com/video.m3u8" playsInline crossOrigin="anonymous" />
  </VideoSkin>
</VideoPlayer>
```

A plain `<Video src="…mp4" />` works in place of `HlsVideo` too.

## iPhone Duo

The skin also has a layout for foldable phones, shown on the iPhone Duo in a fold simulator: https://luzbas.github.io/clay-skin-/duo/

Pick a pose (Horizontal or Vertical, each open or closed, or Table) and the player re-lays itself out for the inner display, the propped-up split or the closed outer display, without stopping the video. On a real foldable it reads the same signals from the browser (device posture and viewport segments).

The Duo layout is in `src/skins/clay/duo`, and needs `src/duo-kit` (fold detection and the simulator). Use `ClayDuoSkin` from `./skins/clay/duo/clay-duo-skin` in place of the regular skin. The simulator page is `duo/index.html`.

## Run locally

```bash
npm install
npm run dev
```

The demo site deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## License

Apache License 2.0, same as Video.js. See [LICENSE](LICENSE).

import { Global as GlobalConfigEmotion } from '@emotion/react';

const Fonts = () => (
  <GlobalConfigEmotion
    styles={`

    @font-face {
      font-family: 'Aeonik';
      src: url('/fonts/Aeonik-Air.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-Light.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-Light.otf') format('otf');
             font-weight: 300;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-LightItalic.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-LightItalic.otf') format('otf');
             font-weight: 300;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-Regular.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-Regular.otf') format('otf');
             font-weight: 400;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-RegularItalic.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-RegularItalic.otf') format('otf');
             font-weight: 400;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-Regular.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-Regular.otf') format('otf');
             font-weight: 500;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src:  url('/fonts/Aeonik-MediumItalic.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-MediumItalic.otf') format('otf');
             font-weight: 500;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-Bold.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-Bold.otf') format('otf');
             font-weight: 700;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-BoldItalic.woff2') format('woff2'),
        url('/fonts/AeonikTRIAL-BoldItalic.otf') format('otf');
             font-weight: 700;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Aeonik-Black.woff2') format('woff2'),
        url('/fonts/Aeonik-Black.otf') format('otf');
             font-weight: 900;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Fontspring-DEMO-integralcf-heavy.otf') format('otf');
             font-weight: 800;
             font-display: swap;
             font-style: normal;
      }       
    `}
  />
);

export default Fonts;

import { Global as GlobalConfigEmotion } from '@emotion/react';

const Fonts = () => (
  <GlobalConfigEmotion
    styles={`
    @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-Light.woff2') format('woff2');
             font-weight: 300;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-LightItalic.woff2') format('woff2');
             font-weight: 300;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-Regular.otf') format('otf');
             font-weight: 400;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-RegularItalic.otf') format('otf');
             font-weight: 400;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-Regular.otf') format('otf');
             font-weight: 500;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-MediumItalic.otf') format('otf');
             font-weight: 500;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-Bold.otf') format('otf');
             font-weight: 700;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/AeonikTRIAL-BoldItalic.otf') format('otf');
             font-weight: 700;
             font-display: swap;
             font-style: italic;
      }
      
      
      @font-face {
        font-family: 'Aeonik';
        src: url('/fonts/Fontspring-DEMO-integralcf-extrabold.otf') format('otf');
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

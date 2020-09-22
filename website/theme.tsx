import { createTheme, list, typography, createScales, colors, lightColorTheme } from '@xcorejs/ui';

export const theme = createTheme({
  ...list({
    default: {
      fontSize: '1.6rem',
      fontFamily: 'text'
    }
  }),
  ...typography({
    variants: {
      h2: {
        mt: '4rem'
      },
      h3: {
        mt: '3rem'
      }
    }
  }),
  ...createScales({
    ...colors(lightColorTheme, {
      grey: '#ddd'
    })
  })
});

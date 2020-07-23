import { createTheme, list, typography, createScales, colors, lightColorTheme, link, tag } from '@xcorejs/ui';

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
  }),
  ...link({
    variants: {
      simple: {
        textDecoration: 'none'
      }
    }
  }),
  ...tag({
    default: {
      display: 'inline-flex'
    }
  })
});

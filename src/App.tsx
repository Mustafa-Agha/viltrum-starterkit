import { FC, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';

// COMPONENTS
import Loader from 'components/loader';

// ROUTES
import Routes from 'routes/Routes';

// STORE
import { StoreContext, useStore } from 'contexts';
import { store } from 'hooks/stores';

// LOCALES
import AppLocale from 'lang';

// HOOKS
import useBodyClass from 'hooks/useBodyClass';

const App: FC = () => {
  const { mainStore } = useStore();
  const { currentTheme } = mainStore;
  const currentAppLocale = AppLocale['en'];
  const direction = 'ltr';

  useBodyClass([direction, currentTheme]);

  useEffect(() => {
    let preloader = document.getElementById('preloader');

    setTimeout(() => {
      let fadeEffect = setInterval(() => {
        if (preloader && !preloader.style.opacity) {
          preloader.style.opacity = '1';
        }

        if (preloader && parseFloat(preloader.style.opacity) > 0) {
          preloader.style.opacity = (
            parseFloat(preloader.style.opacity) - 0.1
          ).toString();
        } else if (preloader) {
          clearInterval(fadeEffect);
          preloader.style.display = 'none';
        }
      }, 50);
    }, 2000);
  }, []);

  const themes = {
    dark: '/assets/css/dark.css',
    light: '/assets/css/light.css',
  };

  return (
    <>
      <Loader />
      <StoreContext.Provider value={store}>
        <ThemeSwitcherProvider
          themeMap={themes}
          defaultTheme={currentTheme}
          insertionPoint="styles-insertion-point"
        >
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <ConfigProvider
              locale={currentAppLocale.antd}
              direction={direction}
            >
              <BrowserRouter>
                <Suspense fallback={<Loader />}>
                  <Routes />
                </Suspense>
              </BrowserRouter>
            </ConfigProvider>
          </IntlProvider>
        </ThemeSwitcherProvider>
      </StoreContext.Provider>
    </>
  );
};

export default App;

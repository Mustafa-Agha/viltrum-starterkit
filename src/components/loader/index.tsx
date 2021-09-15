import { FC } from 'react';

const Loader: FC = () => {
  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="pulse-loader">
            <div className="loader-bg">
              <div className="loader-p" />
            </div>
          </div>
          <div className="txt-loading">
            <span data-text-preloader="V" className="letters-loading">
              V
            </span>
            <span data-text-preloader="I" className="letters-loading">
              I
            </span>
            <span data-text-preloader="L" className="letters-loading">
              L
            </span>
            <span data-text-preloader="T" className="letters-loading">
              T
            </span>
            <span data-text-preloader="R" className="letters-loading">
              R
            </span>
            <span data-text-preloader="U" className="letters-loading">
              U
            </span>
            <span data-text-preloader="M" className="letters-loading">
              M
            </span>
          </div>
          <p className="text-center">
            Loading
            <span />
            <span />
            <span />
            <span />
            <span />
          </p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;

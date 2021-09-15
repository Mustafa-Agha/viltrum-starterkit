import { FC, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// LAYOUTS
import MainLayout from 'layouts';

// ROUTES
import routes from 'routes';
import authRoutes from 'routes/AuthRoutes';

// MIDDLEWARES
import AuthMiddleWare from 'routes/middlewares/AuthMiddleware';

const Routes: FC = () => {
  const [isAuthorized] = useState(true);

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>

      {authRoutes.map(({ path, component }, i) => (
        <Route key={i} path={path} component={component} exact />
      ))}

      {routes.map(({ path, component, authenticated }, i) => (
        <MainLayout key={i}>
          {isAuthorized && authenticated ? (
            <AuthMiddleWare>
              <Route path={path} component={component} exact />
            </AuthMiddleWare>
          ) : (
            <Route path={path} component={component} exact />
          )}
        </MainLayout>
      ))}
    </Switch>
  );
};

export default Routes;

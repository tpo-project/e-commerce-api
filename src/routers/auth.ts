import { LRouter } from 'laravel-expressjs-router';

export function useAuthRouter(router: LRouter) {
  /**
   * Authentications.
   */
  router.group(
    {
      prefix: '/auth',
      namespace: 'auth',
    },
    () => {
      /**
       * Login routes.
       */
      router.group(
        {
          prefix: '/login',
          namespace: 'login',
        },
        () => {
          router.post('/admin', 'admin-login-controller@login');
          router.post('/seller', 'seller-login-controller@login');
          router.post('/user', 'user-login-controller@login');
        },
      );

      /**
       * Logout routes.
       */
      router.group(
        {
          prefix: '/logout',
          namespace: 'login',
        },
        () => {
          router.post('/admin', 'admin-login-controller@logout');
          router.post('/seller', 'seller-login-controller@logout');
          router.post('/user', 'user-login-controller@logout');
        },
      );

      /**
       * Refresh token routes.
       */
      router.group(
        {
          prefix: '/refresh',
          namespace: 'login',
          middleware: ['require-refresh-token'],
        },
        () => {
          router.post('/admin', 'admin-login-controller@refresh');
          router.post('/seller', 'seller-login-controller@refresh');
          router.post('/user', 'user-login-controller@refresh');
        },
      );

      /**
       * Registration routes.
       */
      router.group(
        {
          prefix: '/register',
          namespace: 'register',
        },
        () => {
          router.post(
            '/admin',
            'admin-register-controller@register',
            'require-access-token',
            'must-be-administrator',
          );
          router.post('/seller', 'seller-register-controller@register');
          router.post('/user', 'user-register-controller@register');
        },
      );

      /**
       * Verification routes.
       */
      router.group(
        {
          prefix: '/verify',
          namespace: 'verify',
        },
        () => {
          router.post('/admin/:code', 'admin-verify-controller@verify');
          router.post('/seller/:code', 'seller-verify-controller@verify');
          router.post('/user/:code', 'user-verify-controller@verify');
        },
      );
    },
  );
}
/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/shop` | `/shop`; params?: Router.UnknownInputParams; } | { pathname: `${'/(profile)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(profile)'}/styles` | `/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}/shop` | `/shop`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(profile)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(profile)'}/styles` | `/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(app)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(app)'}/shop${`?${string}` | `#${string}` | ''}` | `/shop${`?${string}` | `#${string}` | ''}` | `${'/(profile)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(profile)'}/styles${`?${string}` | `#${string}` | ''}` | `/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/shop` | `/shop`; params?: Router.UnknownInputParams; } | { pathname: `${'/(profile)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(profile)'}/styles` | `/styles`; params?: Router.UnknownInputParams; };
    }
  }
}

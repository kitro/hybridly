export { createRouter, router, performHybridRequest, isHybridResponse } from './router/router'
export type { Router, HybridRequestOptions, NavigationResponse, HybridPayload, Frame, ResolveComponent, Method, Progress } from './router/types'

export { getRouterContext } from './context'
export type { RouterContext, RouterContextOptions } from './context'

export { definePlugin, registerHook } from './plugins'
export type { Plugin } from './plugins'

export { makeUrl, sameUrls } from './url'
export type { UrlResolvable } from './url'

export { can } from './authorization'
export type { Authorizable } from './authorization'

export { route } from './routing'
export type { RouteDefinition, GlobalRouteCollection, RoutingConfiguration, RouteName, RouteParameters } from './routing'

export type { DynamicConfiguration } from './config'

export * as constants from './constants'
export * from './types'

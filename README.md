
```
fullstack-app
├─ backend
│  ├─ .dockerignore
│  ├─ .env
│  ├─ controllers
│  │  └─ userController.js
│  ├─ Dockerfile
│  ├─ index.js
│  ├─ models
│  │  ├─ db.js
│  │  └─ userModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ prisma
│  │  └─ schema.prisma
│  ├─ prisma.config.ts
│  └─ routes
│     └─ userRoutes.js
├─ docker-compose.yml
├─ frontend
│  ├─ .next
│  │  └─ dev
│  │     ├─ build
│  │     │  ├─ chunks
│  │     │  │  ├─ 0r9g_0407~70._.js
│  │     │  │  ├─ 0r9g_0407~70._.js.map
│  │     │  │  ├─ [root-of-the-server]__048u7-j._.js
│  │     │  │  ├─ [root-of-the-server]__048u7-j._.js.map
│  │     │  │  ├─ [root-of-the-server]__0mk3y20._.js
│  │     │  │  ├─ [root-of-the-server]__0mk3y20._.js.map
│  │     │  │  ├─ [turbopack-node]_transforms_postcss_ts_0kwl4vk._.js
│  │     │  │  ├─ [turbopack-node]_transforms_postcss_ts_0kwl4vk._.js.map
│  │     │  │  ├─ [turbopack]_runtime.js
│  │     │  │  └─ [turbopack]_runtime.js.map
│  │     │  ├─ package.json
│  │     │  ├─ postcss.js
│  │     │  └─ postcss.js.map
│  │     ├─ build-manifest.json
│  │     ├─ cache
│  │     │  ├─ .rscinfo
│  │     │  ├─ next-devtools-config.json
│  │     │  └─ turbopack
│  │     │     └─ 2275bd85
│  │     │        ├─ 00000001.sst
│  │     │        ├─ 00000002.sst
│  │     │        ├─ 00000003.sst
│  │     │        ├─ 00000004.sst
│  │     │        ├─ 00000005.sst
│  │     │        ├─ 00000006.sst
│  │     │        ├─ 00000007.sst
│  │     │        ├─ 00000008.meta
│  │     │        ├─ 00000009.meta
│  │     │        ├─ 00000010.meta
│  │     │        ├─ 00000011.meta
│  │     │        ├─ 00000012.sst
│  │     │        ├─ 00000013.sst
│  │     │        ├─ 00000014.sst
│  │     │        ├─ 00000015.sst
│  │     │        ├─ 00000016.sst
│  │     │        ├─ 00000017.sst
│  │     │        ├─ 00000018.sst
│  │     │        ├─ 00000019.meta
│  │     │        ├─ 00000020.meta
│  │     │        ├─ 00000021.meta
│  │     │        ├─ 00000022.meta
│  │     │        ├─ CURRENT
│  │     │        └─ LOG
│  │     ├─ fallback-build-manifest.json
│  │     ├─ lock
│  │     ├─ logs
│  │     │  └─ next-development.log
│  │     ├─ package.json
│  │     ├─ prerender-manifest.json
│  │     ├─ routes-manifest.json
│  │     ├─ server
│  │     │  ├─ app
│  │     │  │  ├─ dashboard
│  │     │  │  │  ├─ page
│  │     │  │  │  │  ├─ app-paths-manifest.json
│  │     │  │  │  │  ├─ build-manifest.json
│  │     │  │  │  │  ├─ next-font-manifest.json
│  │     │  │  │  │  ├─ react-loadable-manifest.json
│  │     │  │  │  │  └─ server-reference-manifest.json
│  │     │  │  │  ├─ page.js
│  │     │  │  │  ├─ page.js.map
│  │     │  │  │  └─ page_client-reference-manifest.js
│  │     │  │  ├─ page
│  │     │  │  │  ├─ app-paths-manifest.json
│  │     │  │  │  ├─ build-manifest.json
│  │     │  │  │  ├─ next-font-manifest.json
│  │     │  │  │  ├─ react-loadable-manifest.json
│  │     │  │  │  └─ server-reference-manifest.json
│  │     │  │  ├─ page.js
│  │     │  │  ├─ page.js.map
│  │     │  │  └─ page_client-reference-manifest.js
│  │     │  ├─ app-paths-manifest.json
│  │     │  ├─ chunks
│  │     │  │  └─ ssr
│  │     │  │     ├─ 0r9g_0-ucnzv._.js
│  │     │  │     ├─ 0r9g_0-ucnzv._.js.map
│  │     │  │     ├─ 0r9g_0cbwg0f._.js
│  │     │  │     ├─ 0r9g_0cbwg0f._.js.map
│  │     │  │     ├─ 0r9g_0wzfu3x._.js
│  │     │  │     ├─ 0r9g_0wzfu3x._.js.map
│  │     │  │     ├─ 0r9g_next_dist_0iq1bmn._.js
│  │     │  │     ├─ 0r9g_next_dist_0iq1bmn._.js.map
│  │     │  │     ├─ 0r9g_next_dist_client_components_02pzh0k._.js
│  │     │  │     ├─ 0r9g_next_dist_client_components_02pzh0k._.js.map
│  │     │  │     ├─ 0r9g_next_dist_client_components_builtin_forbidden_0hywuao.js
│  │     │  │     ├─ 0r9g_next_dist_client_components_builtin_forbidden_0hywuao.js.map
│  │     │  │     ├─ 0r9g_next_dist_client_components_builtin_global-error_06bh~5g.js
│  │     │  │     ├─ 0r9g_next_dist_client_components_builtin_global-error_06bh~5g.js.map
│  │     │  │     ├─ 0r9g_next_dist_client_components_builtin_unauthorized_059~5ae.js
│  │     │  │     ├─ 0r9g_next_dist_client_components_builtin_unauthorized_059~5ae.js.map
│  │     │  │     ├─ 0r9g_next_dist_compiled_06fcfz5._.js
│  │     │  │     ├─ 0r9g_next_dist_compiled_06fcfz5._.js.map
│  │     │  │     ├─ 0r9g_next_dist_esm_0qjt6hs._.js
│  │     │  │     ├─ 0r9g_next_dist_esm_0qjt6hs._.js.map
│  │     │  │     ├─ 0r9g_next_dist_server_route-modules_app-page_12c9tl9._.js
│  │     │  │     ├─ 0r9g_next_dist_server_route-modules_app-page_12c9tl9._.js.map
│  │     │  │     ├─ frontend_08.fb3n._.js
│  │     │  │     ├─ frontend_08.fb3n._.js.map
│  │     │  │     ├─ frontend_0iu2u17._.js
│  │     │  │     ├─ frontend_0iu2u17._.js.map
│  │     │  │     ├─ frontend__next-internal_server_app_dashboard_page_actions_00hw-pp.js
│  │     │  │     ├─ frontend__next-internal_server_app_dashboard_page_actions_00hw-pp.js.map
│  │     │  │     ├─ frontend__next-internal_server_app_page_actions_0-u2l4c.js
│  │     │  │     ├─ frontend__next-internal_server_app_page_actions_0-u2l4c.js.map
│  │     │  │     ├─ [externals]_next_dist_0yew8f-._.js
│  │     │  │     ├─ [externals]_next_dist_0yew8f-._.js.map
│  │     │  │     ├─ [externals]__0n13xf4._.js
│  │     │  │     ├─ [externals]__0n13xf4._.js.map
│  │     │  │     ├─ [root-of-the-server]__00sqg8s._.js
│  │     │  │     ├─ [root-of-the-server]__00sqg8s._.js.map
│  │     │  │     ├─ [root-of-the-server]__0cf8oce._.js
│  │     │  │     ├─ [root-of-the-server]__0cf8oce._.js.map
│  │     │  │     ├─ [turbopack]_runtime.js
│  │     │  │     └─ [turbopack]_runtime.js.map
│  │     │  ├─ interception-route-rewrite-manifest.js
│  │     │  ├─ middleware-build-manifest.js
│  │     │  ├─ middleware-manifest.json
│  │     │  ├─ next-font-manifest.js
│  │     │  ├─ next-font-manifest.json
│  │     │  ├─ pages-manifest.json
│  │     │  ├─ server-reference-manifest.js
│  │     │  └─ server-reference-manifest.json
│  │     ├─ static
│  │     │  ├─ chunks
│  │     │  │  ├─ 0r9g_@swc_helpers_cjs_0xg1sq1._.js
│  │     │  │  ├─ 0r9g_@swc_helpers_cjs_0xg1sq1._.js.map
│  │     │  │  ├─ 0r9g_next_dist_0gdr-x8._.js
│  │     │  │  ├─ 0r9g_next_dist_0gdr-x8._.js.map
│  │     │  │  ├─ 0r9g_next_dist_0kmpk3~._.js
│  │     │  │  ├─ 0r9g_next_dist_0kmpk3~._.js.map
│  │     │  │  ├─ 0r9g_next_dist_build_polyfills_polyfill-nomodule.js
│  │     │  │  ├─ 0r9g_next_dist_build_polyfills_polyfill-nomodule.js.map
│  │     │  │  ├─ 0r9g_next_dist_client_12gpkjl._.js
│  │     │  │  ├─ 0r9g_next_dist_client_12gpkjl._.js.map
│  │     │  │  ├─ 0r9g_next_dist_client_components_builtin_global-error_0pf3wge.js
│  │     │  │  ├─ 0r9g_next_dist_compiled_0op9aht._.js
│  │     │  │  ├─ 0r9g_next_dist_compiled_0op9aht._.js.map
│  │     │  │  ├─ 0r9g_next_dist_compiled_next-devtools_index_0i25lw~.js
│  │     │  │  ├─ 0r9g_next_dist_compiled_next-devtools_index_0i25lw~.js.map
│  │     │  │  ├─ 0r9g_next_dist_compiled_react-dom_08_6uy3._.js
│  │     │  │  ├─ 0r9g_next_dist_compiled_react-dom_08_6uy3._.js.map
│  │     │  │  ├─ 0r9g_next_dist_compiled_react-server-dom-turbopack_0hsuy_2._.js
│  │     │  │  ├─ 0r9g_next_dist_compiled_react-server-dom-turbopack_0hsuy_2._.js.map
│  │     │  │  ├─ frontend_0afy_jw._.js
│  │     │  │  ├─ frontend_0afy_jw._.js.map
│  │     │  │  ├─ frontend_0rqeker._.js
│  │     │  │  ├─ frontend_12-xnqe._.js.map
│  │     │  │  ├─ frontend_src_app_dashboard_page_tsx_0pf3wge._.js
│  │     │  │  ├─ frontend_src_app_globals_0sxv6w3.css
│  │     │  │  ├─ frontend_src_app_globals_0sxv6w3.css.map
│  │     │  │  ├─ frontend_src_app_layout_tsx_0lu86yf._.js
│  │     │  │  ├─ turbopack-frontend_12-xnqe._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_00bj6vk._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_0yjw1oe._.js
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_0yjw1oe._.js.map
│  │     │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_13nwpk_._.js
│  │     │  │  └─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_13nwpk_._.js.map
│  │     │  ├─ development
│  │     │  │  ├─ _buildManifest.js
│  │     │  │  ├─ _clientMiddlewareManifest.js
│  │     │  │  └─ _ssgManifest.js
│  │     │  └─ media
│  │     │     └─ favicon.0x3dzn~oxb6tn.ico
│  │     ├─ trace
│  │     └─ types
│  │        ├─ cache-life.d.ts
│  │        ├─ routes.d.ts
│  │        └─ validator.ts
│  ├─ AGENTS.md
│  ├─ CLAUDE.md
│  ├─ eslint.config.mjs
│  ├─ next-env.d.ts
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ dashboard
│  │  │  │  └─ page.tsx
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ login
│  │  │  │  └─ login.tsx
│  │  │  ├─ order
│  │  │  └─ page.tsx
│  │  ├─ components
│  │  │  ├─ card
│  │  │  ├─ Card.tsx
│  │  │  ├─ navbar
│  │  │  ├─ Navbar.tsx
│  │  │  └─ ui
│  │  ├─ hook
│  │  ├─ services
│  │  │  ├─ api.ts
│  │  │  └─ auth.ts
│  │  ├─ store
│  │  ├─ styles
│  │  └─ types
│  └─ tsconfig.json
├─ package-lock.json
└─ package.json

```
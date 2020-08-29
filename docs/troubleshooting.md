---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

### "Property 'Proxy' doesn't exist, js engine: hermes"

> android

If [Hermes](https://reactnative.dev/docs/hermes) is enabled in your project, you probably will see a red screen with the "Property 'Proxy' doesn't exist, js engine: hermes" message.

> Quick fix: disable Hermes (not recommend).

React Native 0.63 includes v0.5.0 of hermes, wich is not compatible with this lib yet. So you could install v0.5.2-rc1 temporarily.

```sh
npm install hermes-engine@v0.5.2-rc1
```

using yarn:

```sh
yarn add hermes-engine@v0.5.2-rc1
```

And React Native React Native <= 0.62.2 includes v0.4.0 of hermes, wich is not compatible either. So you could install v0.4.2-rc1 temporarily. (since Proxy was not inside hermes before)

```sh
npm install hermes-engine@v0.4.2-rc1
```

using yarn:

```sh
yarn add hermes-engine@v0.4.2-rc1
```

> https://twitter.com/HermesEngine/status/1245136667414913024

We are actively tracking the changes to Hermes to ensure support.

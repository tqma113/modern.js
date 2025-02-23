/**
 * modified from https://github.com/farrow-js/farrow/tree/master/packages/farrow-pipeline
 * license at https://github.com/farrow-js/farrow/blob/master/LICENSE
 */
import NodeAsyncHooks from 'async_hooks';
import * as asyncHooksInterface from './asyncHooksInterface';

const createAsyncHooks = <T>() => {
  const store = new Map<number, T>();

  // eslint-disable-next-line node/no-unsupported-features/node-builtins
  const hooks = NodeAsyncHooks.createHook({
    init: (asyncId, _, triggerAsyncId) => {
      if (store.has(triggerAsyncId)) {
        const value = store.get(triggerAsyncId);
        if (value) {
          store.set(asyncId, value);
        }
      }
    },
    destroy: asyncId => {
      if (store.has(asyncId)) {
        store.delete(asyncId);
      }
    },
  });

  const set = (value: T) => {
    store.set(NodeAsyncHooks.executionAsyncId(), value);
  };

  const get = () => {
    return store.get(NodeAsyncHooks.executionAsyncId());
  };

  const clear = () => {
    store.clear();
  };

  const enable = () => {
    hooks.enable();
  };

  const disable = () => {
    hooks.disable();
    store.clear();
  };

  const entries = () => {
    return store.entries();
  };

  return {
    enable,
    disable,
    set,
    get,
    clear,
    entries,
  };
};

let enabled = false;

export const enable = () => {
  if (enabled) {
    return;
  }

  enabled = true;
  const hooks = createAsyncHooks<asyncHooksInterface.Hooks>();
  asyncHooksInterface.impl(hooks);
  hooks.enable();
};

export const disable = () => {
  enabled = false;
  asyncHooksInterface.asyncHooks?.disable();
  asyncHooksInterface.reset();
};

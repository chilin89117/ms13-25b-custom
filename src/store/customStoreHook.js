import {useEffect, useState} from 'react'

// define application-wide data to be shared among components
let globalState = {}
let globalListeners = []
let globalActions = {}

// component that only uses dispatch (i.e. ProductItem) should not have to re-render with setState
export const useCustomStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]

  // dispatch action to return new global state
  const dispatch = (actionIdentifier, payload) => {
    const newState = globalActions[actionIdentifier](globalState, payload)
    globalState = {...globalState, ...newState}
    // call setState for each component to re-render with new global state data
    for (const lsnr of globalListeners) {
      lsnr(globalState)   // this will not run for components with shouldListen set to false
    }
  }

  // register and unregister component's setState function only if shouldListen is set
  useEffect(() => {
    if (shouldListen) globalListeners.push(setState)
    return () => {
      if (shouldListen) globalListeners = globalListeners.filter(lsnr => lsnr !== setState)
    }
  }, [shouldListen])

  return [globalState, dispatch]
}

// merge new slice of actions and states with global values when new store is created
export const initStore = (stateSlice, actionSlice) => {
  if (stateSlice) globalState = {...globalState, ...stateSlice}
  globalActions = {...globalActions, ...actionSlice}
}

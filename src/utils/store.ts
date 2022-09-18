import { useStore, mapState } from 'vuex'
import { computed } from 'vue'

function useState (states: string[]) {
  const store = useStore()
  const storeStateFns = mapState(states)
  const storeState = {} as any
  Object.keys(storeStateFns).forEach(FnKey => {
    const fn = storeStateFns[FnKey].bind({ $store: store })
    storeState[FnKey] = computed(fn)
  })
  return storeState
}

export {
  useState
}
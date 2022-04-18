import create from 'zustand'
import { persist } from 'zustand/middleware'

const usePreferenceStore = create(persist((set, get) => ({
  preferences: {
    timeFormat: '12',
  },
  set: preferences => set({ preferences }),
  use12HourTime: () => get().preferences?.timeFormat === '12'
}), {
  name: 'fish-time-preferences',  
}))

export default usePreferenceStore

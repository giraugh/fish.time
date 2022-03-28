import create from 'zustand'

const useTimerStore = create(set => ({
  timerActive: false,
  startTime: null,
  start: () => set({ timerActive: true, startTime: new Date() }),
  stop: () => set({ timerActive: false, startTime: null }),
}))

export default useTimerStore

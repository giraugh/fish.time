import create from 'zustand'

const useTimerStore = create(set => ({
  timerActive: false,
  startTime: null,
  timer: null,
  start: ({ startTime }) => set({ timerActive: true, startTime }),
  update: (timer) => set({ timer, timerActive: true, startTime: new Date(timer.startTime) }),
  stop: () => set({ timer: null, timerActive: false, startTime: null }),
}))

export default useTimerStore

import { useState, useCallback, useEffect } from 'react'
import { useQuery, useMutation, useSubscription } from 'urql'

import { useTimerStore } from '/src/stores'
import { START_TIMER_MUTATION, STOP_TIMER_MUTATION } from '/src/graphql/mutations'
import { MY_CURRENT_TIMER_SUBSCRIPTION } from '/src/graphql/subscriptions'
import { GET_MY_CURRENT_TIMER_QUERY } from '/src/graphql/queries'

const useCurrentTimer = () => {
  const [description, setDescription] = useState('')
  const [projectValue, setProjectValue] = useState(null)

  const timerActive = useTimerStore(s => s.timerActive)
  const currentTimer = useTimerStore(s => s.timer)
  const startCurrent = useTimerStore(s => s.start)
  const updateCurrent = useTimerStore(s => s.update)
  const stopCurrent = useTimerStore(s => s.stop)

  // Update state from store
  useEffect(() => {
    if (currentTimer && !projectValue || !description) {
      if (currentTimer?.description) setDescription(currentTimer.description)
      if (currentTimer?.project) setProjectValue(currentTimer.project)
    }
  }, [currentTimer])

  // // Update current status from a subscription
  // const [subRes] = useSubscription({ query: MY_CURRENT_TIMER_SUBSCRIPTION }, (_, data) => data)
  // useEffect(() => {
  //   const timer = subRes?.data?.myCurrentTimer
  //    if (timer) {
  //      updateCurrent(timer)
  //    } else {
  //      setDescription('')
  //      setProjectValue(null)
  //      stopCurrent()
  //      // TODO: refetch timers / add timer to list
  //   }
  // }, [subRes?.data])

  // Update current state from a query
  const [timerRes] = useQuery({ query: GET_MY_CURRENT_TIMER_QUERY/*, pause: subRes?.data */})
  useEffect(() => {
    const timer = /*!(subRes?.data?.myCurrentTimer) && */timerRes?.data?.myCurrentTimer
     if (timer && timer.endTime === null) {
       console.log('start from', timer)
       updateCurrent(timer)
     }
  }, [timerRes?.data])

  // Timer manipulation mutations
  const [, startTimer] = useMutation(START_TIMER_MUTATION)
  const [, stopTimer] = useMutation(STOP_TIMER_MUTATION)

  // Handle play/pause
  const handleTimerButton = useCallback(async () => {
    if (!timerActive) {
      const startTime = new Date()
      startCurrent({ startTime })
      const { data } = await startTimer({ input: {
        startTime: startTime.toISOString(),
        projectID: projectValue?.id,
        description,
      }})
      updateCurrent(data?.startTimer?.timer)
    } else {
      setDescription('')
      setProjectValue(null)
      stopCurrent()
      await stopTimer({ input: {
        id: currentTimer.id,
        description,
        projectID: projectValue?.id,
        endTime: new Date().toISOString(),
        description,
      }})
    }
  }, [timerActive, description, projectValue, currentTimer?.id])

  return {
    handleTimerButton,
    description,
    projectValue,
    timerActive,
    currentTimer,
    setDescription,
    setProjectValue
  }
}

export default useCurrentTimer
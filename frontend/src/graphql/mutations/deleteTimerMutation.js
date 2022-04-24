const DELETE_TIMER_MUTATION = `
  mutation DeleteTimer($input: DeleteTimerInput!) {
    deleteTimer(input: $input) {
      timer {
        id
      }
    }
  }
`

export default DELETE_TIMER_MUTATION
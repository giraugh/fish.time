import client from 'client'

const startNewTimer = async (_parent, { input: data }) =>
  client.timer.create({ data })

const stopTimer = async (_parent, { input: { id, ...data } }) =>
  client.timer.update({ where: { id }, data })

const updateTimer = async (_parent, { input: { id, ...data }}) =>
  client.timer.update({ where: { id }, data})

const deleteTimer = async (_parent, { input: { id }}) =>
  client.timer.delete({ where: { id }})

const timerMutatations = {
  startNewTimer,
  stopTimer,
  updateTimer,
  deleteTimer,
}

export default timerMutatations
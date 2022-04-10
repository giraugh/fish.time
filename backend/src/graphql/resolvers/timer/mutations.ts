import client from 'client'

const startNewTimer = async (_parent, { input: data }) =>
  client.timer
    .create({ data })
    .then(timer => ({ timer }))

const stopTimer = async (_parent, { input: { id, ...data } }) =>
  client.timer
    .update({ where: { id }, data })
    .then(timer => ({ timer }))

const updateTimer = async (_parent, { input: { id, ...data }}) =>
  client.timer
    .update({ where: { id }, data})
    .then(timer => ({ timer }))

const deleteTimer = async (_parent, { input: { id }}) =>
  client.timer
    .delete({ where: { id }})
    .then(timer => ({ timer }))

const timerMutatations = {
  startNewTimer,
  stopTimer,
  updateTimer,
  deleteTimer,
}

export default timerMutatations
import { instance } from './'

export const startTimer = async ({ startTime = new Date() }={}) => {
  // TODO: post to api w/ current time
  // no timer details are communicated at this point
}

export const stopTimer = async ({ endTime = new Date(), projectID, tagIDs }) => {
  // TODO: post to api w/ current time for timer end time
  // also includes timer details this time
}

export const getTimers = async () => {
  await new Promise(res => window.setTimeout(res, 300))
  return [{
    id: 't-abc',
    startTime: new Date('Sat Apr 01 2022 8:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    endTime: new Date('Sat Apr 01 2022 10:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    description: 'Walking the dog',
    projectID: 'p-abc',
  }, {
    id: 't-def',
    startTime: new Date('Sat Apr 01 2022 8:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    endTime: new Date('Sat Apr 01 2022 10:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    description: 'Making pancakes',
    projectID: 'p-abc',
  }, {
    id: 't-ghi',
    startTime: new Date('Sat Apr 02 2022 21:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    endTime: new Date('Sat Apr 02 2022 23:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    description: 'Writing code',
    projectID: 'p-def',
  }, {
    id: 't-jkl',
    startTime: new Date('Sat Mar 28 2022 18:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    endTime: new Date('Sat Mar 28 2022 22:36:31 GMT+1100 (Australian Eastern Daylight Time)'),
    description: 'Sleeping-In',
    projectID: 'p-def',
  }]
}

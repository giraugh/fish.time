import { instance } from './'

export const startTimer = async ({ startTime = new Date() }) => {
  // TODO: post to api w/ current time
  // no timer details are communicated at this point
}

export const stopTimer = async ({ endTime = new Date(), projectID, tagIDs }) => {
  // TODO: post to api w/ current time for timer end time
  // also includes timer details this time
}

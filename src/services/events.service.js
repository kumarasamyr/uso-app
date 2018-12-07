import { CONFIG } from '../config/config'
import request from './common.service'

export const eventsService = {
    getEvents
}

//get all events user is subscribed to
function getEvents(userId) {
    console.log(CONFIG.api.events + `/${userId}/events?status=OPEN`)
    return request.get(CONFIG.api.events + `/${userId}/events?status=OPEN`)
}
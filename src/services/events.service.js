import { CONFIG } from '../config/config'
import request from './common.service'

export const eventsService = {
    getEvents
}

//get all events user is subscribed to
function getEvents(userId) {
    return request.get(CONFIG.api.events + `/${userId}/events?status=OPEN`)
}
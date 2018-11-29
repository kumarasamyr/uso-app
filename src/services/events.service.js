import { CONFIG } from '../config/config'
import request from './common.service'

export const eventsService = {
    getEvents
}

function getEvents(user) {
    return request.get(CONFIG.api.events + `/${user}/events?status=OPEN`)
}
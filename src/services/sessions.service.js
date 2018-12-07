import { CONFIG } from '../config/config'
import request from './common.service'

export const sessionsService = {
    getSessions
}

//get session list for particular event
function getSessions(eventId) {
    return request.get(CONFIG.api.sessions + `/events/${eventId}/sessions`)
}
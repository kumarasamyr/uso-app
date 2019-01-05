import { CONFIG } from '../config/config'
import request from './common.service'

//service to access activity stream
export const activityService = {
    getActivity,
    updateActivity,
    undoActivity
}

function getPath(user, event, activityDetails) {
    return `/users/${user.id}/event/${event.event_id}/activity?source=${activityDetails.source}&sourceId=${activityDetails.sourceId}&type=${activityDetails.type}`
}

function getBody(user, event, activityDetails) {
    const activityId = '??' // TODO: this is for type of activity, clarify which id corresponds with which 
    const attendeeId = '??' // TODO: call service with user id and event id as parameters to get attendee id, service hasnt been implemented yet
    const activityTime = getCurrentDate()

    return {
        activityId: activityId,
        eventId: event.eventId,
        attendeeId: attendeeId,
        sourceId: activityDetails.sourceId,
        activityType: activityDetails.type,
        sourceTable: activityDetails.source,
        activityTime: activityTime
    }
}

function getCurrentDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    return dd + '/' + mm + '/' + yyyy;
}

function getActivity(user, event, activityDetails) {
    const path = getPath(user, event, activityDetails)
    return request.get(CONFIG.api.sessions + path)
}

function updateActivity(user, event, activityDetails) {
    const path = getPath(user, event, activityDetails)
    const body = getBody(user, event, activityDetails)
    return request.put(CONFIG.api.sessions + path, body)
}

function undoActivity(user, event, activityDetails) {
    const path = getPath(user, event, activityDetails)
    const body = getBody(user, event, activityDetails)
    return request.delete(CONFIG.api.sessions + path, body)
}
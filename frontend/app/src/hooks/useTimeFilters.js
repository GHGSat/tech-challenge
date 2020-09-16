import { useState, useEffect } from 'react'

export const formatTime = (timestamp) => {
    const date = new Date(Number(timestamp))
    return { 
        minutes: date.getMinutes(), 
        hours: date.getHours(),
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getUTCFullYear(),
    }
}

export const formatTimeString = ({ minutes, hours, day, month, year }) => {
    return `${year}-${month}-${day}T${hours}:${minutes}`
}

export const useTimeFilters = (to, from) => {
    const [timeStrings, setTimeString] = useState({})

    useEffect(() => {
        const t = to === null ? Date.now() : to;
        const f = from === null ? Date.now() : from;
        setTimeString({
            to: formatTimeString(formatTime(t)),
            from: formatTimeString(formatTime(f))
        })
    }, [to, from])

    return timeStrings
}
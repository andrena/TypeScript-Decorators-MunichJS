export const timer = {
    startTime: 0,
    stopTime: undefined as number | undefined,
    running: false,
    start: () => {
        timer.startTime = Date.now()
        timer.running = true
    },
    stop: () => {
        timer.stopTime = Date.now()
        timer.running = false
        return timer.getDuration()
    },
    getDuration: () => {
        return ((timer.running || !timer.stopTime) ? Date.now() : timer.stopTime) - timer.startTime
    },
    printDuration: () => {
        const timeInMillis = timer.getDuration()
        if (timeInMillis > 10) {
            const timeInSeconds = timeInMillis / 1000
            console.log(`Took ${timeInSeconds.toFixed(3)} seconds`)
        } else {
            console.log(`Took ${timeInMillis.toFixed(3)} milli seconds`)
        }
    },
}
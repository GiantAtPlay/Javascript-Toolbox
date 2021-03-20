const DEBUG_ENABLED = true

const logger = {
    log: (...args) => {
        if(DEBUG_ENABLED) console.log(...args)
    },
    warn: (...args) => {
        if(DEBUG_ENABLED) console.warn(...args)
    },
    error: (...args) => {
        if(DEBUG_ENABLED) console.error(...args)
    },
    info: (...args) => {
        if(DEBUG_ENABLED) console.info(...args)
    },
    trace: (...args) => {
        if(DEBUG_ENABLED) console.trace(...args)
    }
}

export default logger
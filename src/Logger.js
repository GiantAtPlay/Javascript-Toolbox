import { noop } from './Utils'

export let log = noop
export let info = noop
export let warn = noop
export let error = noop

if(DEBUG_ENABLED){
    log = (...args)=> console.log(...args)
    info = (...args)=> console.info(...args)
    warn = (...args)=> console.warn(...args)
    error = (...args)=> console.error(...args)
}
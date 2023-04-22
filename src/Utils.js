/**
 * Perform no operation
 */
export const noop = ()=> {}

/**
 * Determine if value is defined
 */
export const isDefined = (val)=> {
    return val !== undefined && val !== null
}

/**
 * Determine if value is defined
 */
export const isUndefined = (val)=> {
    return val === undefined || val === null
}

/**
 * Checks is value is false
 */
export const isFalse = (val) => {
    return val === false
}

/**
 * Checks is value is true
 */
export const isTrue = (val) => {
    return val === true
}

/**
 * Create a deep clone of any object
 */
export const clone = (val)=> {
    return structuredClone(val)
}

/**
 * Delay execution of a function until it has not been called for a certain period
 */
export const debounce = (func, delay = 300)=> {
    let timer;
    return (...args)=> {
        clearTimeout(timer)
        timer = setTimeout(()=> func.apply(this, args), delay)
    }
}

/**
 * Restrict execution of a function to only once per period specified
 */
export const throttle = (func, delay = 300)=> {
    let paused;
    return (...args)=> {
        if(isDefined(paused) && isTrue(paused)) 
            return

        paused = true

        setTimeout(()=> {
            func.apply(this, args)
            paused = false
        }, delay)
    }
}
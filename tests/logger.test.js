import {log, info, warn, error} from '../src/Logger.js'

const msg = 'Log this message'

const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
const infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('Messages are logged to console when debugging enabled', ()=> {

    test('Logs message to console', ()=> {
        log(msg)
        if(DEBUG_ENABLED){
            expect(logSpy).toHaveBeenCalledWith(msg)
        } else {
            expect(logSpy).not.toHaveBeenCalled()
        }
    })
    
    test('Logs info message to console', ()=> {
        info(msg)
        if(DEBUG_ENABLED){
            expect(infoSpy).toHaveBeenCalledWith(msg)
        } else {
            expect(infoSpy).not.toHaveBeenCalled()
        }
    })
    
    test('Logs warning message to console', ()=> {
        warn(msg)
        if(DEBUG_ENABLED){
            expect(warnSpy).toHaveBeenCalledWith(msg)
        } else {
            expect(warnSpy).not.toHaveBeenCalled()
        }
    })
    
    test('Logs error message to console', ()=> {
        error(msg)
        if(DEBUG_ENABLED){
            expect(errorSpy).toHaveBeenCalledWith(msg)
        } else {
            expect(errorSpy).not.toHaveBeenCalled()
        }
    })
})
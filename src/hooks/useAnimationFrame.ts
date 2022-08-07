import React from 'react'

export const useAnimationFrame = (isRunning: boolean, callback = () => {}) => {
    const animationHandlerRef = React.useRef<number>(0)

    const loop = React.useCallback(() => {
        if (isRunning) {
            animationHandlerRef.current = requestAnimationFrame(loop)
            callback()
        }
    }, [isRunning, callback])

    React.useEffect(() => {
        animationHandlerRef.current = requestAnimationFrame(loop)
        return () => cancelAnimationFrame(animationHandlerRef.current)
    }, [loop])
}

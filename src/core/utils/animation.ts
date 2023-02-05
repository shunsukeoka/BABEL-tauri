export const loopAnimation = (execute: () => void) => {
    let handler = 0

    const loop = () => {
        execute()
        handler = requestAnimationFrame(loop)
    }

    handler = requestAnimationFrame(loop)

    return handler
}

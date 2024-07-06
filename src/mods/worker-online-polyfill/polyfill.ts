let onLine = navigator.onLine

addEventListener("online", (e) => {
  if (e instanceof CustomEvent)
    return
  onLine = true
})

addEventListener("offline", (e) => {
  if (e instanceof CustomEvent)
    return
  onLine = false
})

setInterval(() => {
  const onLine2 = navigator.onLine

  if (onLine2 && !onLine)
    dispatchEvent(new CustomEvent("online"))

  if (!onLine2 && onLine)
    dispatchEvent(new CustomEvent("offline"))

  onLine = onLine2
}, 1000)
import { useEffect, useState } from "react"
import { isWithinBusinessHours } from "../utils/businessHours"
import { isMobileDevice } from "../utils/isMobileDevice"

function shouldShowCallPhone() {
  return isMobileDevice() && isWithinBusinessHours()
}

export function useShowCallPhone() {
  const [showCallPhone, setShowCallPhone] = useState(false)

  useEffect(() => {
    const update = () => setShowCallPhone(shouldShowCallPhone())

    update()
    const intervalId = window.setInterval(update, 60_000)

    return () => window.clearInterval(intervalId)
  }, [])

  return showCallPhone
}

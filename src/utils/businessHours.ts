import { BUSINESS_HOURS } from "../constants/site"

const TIMEZONE = "America/Sao_Paulo"

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

function parseHoursRange(hours: string): { open: number; close: number } | null {
  if (hours.toLowerCase() === "fechado") return null

  const normalized = hours.replace(/[–—]/g, "-")
  const [open, close] = normalized.split("-").map((part) => part.trim())
  if (!open || !close) return null

  return {
    open: parseTimeToMinutes(open),
    close: parseTimeToMinutes(close),
  }
}

export function isWithinBusinessHours(now = new Date()): boolean {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: TIMEZONE,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const parts = formatter.formatToParts(now)
  const weekday = parts.find((part) => part.type === "weekday")?.value.toLowerCase() ?? ""
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0)
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0)
  const currentMinutes = hour * 60 + minute

  const todayHours = BUSINESS_HOURS.find((item) => item.day === weekday)
  if (!todayHours) return false

  const range = parseHoursRange(todayHours.hours)
  if (!range) return false

  return currentMinutes >= range.open && currentMinutes < range.close
}

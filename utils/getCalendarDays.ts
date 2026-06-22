import dayjs, { Dayjs } from "dayjs";

export function getCalendarDays(date: Dayjs) {
    const startOfMonth = date.startOf("month");
    const endOfMonth = date.endOf("month");

    // Ajustamos para que la semana empiece en lunes
    const startDay = (startOfMonth.day() + 6) % 7;

    const days = [];

    // Espacios vacíos antes del día 1
    for (let i = 0; i < startDay; i++) {
        days.push(null);
    }

    // Días del mes
    for (let i = 1; i <= endOfMonth.date(); i++) {
        days.push(startOfMonth.date(i));
    }

    return days;
}
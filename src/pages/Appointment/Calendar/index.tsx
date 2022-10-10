import { useCallback, useEffect, useMemo, useState } from "react";

// import { CalendarContainer } from "../styles";

import DayPicker, { DayModifiers } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { api } from "../../../services/api";
import { css } from "./calendar";

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface props {
  selectedDate: Date;
  SetSelectedDate: (day: Date) => void;
}

export function Calendar({ selectedDate, SetSelectedDate }: props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  useEffect(() => {
    api
      .get("/appointment/month", {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });
    return dates;
  }, [currentMonth, monthAvailability]);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      SetSelectedDate(day);
    }
  }, []);

  return (
    <div>
      <style>{css}</style>
      <DayPicker
        weekdaysShort={["D", "L", "M", "M", "J", "V", "S"]}
        fromMonth={new Date()}
        disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
        modifiers={{
          available: { daysOfWeek: [1, 2, 3, 4, 5] },
        }}
        onMonthChange={handleMonthChange}
        selectedDays={selectedDate}
        onDayClick={handleDateChange}
        months={[
          "Janvier",
          "Fevrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Aout",
          "Septembre",
          "Octobre",
          "Novembre",
          "Decembre",
        ]}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";

interface DateConverterProps {
  timestamp: string;
}

export const DateConverter: React.FC<DateConverterProps> = ({ timestamp }) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const dt = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (isSameDay(dt, today)) {
      setFormattedDate("today");
    } else if (isSameDay(dt, yesterday)) {
      setFormattedDate("yesterday");
    } else {
      const options: any = { day: "numeric", month: "short", year: "numeric" };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setFormattedDate(formatter.format(dt));
    }
  }, [timestamp]);

  // Function to check if two dates are on the same day
  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return <span>{formattedDate}</span>;
};

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

    if (dt >= today) {
      setFormattedDate("today");
    } else if (dt >= yesterday) {
      setFormattedDate("yesterday");
    } else {
      const options: any = { day: "numeric", month: "short", year: "numeric" };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setFormattedDate(formatter.format(dt));
    }
  }, [timestamp]);

  return <span>{formattedDate}</span>;
};

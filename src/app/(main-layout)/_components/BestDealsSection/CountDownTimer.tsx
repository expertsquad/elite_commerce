"use client";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  startDate: string;
  endDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  startDate,
  endDate,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const distance = end - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      if (now < start) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  return (
    <div className="container mx-auto text-center p-4">
      <div id="countdown" className="flex items-center justify-center gap-x-2">
        <div className="bg-white w-[65px] h-[65px] flex flex-col items-center justify-center rounded-md">
          <p className="text-gradient-primary font-bold text-xl">
            {timeLeft?.days}
          </p>
          <p className="text-gradient-primary text-xs uppercase font-semibold">
            Days
          </p>
        </div>
        :
        <div className="bg-white w-[65px] h-[65px] flex flex-col items-center justify-center rounded-md">
          <p className="text-gradient-primary font-bold text-xl">
            {timeLeft?.hours}
          </p>
          <p className="text-gradient-primary text-xs uppercase font-semibold">
            Hours
          </p>
        </div>
        :
        <div className="bg-white w-[65px] h-[65px] flex flex-col items-center justify-center rounded-md">
          <p className="text-gradient-primary font-bold text-xl">
            {timeLeft?.minutes}
          </p>
          <p className="text-gradient-primary text-xs uppercase font-semibold">
            Mins
          </p>
        </div>
        :
        <div className="bg-white w-[65px] h-[65px] flex flex-col items-center justify-center rounded-md">
          <p className="text-gradient-primary font-bold text-xl">
            {timeLeft?.seconds}
          </p>
          <p className="text-gradient-primary text-xs uppercase font-semibold">
            Secs
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

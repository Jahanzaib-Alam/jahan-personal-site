import dayjs from "dayjs";
import Countdown from "react-countdown";

interface PrayerCountdownProps {
  time: string;
}

export const PrayerCountdown = ({ time }: PrayerCountdownProps) => {
  return (
    <Countdown
      date={dayjs(time).toDate()}
      renderer={(props) => (
        <>
          {props.hours >= 1 ? (
            <span>
              {props.hours}h {props.minutes + 1}m left
            </span>
          ) : (
            <span>
              {props.minutes}m {props.seconds}s left
            </span>
          )}
        </>
      )}
    />
  );
};

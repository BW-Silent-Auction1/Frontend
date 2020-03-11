import React, {useState, useEffect} from 'react';

const Timer = props => {
    const timeinfo = {
        day: 86400000,
        hour: 3600000,
        minute: 60000,
        second: 1000
    };
    const endtime = props.endtime;
    const [timeleft, setTimeLeft] = useState(endtime - Date.now())
    const [readable, setReadable] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
    setInterval(() => {
        setTimeLeft(endtime - Date.now());
    }, 1000)}, []);

    useEffect(() => {
        if(timeleft > 0)
        {
            let temp_time = timeleft;

            let days = Math.floor(temp_time / timeinfo.day);
            temp_time %= timeinfo.day;
            let hours = Math.floor(temp_time / timeinfo.hour);
            temp_time %= timeinfo.hour;
            let minutes = Math.floor(temp_time / timeinfo.minute);
            temp_time %= timeinfo.minute;
            let seconds = Math.floor(temp_time / timeinfo.second);
            //console.log(temp_time);

            setReadable({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        }
    }, [timeleft]);

    return (
        <div className="timer">
            {readable.days} Days {readable.hours} Hours {readable.minutes} Minutes {readable.seconds} Seconds
        </div>
    )
};

export default Timer;
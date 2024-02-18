'use client'
import { useState, useEffect } from 'react';

const Countdown = () => {
    const targetDate: Date = new Date('2024-03-31T23:59:59');

    const calculateTimeRemaining = (targetDate: Date): { days: number, hours: number, minutes: number, seconds: number } => {
        const now: Date = new Date();
        const difference: number = targetDate.getTime() - now.getTime();
        const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes: number = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);
        console.log(timeRemaining)

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-6/12 mx-auto relative flex justify-center z-20'>
            <div className="grid grid-flow-col text-center absolute -top-20 auto-cols-max bg-base-200 px-16 py-12 text-neutral-content bg-opacity-80 backdrop-blur">

                <div className="flex flex-col uppercase border-r border-opacity-50 px-12 border-neutral-100">
                    <span className="countdown font-black text-5xl">
                        <span style={{ "--value": timeRemaining?.days } as any}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col uppercase border-r border-opacity-50 px-12 border-neutral-100">
                    <span className="countdown font-black text-5xl">
                        <span style={{ "--value": timeRemaining?.hours } as any}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col uppercase border-r border-opacity-50 px-12 border-neutral-100">
                    <span className="countdown font-black text-5xl">
                        <span style={{ "--value": timeRemaining?.minutes } as any}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col uppercase px-12">
                    <span className="countdown font-black text-5xl">
                        <span style={{ "--value": timeRemaining?.seconds } as any}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    )
}

export default Countdown
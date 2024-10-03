import { MutableRefObject, useEffect, useRef, useState } from "react";

interface TimeActivatorProps {
  intervalMS: number;
  event: keyof WindowEventMap;
}

interface TimeActivatorData {
  isActive: boolean;
}

const useTimeActivator = (props: TimeActivatorProps) => {
  const { intervalMS, event } = props;
  const [isActive, setIsActive] = useState(false);
  const timer: MutableRefObject<number | null> = useRef(null);

  useEffect(() => {
    const handler: TimerHandler = () => {
      setIsActive(false);
      timer.current = null;
    };

    const action = () => {
      setIsActive(true);
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(handler, intervalMS);
    };

    window.addEventListener(event, action);
    return () => window.removeEventListener(event, action);
  }, [event, intervalMS]);

  return {
    isActive,
  } as TimeActivatorData;
};

export { useTimeActivator };

import { useEffect, useRef } from 'react';

type CallbackFunction = () => void;

export const useInterval = (callback: CallbackFunction, delay: number) => {
  const savedCB = useRef<CallbackFunction>()
  useEffect(() => { savedCB.current = callback })

  useEffect(() => {
    function tick() {
      if (savedCB?.current) savedCB.current();
    }
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  })
}
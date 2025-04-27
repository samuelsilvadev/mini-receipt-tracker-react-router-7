import { useEffect, useRef } from "react";

export function useDelayedAction({
  isEnabled = false,
  onComplete,
  ms,
}: {
  isEnabled?: boolean;
  onComplete: () => void;
  ms: number;
}) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const timeout = setTimeout(() => onCompleteRef.current(), ms);

    return () => {
      clearTimeout(timeout);
    };
  }, [ms, isEnabled]);
}

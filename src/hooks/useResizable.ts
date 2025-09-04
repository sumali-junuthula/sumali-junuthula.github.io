import { useState, useCallback, useRef, useEffect } from 'react';

export interface ResizableState {
  width: number;
  height: number;
  x: number;
  y: number;
}

export const useResizable = (initialState: ResizableState) => {
  const [state, setState] = useState<ResizableState>(initialState);
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const resizeDirection = useRef<string>('');
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    setIsResizing(true);
    resizeDirection.current = direction;
  }, []);

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - state.x,
      y: e.clientY - state.y
    };
  }, [state.x, state.y]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const direction = resizeDirection.current;
      const rect = {
        left: state.x,
        top: state.y,
        right: state.x + state.width,
        bottom: state.y + state.height
      };

      let newState = { ...state };

      if (direction.includes('right')) {
        newState.width = Math.max(300, e.clientX - rect.left);
      }
      if (direction.includes('left')) {
        const newWidth = Math.max(300, rect.right - e.clientX);
        newState.width = newWidth;
        newState.x = rect.right - newWidth;
      }
      if (direction.includes('bottom')) {
        newState.height = Math.max(200, e.clientY - rect.top);
      }
      if (direction.includes('top')) {
        const newHeight = Math.max(200, rect.bottom - e.clientY);
        newState.height = newHeight;
        newState.y = rect.bottom - newHeight;
      }

      setState(newState);
    } else if (isDragging) {
      setState(prev => ({
        ...prev,
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      }));
    }
  }, [isResizing, isDragging, state]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    setIsDragging(false);
    resizeDirection.current = '';
  }, []);

  useEffect(() => {
    if (isResizing || isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = '';
      };
    }
  }, [isResizing, isDragging, handleMouseMove, handleMouseUp]);

  return {
    state,
    isResizing,
    isDragging,
    handleMouseDown,
    handleDragStart
  };
};

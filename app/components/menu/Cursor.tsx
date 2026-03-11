"use client";
import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
    // Refs for position tracking to avoid re-renders on every frame
    const mousePos = useRef({ x: 0, y: 0 });
    const smoothPos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });

    // States only for things that need to trigger re-renders
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Elements refs
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;

            setIsPointer(isClickable);
        };

        const mouseLeave = () => setIsVisible(false);
        const mouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseleave', mouseLeave);
        document.addEventListener('mouseenter', mouseEnter);

        // Animation Loop
        let requestId: number;
        const updatePositions = () => {
            // Smoothly interpolate positions
            // smoothPos (Main Dot) - factor 0.3 (Faster)
            smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * 0.3;
            smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * 0.3;

            // trailPos (Outer Ring) - factor 0.12 (Slower/More Delay)
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.12;
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.12;

            // Apply transforms via direct DOM manipulation for performance
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${smoothPos.current.x}px, ${smoothPos.current.y}px) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%)`;
            }

            requestId = requestAnimationFrame(updatePositions);
        };

        requestId = requestAnimationFrame(updatePositions);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseleave', mouseLeave);
            document.removeEventListener('mouseenter', mouseEnter);
            cancelAnimationFrame(requestId);
        };
    }, [isVisible, isPointer]);

    // Hide default cursor
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches) {
            const style = document.createElement('style');
            style.id = 'cursor-none';
            style.innerHTML = `
                * { cursor: none !important; }
            `;
            document.head.appendChild(style);
            return () => {
                const existingStyle = document.getElementById('cursor-none');
                if (existingStyle) document.head.removeChild(existingStyle);
            };
        }
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Outer Glow */}
            <div
                ref={glowRef}
                className="absolute w-40 h-40 bg-purple-600/10 blur-[60px] rounded-full"
                style={{ willChange: 'transform' }}
            />

            {/* Trailing Ring */}
            <div
                ref={ringRef}
                className={`absolute w-10 h-10 border border-purple-400/90 rounded-full transition-colors duration-300 ${isPointer ? 'bg-purple-500/10 border-purple-400/50' : ''}`}
                style={{ willChange: 'transform' }}
            />

            {/* Main Dot */}
            <div
                ref={dotRef}
                className="absolute w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.9)]"
                style={{ willChange: 'transform' }}
            />
        </div>
    );
};

export default Cursor;

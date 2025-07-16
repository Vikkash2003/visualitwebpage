'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedDataFlowHero() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const nodesRef = useRef([]);
    const connectionsRef = useRef([]);

    // Initialize nodes with random positions and velocities
    const initializeNodes = (canvas) => {
        const nodes = [];
        const nodeCount = 50;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                id: i,
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                pulsePhase: Math.random() * Math.PI * 2,
            });
        }

        return nodes;
    };

    // Calculate connections between nearby nodes
    const calculateConnections = (nodes, maxDistance = 120) => {
        const connections = [];

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    connections.push({
                        from: i,
                        to: j,
                        distance: distance,
                        opacity: (maxDistance - distance) / maxDistance * 0.6,
                    });
                }
            }
        }

        return connections;
    };

    // Animation loop
    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const nodes = nodesRef.current;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update node positions
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x <= 0 || node.x >= canvas.width) {
                node.vx *= -1;
                node.x = Math.max(0, Math.min(canvas.width, node.x));
            }
            if (node.y <= 0 || node.y >= canvas.height) {
                node.vy *= -1;
                node.y = Math.max(0, Math.min(canvas.height, node.y));
            }

            // Update pulse
            node.pulsePhase += 0.02;
        });

        // Recalculate connections
        const connections = calculateConnections(nodes);
        connectionsRef.current = connections;

        // Draw connections
        connections.forEach(connection => {
            const fromNode = nodes[connection.from];
            const toNode = nodes[connection.to];

            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${connection.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
        });

        // Draw nodes
        nodes.forEach(node => {
            const pulseIntensity = Math.sin(node.pulsePhase) * 0.3 + 0.7;
            const currentRadius = node.radius * pulseIntensity;

            // Outer glow
            ctx.beginPath();
            ctx.arc(node.x, node.y, currentRadius * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${node.opacity * 0.2})`;
            ctx.fill();

            // Inner core
            ctx.beginPath();
            ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147, 197, 253, ${node.opacity * pulseIntensity})`;
            ctx.fill();
        });

        animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        // Reinitialize nodes with new dimensions
        nodesRef.current = initializeNodes(canvas);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set initial canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Initialize nodes
        nodesRef.current = initializeNodes(canvas);

        // Start animation
        animate();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* Animated Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />


        </div>
    );
}
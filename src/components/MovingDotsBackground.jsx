import React, { useRef, useEffect } from "react";

const MovingDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dot class
    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2; // Random velocity
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 2 + 1; // Random size
        this.baseBrightness = Math.random() * 0.5 + 0.5; // Base brightness
      }

      update() {
        // Move dot
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        // Calculate distance from center
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = this.x - centerX;
        const dy = this.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Brightness based on distance
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        const brightness = this.baseBrightness * (1 - distance / maxDistance);

        // Draw dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
      }
    }

    // Create dots
    const dots = [];
    const numDots = 100; // Adjust number of dots
    for (let i = 0; i < numDots; i++) {
      dots.push(new Dot());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      dots.forEach((dot) => {
        dot.update();
        dot.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it stays in the background
        backgroundColor: "black", // Black background
      }}
    />
  );
};

export default MovingDotsBackground;

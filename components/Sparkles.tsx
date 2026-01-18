import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  fadeSpeed: number;
  fadingIn: boolean;
}

const Sparkles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40; // Low count for subtle elegance

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5, // Tiny sparkles
      opacity: 0,
      speedX: 0.2 + Math.random() * 0.3, // Moving right (diagonal effect)
      speedY: -0.2 - Math.random() * 0.3, // Moving up
      fadeSpeed: 0.005 + Math.random() * 0.01,
      fadingIn: true,
    });

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, index) => {
        // Update opacity
        if (p.fadingIn) {
          p.opacity += p.fadeSpeed;
          if (p.opacity >= 0.8) p.fadingIn = false;
        } else {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0) {
            particles[index] = createParticle(); // Respawn
            return;
          }
        }

        // Update position (Diagonal movement)
        p.x += p.speedX;
        p.y += p.speedY;

        // Draw diamond shape / sparkle
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Optional cross flare for larger particles
        if (p.size > 1.2 && p.opacity > 0.4) {
             ctx.beginPath();
             ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
             ctx.lineWidth = 0.5;
             ctx.moveTo(p.x - 4, p.y);
             ctx.lineTo(p.x + 4, p.y);
             ctx.moveTo(p.x, p.y - 4);
             ctx.lineTo(p.x, p.y + 4);
             ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default Sparkles;
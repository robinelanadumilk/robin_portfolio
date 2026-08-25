import { useEffect, useRef } from 'react';

/**
 * Custom hook to apply ultra-smooth 3D tilt with perspective and lighting sheen to a ref
 * @param {Object} options
 * @param {number} options.max - Max tilt rotation in degrees (default: 15)
 * @param {number} options.perspective - Perspective depth in px (default: 1000)
 * @param {number} options.scale - Scale on hover (default: 1.03)
 * @param {boolean} options.glare - Enable dynamic 3D glare sheen (default: true)
 */
export const use3DTilt = ({
  max = 14,
  perspective = 1000,
  scale = 1.02,
  glare = true
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let bounds = null;
    let glareEl = null;

    if (glare) {
      glareEl = document.createElement('div');
      glareEl.className = 'tilt-glare-layer';
      glareEl.style.position = 'absolute';
      glareEl.style.top = '0';
      glareEl.style.left = '0';
      glareEl.style.width = '100%';
      glareEl.style.height = '100%';
      glareEl.style.pointerEvents = 'none';
      glareEl.style.borderRadius = 'inherit';
      glareEl.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)';
      glareEl.style.opacity = '0';
      glareEl.style.transition = 'opacity 0.25s ease';
      glareEl.style.zIndex = '3';
      el.style.position = el.style.position || 'relative';
      el.style.overflow = 'hidden';
      el.appendChild(glareEl);
    }

    el.style.transformStyle = 'preserve-3d';
    el.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1), box-shadow 0.4s ease';

    const onMouseEnter = () => {
      bounds = el.getBoundingClientRect();
      if (glareEl) glareEl.style.opacity = '1';
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = el.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPercent = mouseX / bounds.width;
      const yPercent = mouseY / bounds.height;

      const rotateX = ((0.5 - yPercent) * (max * 2)).toFixed(2);
      const rotateY = ((xPercent - 0.5) * (max * 2)).toFixed(2);

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glareEl) {
        glareEl.style.background = `radial-gradient(circle at ${xPercent * 100}% ${yPercent * 100}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 70%)`;
      }
    };

    const onMouseLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      if (glareEl) glareEl.style.opacity = '0';
      bounds = null;
    };

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
      if (glareEl && el.contains(glareEl)) {
        el.removeChild(glareEl);
      }
    };
  }, [max, perspective, scale, glare]);

  return ref;
};

export default use3DTilt;

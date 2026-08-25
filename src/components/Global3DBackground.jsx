import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Global3DBackground.css';

const Global3DBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const bgGroup = new THREE.Group();
    scene.add(bgGroup);

    // 1. Matrix Cyber Digital Particles (Green & Cyan Starfield Stream)
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    const matrixColors = [
      new THREE.Color('#00ff88'), // Matrix Neon Green
      new THREE.Color('#00f0ff'), // Cyber Cyan
      new THREE.Color('#38ef7d'), // Toxic Green
      new THREE.Color('#10b981'), // Emerald
      new THREE.Color('#f59e0b'), // Terminal Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const col = matrixColors[Math.floor(Math.random() * matrixColors.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      // Downward falling speed like matrix code rain
      velocities.push({
        y: 0.05 + Math.random() * 0.08,
        x: (Math.random() - 0.5) * 0.01,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    bgGroup.add(particles);

    // 2. Floating Hacker Polyhedra Wireframes with Matrix Neon Glow
    const floatingShapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(2.6, 0),
      new THREE.OctahedronGeometry(2.4, 0),
      new THREE.TetrahedronGeometry(2.8, 0),
      new THREE.TorusGeometry(2.2, 0.2, 8, 28),
      new THREE.DodecahedronGeometry(2.0, 0),
    ];

    for (let i = 0; i < 8; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00ff88 : 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.18 + (i % 3) * 0.06,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 40 - 5
      );

      bgGroup.add(mesh);
      floatingShapes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.007,
        rotSpeedY: (Math.random() - 0.5) * 0.009,
        rotSpeedZ: (Math.random() - 0.5) * 0.006,
        initialY: mesh.position.y,
      });
    }

    // 3. Cyber Matrix Grid Floor
    const gridHelper = new THREE.GridHelper(100, 50, 0x00ff88, 0x064e3b);
    gridHelper.position.y = -19;
    gridHelper.position.z = 0;
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    bgGroup.add(gridHelper);

    // Mouse & Scroll Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = mouseX * 2.5;
      targetY = mouseY * 2.5;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY * 0.015;
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Camera Parallax with smooth lerp
      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY - targetScrollY - camera.position.y) * 0.03;
      camera.lookAt(0, -targetScrollY, 0);

      // Matrix Digital Rain Particle Stream Downward Animation
      const posArray = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] -= velocities[i].y;
        posArray[i * 3] += velocities[i].x;

        // Wrap around when falling below viewport
        if (posArray[i * 3 + 1] < -45) {
          posArray[i * 3 + 1] = 45;
          posArray[i * 3] = (Math.random() - 0.5) * 90;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Animate floating wireframes
      floatingShapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.rotSpeedX;
        shape.mesh.rotation.y += shape.rotSpeedY;
        shape.mesh.rotation.z += shape.rotSpeedZ;
        shape.mesh.position.y = shape.initialY + Math.sin(elapsedTime * 0.8 + index) * 2.2;
      });

      // Animate grid drift
      gridHelper.position.z = (elapsedTime * 2.5) % 2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="global-3d-bg-root">
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="global-3d-canvas-container" />

      {/* Cyber Green Matrix Glow Orbs */}
      <div className="matrix-glow-orb matrix-glow-1"></div>
      <div className="matrix-glow-orb matrix-glow-2"></div>
      <div className="matrix-glow-orb matrix-glow-3"></div>

      {/* Matrix Hex Grid Pattern Overlay */}
      <div className="matrix-hex-grid"></div>
    </div>
  );
};

export default Global3DBackground;

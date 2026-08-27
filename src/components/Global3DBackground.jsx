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
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const bgGroup = new THREE.Group();
    scene.add(bgGroup);

    // 1. Subtle J.A.R.V.I.S. Ambient Constellation Particles
    const particleCount = 500;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    const jarvisColors = [
      new THREE.Color('#00f0ff'), // Arc Cyan
      new THREE.Color('#0099ff'), // Electric Blue
      new THREE.Color('#70f4ff'), // Ice Cyan
      new THREE.Color('#ffb700'), // Stark Gold
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70 - 10;

      const col = jarvisColors[Math.floor(Math.random() * jarvisColors.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      velocities.push({
        y: 0.02 + Math.random() * 0.04,
        x: (Math.random() - 0.5) * 0.01,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    bgGroup.add(particles);

    // 2. Subtle Background Depth Wireframes (placed in periphery)
    const floatingShapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(2.0, 0),
      new THREE.OctahedronGeometry(1.8, 0),
      new THREE.TetrahedronGeometry(2.2, 0),
      new THREE.TorusGeometry(1.8, 0.1, 8, 24),
    ];

    for (let i = 0; i < 6; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0xffb700,
        wireframe: true,
        transparent: true,
        opacity: 0.09,
      });

      const mesh = new THREE.Mesh(geo, mat);
      // Place outside center viewport
      const xSide = i % 2 === 0 ? 1 : -1;
      mesh.position.set(
        xSide * (28 + Math.random() * 25),
        (Math.random() - 0.5) * 60,
        -15 - Math.random() * 20
      );

      bgGroup.add(mesh);
      floatingShapes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.005,
        rotSpeedY: (Math.random() - 0.5) * 0.006,
        rotSpeedZ: (Math.random() - 0.5) * 0.004,
        initialY: mesh.position.y,
      });
    }

    // 3. Cyber Arc HUD Grid Floor (Lowered for depth)
    const gridHelper = new THREE.GridHelper(120, 40, 0x00f0ff, 0x041830);
    gridHelper.position.y = -25;
    gridHelper.position.z = -10;
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    bgGroup.add(gridHelper);

    // Mouse & Scroll Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = mouseX * 1.8;
      targetY = mouseY * 1.8;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY * 0.012;
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

      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY - targetScrollY - camera.position.y) * 0.03;
      camera.lookAt(0, -targetScrollY, 0);

      // Particle Stream Animation
      const posArray = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] -= velocities[i].y;
        posArray[i * 3] += velocities[i].x;

        if (posArray[i * 3 + 1] < -50) {
          posArray[i * 3 + 1] = 50;
          posArray[i * 3] = (Math.random() - 0.5) * 110;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Animate floating wireframes
      floatingShapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.rotSpeedX;
        shape.mesh.rotation.y += shape.rotSpeedY;
        shape.mesh.rotation.z += shape.rotSpeedZ;
        shape.mesh.position.y = shape.initialY + Math.sin(elapsedTime * 0.6 + index) * 1.5;
      });

      // Animate grid drift
      gridHelper.position.z = -10 + (elapsedTime * 1.8) % 3;

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

      {/* J.A.R.V.I.S. Ambient Glow Orbs */}
      <div className="jarvis-glow-orb jarvis-glow-1"></div>
      <div className="jarvis-glow-orb jarvis-glow-2"></div>
      <div className="jarvis-glow-orb jarvis-glow-3"></div>

      {/* Stark Tech Hex Grid Overlay */}
      <div className="jarvis-hex-grid"></div>
    </div>
  );
};

export default Global3DBackground;

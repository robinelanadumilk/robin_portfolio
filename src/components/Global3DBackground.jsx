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

    // Group for all floating background elements
    const bgGroup = new THREE.Group();
    scene.add(bgGroup);

    // 1. Deep 3D Starfield & Particle Constellation
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#6366f1'), // Indigo
      new THREE.Color('#ec4899'), // Magenta
      new THREE.Color('#38bdf8'), // Sky blue
      new THREE.Color('#818cf8'), // Light purple
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      scales[i] = Math.random() * 0.8 + 0.3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    bgGroup.add(particles);

    // 2. Floating 3D Geometric Wireframe Shapes in Parallax Space
    const floatingShapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.TetrahedronGeometry(2.8, 0),
      new THREE.OctahedronGeometry(2.2, 0),
      new THREE.TorusGeometry(2.0, 0.25, 8, 24),
      new THREE.DodecahedronGeometry(1.8, 0),
    ];

    for (let i = 0; i < 7; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x06b6d4 : 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.15 + (i % 3) * 0.08,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30 - 5
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      bgGroup.add(mesh);
      floatingShapes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.006,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        rotSpeedZ: (Math.random() - 0.5) * 0.005,
        floatSpeed: 0.001 + Math.random() * 0.002,
        initialY: mesh.position.y,
      });
    }

    // 3. 3D Cyber Wave Grid at the bottom plane
    const gridHelper = new THREE.GridHelper(90, 45, 0x06b6d4, 0x1e293b);
    gridHelper.position.y = -18;
    gridHelper.position.z = 0;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    bgGroup.add(gridHelper);

    // Mouse & Scroll Parallax
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

      // Smooth camera parallax
      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY - targetScrollY - camera.position.y) * 0.03;
      camera.lookAt(0, -targetScrollY, 0);

      // Rotate particle starfield slowly
      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = elapsedTime * 0.008;

      // Animate floating wireframe 3D polyhedrons
      floatingShapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.rotSpeedX;
        shape.mesh.rotation.y += shape.rotSpeedY;
        shape.mesh.rotation.z += shape.rotSpeedZ;
        shape.mesh.position.y = shape.initialY + Math.sin(elapsedTime * 0.8 + index) * 2.5;
      });

      // Animate grid drift
      gridHelper.position.z = (elapsedTime * 2) % 2;

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
      {/* Three.js 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="global-3d-canvas-container" />

      {/* Dynamic 3D Aurora Glow Lighting Orbs */}
      <div className="aurora-orb aurora-orb-1"></div>
      <div className="aurora-orb aurora-orb-2"></div>
      <div className="aurora-orb aurora-orb-3"></div>
      <div className="aurora-orb aurora-orb-4"></div>

      {/* Cyber Noise & Vignette Overlay */}
      <div className="cyber-vignette-overlay"></div>
    </div>
  );
};

export default Global3DBackground;

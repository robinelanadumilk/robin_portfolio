import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Inner Glowing Hologram Sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
      emissive: 0x2e1065,
      emissiveIntensity: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Outer Cyber Wireframe Cage
    const wireGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // 3. Cyber Ring 1 (Horizontal Torus)
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 4. Cyber Ring 2 (Vertical Torus)
    const ring2Geo = new THREE.TorusGeometry(2.5, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xec4899,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 5. Orbiting Floating Data Nodes (Small Spheres)
    const nodeCount = 12;
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.2,
    });
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4;
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius);
      mainGroup.add(node);
      nodes.push({ mesh: node, angle, speed: 0.015 + (i % 3) * 0.005, radius });
    }

    // 6. 3D Particle Cloud / Starfield
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x06b6d4);
    const c2 = new THREE.Color(0x6366f1);
    const c3 = new THREE.Color(0xec4899);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = [c1, c2, c3][Math.floor(Math.random() * 3)];
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3.5, 50);
    cyanLight.position.set(5, 4, 5);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x6366f1, 3.5, 50);
    purpleLight.position.set(-5, -4, 4);
    scene.add(purpleLight);

    const pinkLight = new THREE.PointLight(0xec4899, 2.5, 50);
    pinkLight.position.set(0, 5, -4);
    scene.add(pinkLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.9;
      targetRotationX = -y * 0.9;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia rotation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05 + 0.005;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Individual mesh rotations
      innerMesh.rotation.y = elapsedTime * 0.4;
      innerMesh.rotation.x = elapsedTime * 0.2;

      wireMesh.rotation.y = -elapsedTime * 0.25;
      wireMesh.rotation.z = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.35;

      particles.rotation.y = elapsedTime * 0.08;

      // Update orbiting nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(node.angle * 2 + elapsedTime) * 0.6;
      });

      // Floating wave animation
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="three-hero-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '320px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default ThreeHeroCanvas;

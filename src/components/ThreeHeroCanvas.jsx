import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Arc Reactor Glowing Core (Triangular / Octahedral Core)
    const coreGeo = new THREE.OctahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x00d2ff,
      emissiveIntensity: 1.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Inner Arc Core Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // 3. Stator Ring 1 (Primary Arc Cyan Torus)
    const ring1Geo = new THREE.TorusGeometry(2.2, 0.04, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.95,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 4. Stator Ring 2 (Stark Gold / Amber Torus with HUD segments)
    const ring2Geo = new THREE.TorusGeometry(2.5, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xffb700,
      emissive: 0xffb700,
      emissiveIntensity: 1.1,
      roughness: 0.1,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 5. Outer Telemetry Ring 3 (Electric Blue Thin Orbit)
    const ring3Geo = new THREE.TorusGeometry(2.8, 0.02, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x0099ff,
      transparent: true,
      opacity: 0.65,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 4;
    mainGroup.add(ring3);

    // 6. Arc Reactor Magnetic Segment Coils (10 radial coils)
    const coilCount = 10;
    const coils = [];
    const coilGeo = new THREE.BoxGeometry(0.18, 0.25, 0.55);
    const coilMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.2,
    });

    const coilRingGroup = new THREE.Group();
    for (let i = 0; i < coilCount; i++) {
      const coil = new THREE.Mesh(coilGeo, coilMat);
      const angle = (i / coilCount) * Math.PI * 2;
      const radius = 2.2;
      coil.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      coil.rotation.z = angle;
      coilRingGroup.add(coil);
      coils.push(coil);
    }
    coilRingGroup.rotation.x = Math.PI / 3;
    mainGroup.add(coilRingGroup);

    // 7. Orbiting Energy Data Nodes (Cyan & Gold)
    const nodeCount = 12;
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMatCyan = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.8,
    });
    const nodeMatGold = new THREE.MeshStandardMaterial({
      color: 0xffb700,
      emissive: 0xffb700,
      emissiveIntensity: 1.8,
    });
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const mat = i % 3 === 0 ? nodeMatGold : nodeMatCyan;
      const node = new THREE.Mesh(nodeGeo, mat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.45;
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.6, Math.sin(angle) * radius);
      mainGroup.add(node);
      nodes.push({ mesh: node, angle, speed: 0.016 + (i % 3) * 0.007, radius });
    }

    // 8. J.A.R.V.I.S. Arc Reactor Holographic Photons
    const particleCount = 260;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x00f0ff);
    const cBlue = new THREE.Color(0x0099ff);
    const cGold = new THREE.Color(0xffb700);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.1 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const colorArr = [cCyan, cBlue, cGold, cWhite];
      const chosenColor = colorArr[Math.floor(Math.random() * colorArr.length)];
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 4.5, 60);
    cyanLight.position.set(5, 5, 5);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(0xffb700, 3.5, 60);
    goldLight.position.set(-5, -4, 4);
    scene.add(goldLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.9;
      targetRotationX = -y * 0.9;
    };

    window.addEventListener('mousemove', handleMouseMove);

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

      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05 + 0.007;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      coreMesh.rotation.y = elapsedTime * 0.5;
      coreMesh.rotation.x = elapsedTime * 0.3;

      wireMesh.rotation.y = -elapsedTime * 0.35;
      wireMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.z = -elapsedTime * 0.45;
      ring3.rotation.y = elapsedTime * 0.25;
      coilRingGroup.rotation.z = elapsedTime * 0.4;

      particles.rotation.y = elapsedTime * 0.12;

      nodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(node.angle * 2 + elapsedTime) * 0.65;
      });

      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      // Arc Core pulse
      const pulseScale = 1.0 + Math.sin(elapsedTime * 3) * 0.06;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

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
        minHeight: '340px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default ThreeHeroCanvas;

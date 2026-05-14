import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ButterflyCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // --- Texture Loading ---
    const textureLoader = new THREE.TextureLoader();
    // Using the image name provided by the user
    // Fallback included if the path needs adjustment in this environment
    const butterflyTexture = textureLoader.load("/image_e27016.jpg", (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
    });

    // --- Butterfly Geometry ---
    const butterfly = new THREE.Group();
    scene.add(butterfly);

    const wingGeometry = new THREE.PlaneGeometry(2, 2, 8, 8);
    const wingMaterial = new THREE.MeshStandardMaterial({
      map: butterflyTexture,
      transparent: true,
      alphaTest: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false, // Helps with transparency overlapping
    });

    // Left Wing
    const leftWingPivot = new THREE.Group();
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    
    // UV adjustment to show left side (assuming centered butterfly image)
    const uvAttribute = wingGeometry.attributes.uv;
    for (let i = 0; i < uvAttribute.count; i++) {
        const u = uvAttribute.getX(i);
        uvAttribute.setX(i, u * 0.5); // Crop to left half
    }
    
    leftWing.position.x = -1; // Move mesh so pivot is at right edge
    leftWingPivot.add(leftWing);
    butterfly.add(leftWingPivot);

    // Right Wing
    const rightWingPivot = new THREE.Group();
    const rightWingGeometry = wingGeometry.clone();
    const rightUvAttribute = rightWingGeometry.attributes.uv;
    for (let i = 0; i < rightUvAttribute.count; i++) {
        const u = rightUvAttribute.getX(i);
        rightUvAttribute.setX(i, 0.5 + u * 0.5); // Crop to right half
    }
    
    const rightWing = new THREE.Mesh(rightWingGeometry, wingMaterial);
    rightWing.position.x = 1; // Move mesh so pivot is at left edge
    rightWingPivot.add(rightWing);
    butterfly.add(rightWingPivot);

    // Body removed at user request

    // --- Event Handlers ---
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse to Three.js coordinates (-1 to +1)
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    const startTime = Date.now();
    const animate = () => {
      const time = (Date.now() - startTime) * 0.001;
      
      // Smoothing (Lerp) for position
      targetPosRef.current.x += (mouseRef.current.x * 6 - targetPosRef.current.x) * 0.05;
      targetPosRef.current.y += (mouseRef.current.y * 4 - targetPosRef.current.y) * 0.05;
      
      butterfly.position.x = targetPosRef.current.x;
      butterfly.position.y = targetPosRef.current.y;
      butterfly.position.z = 2; // Keep it closer to camera

      // Flapping logic
      const flapSpeed = 15;
      const flapAngle = Math.sin(time * flapSpeed) * 1.2;
      leftWingPivot.rotation.y = flapAngle;
      rightWingPivot.rotation.y = -flapAngle;

      // Rotation based on movement direction
      const dx = mouseRef.current.x * 6 - butterfly.position.x;
      const dy = mouseRef.current.y * 4 - butterfly.position.y;
      butterfly.rotation.z = Math.atan2(dy, dx);
      butterfly.rotation.x = -dy * 0.2;
      butterfly.rotation.y = dx * 0.2;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        pointerEvents: "none", 
        zIndex: 9999 
      }} 
    />
  );
};


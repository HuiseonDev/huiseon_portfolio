import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeGLTFModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // const cubeLoader = new THREE.CubeTextureLoader();
    // const path = "https://threejs.org/examples/textures/cube/Bridge2/";
    // const format = ".jpg";
    // const urls = [
    //   path + "posx" + format,
    //   path + "negx" + format,
    //   path + "posy" + format,
    //   path + "negy" + format,
    //   path + "posz" + format,
    //   path + "negz" + format,
    // ];
    // const envMap = cubeLoader.load(urls);

    // ✅ GLTF 모델 불러오기
    const loader = new GLTFLoader();
    loader.load(
      "/models/marble_bust_01_4k/marble_bust_01_4k.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            // const mesh = child as THREE.Mesh;
            // mesh.material = new THREE.MeshPhysicalMaterial({
            //   color: 0xffffff, // 기본 색
            //   metalness: 0, // 금속 느낌 정도
            //   roughness: 1.0, // 표면 거칠기
            //   transmission: 0.2, // 유리 느낌(투명도)
            //   thickness: 0.5, // 두께
            //   envMap, // 환경 맵 반영
            //   envMapIntensity: 0.5, // 반사 강도
            //   clearcoat: 0.4, // 코팅
            //   clearcoatRoughness: 0.1, // 코팅 거칠기
            //   ior: 2,
            //   transparent: true,
            //   opacity: 10,
            // });
          }
        });
        model.scale.set(7, 7, 7); // 필요에 따라 조절
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("GLTF 모델 로딩 실패:", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const onResize = () => {
      if (!containerRef.current) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeGLTFModel;

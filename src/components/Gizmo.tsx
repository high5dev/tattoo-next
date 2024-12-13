import { GizmoHelper, GizmoViewport, Html } from "@react-three/drei";
import { LogoText } from "./LogoText";

export const Gizmo = () => {
    return (
      <GizmoHelper alignment="center-right" margin={[120, 80]}>
        <GizmoViewport
          axisColors={["#f00", "#398400", "#00f"]}
          labelColor="#fff"
          axisHeadScale={1}
        />
        <Html
            distanceFactor={1}
            zIndexRange={[100, 0]}
            style={{
              pointerEvents: "visibleStroke",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
              padding: "20px",
            }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <LogoText />
            </div>
          </Html>
      </GizmoHelper>
    );
  };
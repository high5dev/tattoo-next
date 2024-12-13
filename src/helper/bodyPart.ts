const bodyParts = [
    "Forehead",
    "Ocipital",
    "Left shoulder",
    "Right shoulder",
    "Chest",
    "Abdomen",
    "Back",
    "Left arm",
    "Right arm",
    "Left leg",
    "Right leg",
];

type BodyPartConfig = {
    position: [number, number, number];
    scale: [number, number, number];
    rotation: [number, number, number];
  };

const maleBodyPartConfigs: Record<string, BodyPartConfig> = {
    Forehead: {
        position: [0, 1.65, 0.1],
        scale: [0.1, 0.1, 0.05],
        rotation: [0, 0, 0],
    },
    Ocipital: {
        position: [0, 1.62, -0.05],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0],
    },
    LeftShoulder: {
        position: [-0.25, 1.35, 0],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 180],
    },
    RightShoulder: {
        position: [0.25, 1.35, 0],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 180],
    },
    Chest: {
        position: [0.05, 1.25, 0.1],
        scale: [0.16, 0.16, 0.1],
        rotation: [0, 0, 0],
    },
    Abdomen: {
        position: [0, 1, 0.1],
        scale: [0.2, 0.2, 0.1],
        rotation: [0, 0, 0],
    },
    Back: {
        position: [0, 1.15, -0.1],
        scale: [0.2, 0.2, 0.1],
        rotation: [0, 0, 0],
    },
    LeftArm: {
        position: [-0.3, 1.15, 0],
        scale: [0.05, 0.3, 0.05],
        rotation: [0.05, 0, -0.5],
    },
    RightArm: {
        position: [0.3, 1.15, 0],
        scale: [0.05, 0.3, 0.05],
        rotation: [0.05, 0, 0.5],
    },
    LeftLeg: {
        position: [-0.15, 0.7, 0.1],
        scale: [0.1, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightLeg: {
        position: [0.15, 0.7, 0.1],
        scale: [0.1, 0.3, 0.1],
        rotation: [0, 0, 0],
    }
};

const femaleBodyPartConfigs: Record<string, BodyPartConfig> = {
    Forehead: {
        position: [0, 1.65, 0.1],
        scale: [0.1, 0.1, 0.05],
        rotation: [0, 0, 0],
    },
    Ocipital: {
        position: [0, 1.62, -0.05],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0],
    },
    LeftShoulder: {
        position: [-0.25, 1.35, 0],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 180],
    },
    RightShoulder: {
        position: [0.25, 1.35, 0],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 180],
    },
    Chest: {
        position: [0.05, 1.25, 0.1],
        scale: [0.16, 0.16, 0.1],
        rotation: [0, 0, 0],
    },
    Abdomen: {
        position: [0, 1, 0.1],
        scale: [0.2, 0.2, 0.1],
        rotation: [0, 0, 0],
    },
    Back: {
        position: [0, 1.15, -0.1],
        scale: [0.2, 0.2, 0.1],
        rotation: [0, 0, 0],
    },
    LeftArm: {
        position: [-0.3, 1.15, 0],
        scale: [0.05, 0.3, 0.05],
        rotation: [0.05, 0, -0.5],
    },
    RightArm: {
        position: [0.3, 1.15, 0],
        scale: [0.05, 0.3, 0.05],
        rotation: [0.05, 0, 0.5],
    },
    LeftLeg: {
        position: [-0.15, 0.7, 0.1],
        scale: [0.1, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightLeg: {
        position: [0.15, 0.7, 0.1],
        scale: [0.1, 0.3, 0.1],
        rotation: [0, 0, 0],
    }
};

export { bodyParts, maleBodyPartConfigs, femaleBodyPartConfigs };
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
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Ocipital: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    LeftShoulder: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightShoulder: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Abdomen: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Chest: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Back: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    LeftArm: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightArm: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    LeftLeg: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightLeg: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    }
};

const femaleBodyPartConfigs = {
    Forehead: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Ocipital: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    LeftShoulder: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightShoulder: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Abdomen: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Chest: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    Back: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    LeftArm: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightArm: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    LeftLeg: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    },
    RightLeg: {
        position: [0, 0.13, -1.6],
        scale: [0.3, 0.3, 0.1],
        rotation: [0, 0, 0],
    }
};

export { bodyParts, maleBodyPartConfigs, femaleBodyPartConfigs };
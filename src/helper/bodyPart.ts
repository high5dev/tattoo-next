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

// General body dimensions
const bodyDimensions = {
    male: {
        height: 174, // in meters
        shoulderWidth: 45, // in meters
    },
    female: {
        height: 162, // in meters
        shoulderWidth: 40, // slightly less for females
    }
};

// Define a type for allowed body parts
type BodyPartKey = "Chest" | "Back" | "LeftArm" | "RightArm" | "LeftLeg" | "RightLeg" | "Forehead" | "Abdomen" | "Default";

// Body part proportions relative to overall body dimensions
const bodyPartProportions: Record<BodyPartKey, { widthFactor: number; heightFactor: number }> = {
    Chest: { widthFactor: 0.5, heightFactor: 0.3 },
    Back: { widthFactor: 0.6, heightFactor: 0.4 },
    LeftArm: { widthFactor: 0.15, heightFactor: 0.4 },
    RightArm: { widthFactor: 0.15, heightFactor: 0.4 },
    LeftLeg: { widthFactor: 0.2, heightFactor: 0.6 },
    RightLeg: { widthFactor: 0.2, heightFactor: 0.6 },
    Forehead: { widthFactor: 0.3, heightFactor: 0.15 },
    Abdomen: { widthFactor: 0.4, heightFactor: 0.3 },
    Default: { widthFactor: 0.3, heightFactor: 0.3 },
};

const maleBodyPartConfigs: Record<string, BodyPartConfig> = {
    Forehead: {
        position: [0, 1.65, 0.1],
        scale: [0.1, 0.1, 0.1],
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
        position: [0, 1.63, 0.13],
        scale: [0.08, 0.08, 0.08],
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

export { bodyParts, bodyDimensions, bodyPartProportions, maleBodyPartConfigs, femaleBodyPartConfigs };
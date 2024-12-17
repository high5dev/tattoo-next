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

export const calculateTattooDimensions = (
    bodyPart: string,
    tattooScales: any,
    bodyDimensions: any,
    toggleModel: string
) => {
    // Type assertion to treat bodyPart as BodyPartKey
    const partProportion = bodyPartProportions[bodyPart as BodyPartKey] || bodyPartProportions.Default;

    const scale = tattooScales[bodyPart] || [0.3, 0.3, 0.3];
    const scaleX = scale[0];
    const scaleY = scale[1];

    const baseWidth = bodyDimensions[toggleModel].shoulderWidth;
    const baseHeight = bodyDimensions[toggleModel].height;

    const tattooWidth = baseWidth * partProportion.widthFactor * scaleX;
    const tattooHeight = baseHeight * partProportion.heightFactor * scaleY;

    return { tattooWidth, tattooHeight };
};

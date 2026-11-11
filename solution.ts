const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};

let formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const latitude = coordinate[0],
    longitude = coordinate[1],
    locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

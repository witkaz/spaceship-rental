export class Spaceship {
  id: number;
  pickupLocation: string;
  dropoffLocation: string;
  name: string;
  color: string;
  wings: string;
  size: string;
  engine: string;
  description: string;
  detailedDescription: string;
  imagePath: string;
  price: number;
}

export interface SpaceshipsParams {
  pickupLocation: string;
  dropoffLocation: string;
  color?: string;
  wings?: string;
  size?: string;
  engine?: string;
}

export interface SpaceshipFilters {
  engine: string;
  color: string;
  wings: string;
}

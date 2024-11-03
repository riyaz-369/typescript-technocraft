// >----Interface Generic Type---->
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}

const poorDeveloper: Developer<{
  brand: string;
  model: string;
  display: string;
}> = {
  name: "Riyazul",
  computer: {
    brand: "HP",
    model: "450 g9",
    releaseYear: 2023,
  },
  smartWatch: {
    brand: "Samsung",
    model: "A12",
    display: "Amoled",
  },
};

interface AppleWatch {
  brand: string;
  model: string;
  heartBeatTrack: boolean;
  sleepTrack: boolean;
}

interface Bike {
  name: string;
  model: string;
  cc: number;
}

const richDeveloper: Developer<AppleWatch, Bike> = {
  name: "John doe",
  computer: {
    brand: "Mac",
    model: "M3",
    releaseYear: 2024,
  },
  smartWatch: {
    brand: "Apple",
    model: "M12",
    heartBeatTrack: true,
    sleepTrack: true,
  },
  bike: {
    name: "Yamaha",
    model: "FZ5",
    cc: 200,
  },
};

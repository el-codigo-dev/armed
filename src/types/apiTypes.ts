export interface ISale {
  image: string;
  title: string;
  dates: string;
  _id: string
}

export interface IDoctor {
  experience: string;
  education: [];
  image: string;
  middle_name: string;
  name: string;
  surname: string;
  order: number;
  _id: string;
  post: string;
  medicine_directions: iMedicineDirection[];
}

export interface iMedicineDirection {
  _id: string;
  name: string;
  urlName: string;
  doctorDirectionName: string;
  color: string;
  hoverColor: string;
  __v: number;
  description: string;
  descriptionReasons: string;
  image: string;
  reasons: string[];
  slogan: string;
  order: number;
  imageMobile: string;
  heading: string;
  descriptionHeading: string;
}

export type Props = {
  apiKey: string;
  style?: StyleProps;
};

export type StyleProps = {
  // width?: number | string;
  // height?: number | string;
  // titleFontSize?: number | string;
  // descriptionFontSize?: number | string;
  imageBackgroundColor?: string;
};

export type CardProps = {
  project: ProjectProps;
  style?: StyleProps;
};

export type ProjectProps = {
  active: boolean;
  createdAt: string;
  description: string;
  github_url: string;
  image_url: string;
  language: string;
  live_url: string;
  name: string;
  updatedAt: string;
};

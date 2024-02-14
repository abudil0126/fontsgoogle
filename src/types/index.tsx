export type Font = {
  length: number;
  category: string;
  family: string;
  files: {
    italic: string;
    regular: string;
  };
  italic: string;
  regular: string;
  kind: string;
  lastModified: string;
  menu: string;
  subsets: string[];
  variants: string[];
  version: string;
};

export interface SidebarState {
  isOpen: boolean;
}

import { Team } from './team.interface';
export interface Infopage {
  title?: string;
  email?: string;
  firstName?: string;
  page_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  team_work?: Team[];
}
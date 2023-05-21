import { Article } from "@/types/responses";
import BusinessIcon from '@mui/icons-material/Business';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ComputerIcon from '@mui/icons-material/Computer';

export const drawerItems = [
  {
    category: "business",
    icon: <BusinessIcon />,
  },
  {
    category: "entertainment",
    icon: <TheaterComedyIcon />,
  },
  {
    category: "general",
    icon: <NewspaperIcon />,
  },
  {
    category: "health",
    icon: <HealthAndSafetyIcon />,
  },
  {
    category: "science",
    icon: <ScienceIcon />,
  },
  {
    category: "sports",
    icon: <SportsBasketballIcon />,
  },
  {
    category: "technology",
    icon: <ComputerIcon />,
  },
];

export const newsCategories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

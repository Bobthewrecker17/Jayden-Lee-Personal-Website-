import CategoryActivities from "@/components/CategoryActivities";
import type { Category } from "@/data/activities";
import { useParams, Navigate } from "react-router-dom";

const validCategories = ["school", "faith", "volunteering", "research"];

const categoryMap: Record<string, Category> = {
  school: "School",
  faith: "Faith",
  volunteering: "Volunteering",
  research: "Research",
};

const ActivityCategory = () => {
  const { category } = useParams<{ category: string }>();

  if (!category || !validCategories.includes(category)) {
    return <Navigate to="/activities" replace />;
  }

  return <CategoryActivities category={categoryMap[category]} />;
};

export default ActivityCategory;

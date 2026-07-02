import { useParams, Navigate } from "react-router-dom";
import { findActivity } from "@/data/activities";
import ActivityDetail from "@/components/ActivityDetail";
import AgenticAIDetail from "@/components/AgenticAIDetail";
import AISeniorCenterDetail from "@/components/AISeniorCenterDetail";
import BioVibeDetail from "@/components/BioVibeDetail";
import FishDetail from "@/components/FishDetail";
import GenerationCodeDetail from "@/components/GenerationCodeDetail";
import GuatemalaDetail from "@/components/GuatemalaDetail";
import HwarangDetail from "@/components/HwarangDetail";
import NavajoDetail from "@/components/NavajoDetail";
import SocraticSparkDetail from "@/components/SocraticSparkDetail";
import YouthPraiseTeamDetail from "@/components/YouthPraiseTeamDetail";

const ActivityDetailPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  if (!category || !slug) return <Navigate to="/activities" replace />;

  const activity = findActivity(category, slug);

  if (!activity) return <Navigate to="/activities" replace />;

  if (activity.slug === "hwarang-youth-foundation") {
    return <HwarangDetail activity={activity} />;
  }

  if (activity.slug === "guatemala-medical-camp") {
    return <GuatemalaDetail activity={activity} />;
  }

  if (activity.slug === "biovibe-startup") {
    return <BioVibeDetail activity={activity} />;
  }

  if (activity.slug === "socratic-spark-project") {
    return <SocraticSparkDetail activity={activity} />;
  }

  if (activity.slug === "friends-in-serving-him") {
    return <FishDetail activity={activity} />;
  }

  if (activity.slug === "generation-code") {
    return <GenerationCodeDetail activity={activity} />;
  }

  if (activity.slug === "chamber-orchestra") {
    return <Navigate to="/music" replace />;
  }

  if (activity.slug === "ai-senior-center-workshops") {
    return <AISeniorCenterDetail activity={activity} />;
  }

  if (activity.slug === "navajo-mission-trip") {
    return <NavajoDetail activity={activity} />;
  }

  if (activity.slug === "agentic-ai-research") {
    return <AgenticAIDetail activity={activity} />;
  }

  if (activity.slug === "youth-praise-team") {
    return <YouthPraiseTeamDetail activity={activity} />;
  }

  return <ActivityDetail activity={activity} />;
};

export default ActivityDetailPage;

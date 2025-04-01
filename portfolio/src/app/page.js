import Collaborate from "@/components/Home Page/Collaborate";
import Banner from "@/components/Home Page/Banner";
import CaseStudy from "@/components/Home Page/CaseStudy";
import WorkExperience from "@/components/Home Page/WorkExperience";

export default function Home() {
  return (
<div className="bg-[#060608] px-5">
    <Banner/>
    <CaseStudy/>
    <WorkExperience/>
    <Collaborate/>
</div>
  );
}

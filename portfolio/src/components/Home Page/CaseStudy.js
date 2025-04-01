import CaseStudyCard from './CaseStudyCard'

const CaseStudy = () => {
    const caseStudies = [
            {
                imgSrc: "/assets/img/caseImg-1.avif",
                title: "Defi",
                description: "Web app",
            },
            {
                imgSrc: "/assets/img/caseImg-2.jpg",
                title: "Template",
                description: "Mobile Template",
            },
            {
                imgSrc: "/assets/img/caseImg-3.avif",
                title: "Art Map",
                description: "Visual Design",
            },
            {
                imgSrc: "/assets/img/caseImg-4(1).avif",
                title: "Mobile",
                description: "Mobile Design",
            },

    ];
  return (
    <div className='max-w-screen-xl mx-auto py-12 md:py-36 text-white' id="case-studies">
        {/* heading */}
        <div className='flex flex-wrap gap-3 items-center mb-16'>
            <p className='font-bold text-xl'>01</p>
            <h2 className='text-3xl sm:text-4xl text-[#ABABB5] font-bold'>Case studies</h2>
        </div>

        {/* case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {
                caseStudies.map((study, index) => (
                <CaseStudyCard key={index}
                imgSrc={study.imgSrc}
                title={study.title} 
                description={study.description}
                />
                ))
            }
        </div>
    </div>
  )
}

export default CaseStudy
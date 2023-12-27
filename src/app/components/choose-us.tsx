import CareerForm from "@/components/ui/career-form";

const ChooseUs = () => {
  return (
    <section id="career-form" className="career-section md:hidden">
      <div className="section-wrapper">
        <div className="container mx-auto max-w-[480px] py-14">
          <h2 className="hidden">Career form</h2>
          <CareerForm />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

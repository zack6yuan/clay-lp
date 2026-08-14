import TestimonialCard from '@/components/TestimonialCard';
import SectionHeader from '@/components/SectionHeader';

export default function Testimonials() {
  return (
    <section className="flex flex-col space-y-15 px-10">
      <SectionHeader color="yellow" eyebrow={'Lorem Ipsum'} title={'Quis nostrud exercitation'} />
      <TestimonialCard
        testimonial={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"`}
        color="red"
        author={"Lorem Ipsum"}
        description={'Dolor. Amet Co.'}      />
      <TestimonialCard
        testimonial={`“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.”`}
        color="yellow"
        author={"Dolor Sit"}
        description={"Ipsum. Elit Inc."}
      />
      <TestimonialCard
        testimonial={`"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur."`}
        color="blue"
        author={"Amet Elit"}
        description={"Sed. Tempor Ltd."}
      />
    </section>
  )
}
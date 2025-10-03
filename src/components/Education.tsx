import { EducationSection } from './EducationSection';
import { CertificationsSection } from './CertificationsSection';

export default function Education() {


    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <EducationSection />
            <CertificationsSection />
        </section>
    );
};
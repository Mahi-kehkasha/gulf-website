import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import {projects} from '@/data/experience';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: 'Our Experience - GPSS',
    description: 'Our portfolio of successful projects across various industries.',
  };
}

export default async function ExperiencePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Experience"
          subtitle="Successful projects delivered across various industries"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-charcoal-800 border-b-2 border-primary-500/20">
                <th className="p-4 text-left font-semibold text-gray-100">
                  #
                </th>
                <th className="p-4 text-left font-semibold text-gray-100">
                  Client
                </th>
                <th className="p-4 text-left font-semibold text-gray-100">
                  Job Description
                </th>
                <th className="p-4 text-left font-semibold text-gray-100">
                  Period
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-charcoal-800 hover:bg-charcoal-800 hover:border-primary-500/10 transition-all duration-300"
                >
                  <td className="p-4 font-medium text-primary-400">
                    {project.id}
                  </td>
                  <td className="p-4 text-gray-300">{project.client}</td>
                  <td className="p-4 text-gray-400">
                    {locale === 'ar'
                      ? project.jobDescriptionAr
                      : project.jobDescription}
                  </td>
                  <td className="p-4 text-gray-500">
                    {project.from} - {project.to}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


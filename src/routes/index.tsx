import { createFileRoute } from "@tanstack/react-router";
import { KymaHero } from '@/components/kyma-hero';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: 'KYMA® — AI Automation Agency' }, { name: 'description', content: 'Custom AI systems that eliminate manual work. Scale your operations without scaling your headcount.' }, { property: 'og:title', content: 'KYMA® — AI Automation Agency' }, { property: 'og:description', content: 'Humans should do human work. AI should do everything else.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: Index,
});
function Index() {
  return <main><KymaHero /></main>;
}

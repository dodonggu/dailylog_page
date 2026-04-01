import { HomeDownloadSection } from "@/components/home-download-section";
import { HomeReadingShell } from "@/components/home-reading-shell";
import { MarketingHomePage } from "@/components/marketing-home-page";
import { SiteFooter } from "@/components/site-shell";
import { getMarketingHomeProps } from "@/lib/content/marketing-home-content";
import { homePageContent } from "@/lib/content/landing-content";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { buildMetadata } from "@/lib/site-config";

const homeEditPage = getEditablePage("/")!;
const heroSection = getEditableSection(homeEditPage, "hero")!;
const productStorySection = getEditableSection(homeEditPage, "product-story")!;
const valueSection = getEditableSection(homeEditPage, "value-cards")!;
const finalCtaSection = getEditableSection(homeEditPage, "final-cta")!;
const installNowSection = getEditableSection(homeEditPage, "install-now")!;

export const metadata = buildMetadata(homePageContent.metadata);

export default function HomePage() {
  const marketingHomeProps = getMarketingHomeProps(homePageContent);

  return (
    <HomeReadingShell>
      <MarketingHomePage
        {...marketingHomeProps}
        editAttributes={{
          hero: editableAttributes(homeEditPage, "section", heroSection),
          heroCards: heroSection.children?.map((item) => editableAttributes(homeEditPage, "item", item)),
          scenesSection: editableAttributes(homeEditPage, "section", productStorySection),
          scenes: homePageContent.scenes.map((scene) => {
            const section = getEditableSection(homeEditPage, scene.id)!;
            return {
              section: editableAttributes(homeEditPage, "section", section),
              cards: section.children?.map((item) => editableAttributes(homeEditPage, "item", item)),
            };
          }),
          values: editableAttributes(homeEditPage, "section", valueSection),
          valueCards: valueSection.children?.map((item) => editableAttributes(homeEditPage, "item", item)),
          finalCta: editableAttributes(homeEditPage, "section", finalCtaSection),
          finalCtaActions: {
            primary: editableAttributes(homeEditPage, "item", getEditableChild(finalCtaSection, "primary-cta")!),
            secondary: editableAttributes(homeEditPage, "item", getEditableChild(finalCtaSection, "secondary-cta")!),
            footerLinks: finalCtaSection.children
              ?.filter((item) => !["primary-cta", "secondary-cta"].includes(item.id))
              .map((item) => editableAttributes(homeEditPage, "item", item)),
          },
        }}
      />
      <HomeDownloadSection
        content={homePageContent.downloadSection}
        editAttributes={{
          section: editableAttributes(homeEditPage, "section", installNowSection),
          latestRelease: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-latest-release")!),
          hub: {
            primaryCta: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-primary-cta")!),
            playStore: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-play-store")!),
            iosStatus: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-ios-status")!),
            supportCard: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-support-card")!),
            stats: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-stats")!),
            handoff: editableAttributes(homeEditPage, "item", getEditableChild(installNowSection, "home-download-handoff")!),
          },
        }}
      />
      <SiteFooter />
    </HomeReadingShell>
  );
}

import changelogSource from "./changelog.generated.json";
import type { ChangelogData, ChangelogRelease } from "../types/changelog";

const changelogData = changelogSource as ChangelogData;

export const generatedChangelog = changelogData;
export const visibleChangelogReleases: ChangelogRelease[] = changelogData.releases.filter(
  (release) => !release.hidden,
);

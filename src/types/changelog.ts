export interface ChangelogRelease {
  version: string;
  publishedAt: string;
  compareUrl: string;
  downloadUrl: string;
  highlights: string[];
  fixes: string[];
  hidden: boolean;
}

export interface ChangelogData {
  generatedAt: string;
  repository: string;
  releases: ChangelogRelease[];
}

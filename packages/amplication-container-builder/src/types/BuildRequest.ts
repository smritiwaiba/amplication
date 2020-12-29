export type BuildRequest = {
  /** Desired Docker image repository */
  repository: string;
  /** Desired Docker image tag */
  tag: string;
  /** Tarball URL context */
  url: string;
  /** Map of string pairs for build-time variables */
  args: Record<string, string>;
};

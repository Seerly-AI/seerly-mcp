import { spawn } from "node:child_process";

/**
 * Opens a URL in the default browser. No shell is involved, so nothing in the URL can run as a
 * command. A failure is ignored because the caller has already printed the URL.
 */
export function openBrowser(url: URL): void {
  const [command, args] = browserCommand(url.href);
  spawn(command, args, { stdio: "ignore", detached: true })
    .on("error", () => {})
    .unref();
}

function browserCommand(href: string): [string, string[]] {
  switch (process.platform) {
    case "darwin":
      return ["open", [href]];
    case "win32":
      return ["rundll32", ["url.dll,FileProtocolHandler", href]];
    default:
      return ["xdg-open", [href]];
  }
}

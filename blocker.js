const fs = require("fs");
const os = require("os");

const platform = os.platform();

const HOSTS_PATH =
  platform === "win32"
    ? "C:\\Windows\\System32\\drivers\\etc\\hosts"
    : "/etc/hosts";

const SITES = ["youtube.com", "www.youtube.com"];
const REDIRECT_IP = "127.0.0.1";

function blockSites() {
  let content = fs.readFileSync(HOSTS_PATH, "utf8");

  let updated = false;

  SITES.forEach(site => {
    if (!content.includes(site)) {
      content += `\n${REDIRECT_IP} ${site}`;
      updated = true;
    }
  });

  fs.writeFileSync(HOSTS_PATH, content);
  console.log(updated ? "YouTube blocked successfully." : "YouTube already blocked.");
}

function unblockSites() {
  let content = fs.readFileSync(HOSTS_PATH, "utf8");

  const lines = content
    .split("\n")
    .filter(line => !SITES.some(site => line.includes(site)));

  fs.writeFileSync(HOSTS_PATH, lines.join("\n"));
  console.log("YouTube unblocked successfully.");
}

function status() {
  const content = fs.readFileSync(HOSTS_PATH, "utf8");
  const blocked = SITES.some(site => content.includes(site));
  console.log("Status:", blocked ? "Blocked" : "Unblocked");
}

// CLI handling
const command = process.argv[2];

if (!command) {
  console.log("Usage: node blocker.js [block | unblock | status]");
  process.exit(1);
}

switch (command) {
  case "block":
    blockSites();
    break;
  case "unblock":
    unblockSites();
    break;
  case "status":
    status();
    break;
  default:
    console.log("Invalid command.");
}

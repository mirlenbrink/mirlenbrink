function FindProxyForURL(url, host) {
    // If the hostname matches 'www.bing.com' and the path contains '/chat',
    // or if the hostname is 'edgeservices.bing.com' (used by Copilot in Edge),
    // then redirect to 'nochat.bing.com' to block it.
    if ((dnsDomainIs(host, "www.bing.com") && (shExpMatch(url, "*/chat*") || shExpMatch(url, "*/search*"))) ||
        dnsDomainIs(host, "edgeservices.bing.com")) {
        return "PROXY nochat.bing.com";
    }

    // Bing Chat Enterprise should still be available, so no rule is needed to block it.

    // For all other URLs, either direct them to use a corporate proxy or to connect directly
    // This should be replaced with your actual corporate proxy address if one is used.
    return "DIRECT";
}
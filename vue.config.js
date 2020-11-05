module.exports = {
    // This will change for every project
    publicPath: "/",

    // Do NOT modify the following code
    configureWebpack: {
        devServer: {
            headers: {
                // inform browsers to avoid caching pages
                "Cache-Control":
                    "must-revalidate, no-cache, no-store, no-transform, private, proxy-revalidate, max-age=5",

                // Disable embedding; see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
                "X-Frame-Options": "DENY",

                // Block XSS attacks if detected. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
                "X-XSS-Protection": "1; mode=block",

                // Respect MIME type response declarations: See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
                "X-Content-Type": "nosniff"
            }
        }
    }
};
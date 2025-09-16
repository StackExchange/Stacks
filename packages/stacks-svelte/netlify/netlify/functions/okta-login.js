exports.handler = (event, _context, callback) => {
    const queryString = Object.entries(event.queryStringParameters || {})
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

    return callback(null, {
        statusCode: 200,
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "text/html",
            "Set-Cookie": `redirect_to=${event.path}${queryString ? `?${queryString}` : ""}; Path=/; HttpOnly`,
        },
        body: `<html>
      <head>
        <title>Access denied!</title>
        <meta charset="utf-8" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@stackoverflow/stacks/dist/css/stacks.min.css"
        />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1"
        />
        <meta name="robots" content="noindex" />
      </head>
      <body class="hmn100 d-flex bg-black-025 p24">
        <div class="m-auto wmx4 bg-white bs-md bar-lg overflow-hidden">
          <div class="bg-red-200 px24 py16">
            Only Stack Exchange Inc. employees can access what’s here
          </div>
          <div class="p24 pb16 ta-center">
            <svg
              aria-hidden="true"
              class="svg-spot spotLock mb12 mx-auto"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                opacity=".2"
                d="M12 22a2 2 0 00-2 2v19a4 4 0 004 4h24a4 4 0 004-4V26a4 4 0 00-4-4H12zm6 7a5 5 0 117.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0124.35 39h-2.7a2.06 2.06 0 01-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0118 29z"
              ></path>
              <path
                d="M23 24a5 5 0 00-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0021.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 01-.6-2.86l-.06-.35A5 5 0 0023 24zm0 2a3 3 0 011.76 5.43l-.16.11a2 2 0 00-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 00-.78-1.92l-.13-.09A3 3 0 0123 26zM12 12.44V18H9a3 3 0 00-3 3v21a3 3 0 003 3h28a3 3 0 003-3V21a3 3 0 00-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44zM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3zM9 20h28a1 1 0 011 1v21a1 1 0 01-1 1H9a1 1 0 01-1-1V21a1 1 0 011-1z"
              ></path>
            </svg>
            <h1 class="fs-title mb6">Access denied</h1>
            <p class="mb24 fs-body2">
              You need to be logged in to access this site.
            </p>
    
            <a
              class="s-btn d-block s-btn__filled mb8"
              href="${process.env.OKTA_URL}"
            >
              Login with Okta
            </a>
            <a class="s-btn d-block" href="https://stackoverflow.design/">
              Go to stackoverflow.design
            </a>
          </div>
        </div>
      </body>
    </html>
    `,
    });
};

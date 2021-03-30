document.getElementById("stepsTile__cta").onclick = function () {
  var imgUrl = document.getElementById("stepsTile__imgUrl").value;
  var title = document.getElementById("stepsTile__title").value;
  var description = document.getElementById("stepsTile__description").value;
  var webUrl = document.getElementById("stepsTile__webUrl").value;

  console.log(`hello ${imgUrl} ${title} ${description} ${webUrl}`);

  var code = `
  <!-- Share Image -->

    <meta property="og:url" content="${webUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image"
        content="${imgUrl}" />

    <!-- Twitter -->

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:site" content="https://click2contact.web.app" />
    <meta property="twitter:description"
        content="${description}" />
    <meta property="twitter:image"
        content="${imgUrl}" />
  `;

  document.getElementById("stepsTile__codeTextarea").innerText = code;
};

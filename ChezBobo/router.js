function liquidPageFetcher(url, data) {
  const container = document.querySelector("#container");
  fetch(url)
    .then((response) => {
      console.log("hey");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Extraire le texte du fichier
    })
    .then((template) => {
      const engine = new liquidjs.Liquid({
        cache: true,
        //jekyllInclude: true,
        dynamicPartials: false,
        root: "./src/liquid",
        partials: "./src/liquid/components",
        layouts: "./src/liquid/layouts",
        extname: ".liquid",
      });
      return engine.parseAndRender(template, { data });
    })
    .then((html) => {
      container.innerHTML = html; // Remplacer le contenu
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

export default function (hash) {
  console.log("🚴🏼‍♀️ router.js");
  switch (hash) {
    case "":
      console.log("landing-page");
      liquidPageFetcher("./src/liquid/pages/landing.liquid", {
        message: "Bienvenue Chez Bobo",
        action: {
          href: "#login",
          textContent: "Connectez-vous",
        },
      });
      break;
    case "#login":
      console.log("login-page");
      break;
    case "#register":
      console.log("register-page");
      break;
    default:
      console.log("404 page");
      break;
  }
}

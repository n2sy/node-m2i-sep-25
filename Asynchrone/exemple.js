async function ramenerCafePourLaurent() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Café pour Laurent");
      //reject(new Error("Bistrot fermé"));
    }, 2000);
  });

  try {
    return await p;
  } catch (err) {
    return err;
  }
}

async function traitement() {
  console.log("Traitement 1");
  console.log("Traitement 2");
  console.log("Traitement 3");

  //   .catch((err) => {
  //     console.log("Erreur capturée", err.toString());
  //   });

  //   ramenerCafePourLaurent().then((data) => {
  //     console.log(data);
  //   });
  const data = await ramenerCafePourLaurent();
  if (data instanceof Error) console.log("traitemnt de l'erreur");
  else console.log("traitement de la data", data);

  console.log("Traitement 5");
  console.log("Traitement 6");
  console.log("Traitement 7");
}

traitement();

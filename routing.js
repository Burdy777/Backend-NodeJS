
const getPage = (page, res, param) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  if (page === '/') {
    res.write(
      `
        Bonjour M. <strong>${getName(param)}</strong>.
        Bienvenue sur mon tutoriel <i>Node js</i> ?
      `);
}
else if (page === '/sous-sol') {
    res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
}
else if (page === '/etage/1/chambre') {
    res.write('Hé ho, c\'est privé ici !');
}
else {
  res.write('PAGE NOT EXIST')
}

 }

 const getName = (param) => { 
  const name = param;
  return name;
 }

exports.getPage = getPage;

function getGroups() {
      const defaultGroups = [
        { name: "Produto: 218593 - Tecido Linhão Rotativo 1,50 m<br>Formato: Rotativo<br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
        { name: "M1008 V01", image: src="Midias/Linhão_Rotativo/M1008 V01.jpg", quantity: 1 },
        { name: "M3000-2 V20 AMARELO", image: "Midias/Linhão_Rotativo/M3000-2 V20 AMARELO.jpg", quantity: 1 },
        { name: "M3000-2 V20 AZUL", image: "Midias/Linhão_Rotativo/M3000-2 V20 AZUL.jpg", quantity: 1 },
        { name: "M3000-2 V20 BRANCO", image: "Midias/Linhão_Rotativo/M3000-2 V20 BRANCO.jpg", quantity: 1 },
        { name: "M3000-2 V20 CINZA", image: "Midias/Linhão_Rotativo/M3000-2 V20 CINZA.jpeg", quantity: 1 },
        { name: "M3000-2 V20 MARROM", image: "Midias/Linhão_Rotativo/M3000-2 V20 MARROM.jpg", quantity: 1 },
        { name: "M3000-2 V20 SALMÃO", image: "Midias/Linhão_Rotativo/M3000-2 V20 SALMÃO.jpeg", quantity: 1 },
        { name: "M3000-2 V20 VERDE", image: "Midias/Linhão_Rotativo/M3000-2 V20 VERDE.jpg", quantity: 1 },
        { name: "M3027 V28", image: "Midias/Linhão_Rotativo/M3027 V28.jpg", quantity: 1 },
        { name: "M3027 V29", image: "Midias/Linhão_Rotativo/M3027 V29.jpg", quantity: 1 },
        { name: "M4054 V03", image: "Midias/Linhão_Rotativo/M4054 V03.jpg", quantity: 1 },
        { name: "M4054 V13", image: "Midias/Linhão_Rotativo/M4054 V13.jpg", quantity: 1 },
        { name: "M4082 V49", image: "Midias/Linhão_Rotativo/M4082 V49.jpg", quantity: 1 },
        { name: "M5015 V15", image: "Midias/Linhão_Rotativo/M5015 V15.jpg", quantity: 1 },
        {  name: "M5113 V15", image: "Midias/Linhão_Rotativo/M5113 V15.jpg", quantity: 1 },
        { name: "M5119 V12", image: "Midias/Linhão_Rotativo/M5119 V12.jpg", quantity: 1 },
        { name: "M5119 V13", image: "Midias/Linhão_Rotativo/M5119 V13.jpg", quantity: 1 },
        { name: "M5125 V11", image: "Midias/Linhão_Rotativo/M5125 V11.jpg", quantity: 1 },
        { name: "M5156 V01", image: "Midias/Linhão_Rotativo/M5156 V01.jpg", quantity: 1 },
        { name: "M5313 V14", image: "Midias/Linhão_Rotativo/M5313 V14.jpg", quantity: 1 },
        { name: "M5313 V20", image: "Midias/Linhão_Rotativo/M5313 V20.jpg", quantity: 1 },
        { name: "M5322 V06", image: "Midias/Linhão_Rotativo/M5322 V06.jpeg", quantity: 1 },
        { name: "M6143 V01", image: "Midias/Linhão_Rotativo/M6143 V01.jpg", quantity: 1 },
        { name: "M6144 V02", image: "Midias/Linhão_Rotativo/M6144 V02.jpg", quantity: 1 },
        { name: "M6145 V01", image: "Midias/Linhão_Rotativo/M6145 V01.jpeg", quantity: 1 },
        { name: "M6157 V04", image: "Midias/Linhão_Rotativo/M6157 V04.jpeg", quantity: 1 },
        ]},
           { name:"Produto: 215892 - Tecido Linhão Quadro 1,50 m<br>Formato: Toalha Fogão 70x70 cm<br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
        { name: "M5061 V01", image: src="Midias/Linhão_Quadro/Fogão/M5061 V01.jpg", quantity: 1 },
        { name: "M5066 V03", image: "Midias/Linhão_Quadro/Fogão/M5066 V03.jpg", quantity: 1 },
        { name: "M5099 V01", image: "Midias/Linhão_Quadro/Fogão/M5099 V01.jpg", quantity: 1 },
        { name: "M5100 V01", image: "Midias/Linhão_Quadro/Fogão/M5100 V01.jpg", quantity: 1 },
        { name: "M5232 V16", image: "Midias/Linhão_Quadro/Fogão/M5232 V16.jpg", quantity: 1 },
        { name: "M5258 V03", image: "Midias/Linhão_Quadro/Fogão/M5258 V03.jpeg", quantity: 1 },
        { name: "M5287 V03", image: "Midias/Linhão_Quadro/Fogão/M5287 V03.jpg", quantity: 1 },
        { name: "M5287 V13", image: "Midias/Linhão_Quadro/Fogão/M5287 V13.jpg", quantity: 1 },
        { name: "M5287 V17", image: "Midias/Linhão_Quadro/Fogão/M5287 V17.jpg", quantity: 1 },
        { name: "M5343 V01", image: "Midias/Linhão_Quadro/Fogão/M5343 V01.jpg", quantity: 1 },
        { name: "M5343 V02", image: "Midias/Linhão_Quadro/Fogão/M5343 V02.jpg", quantity: 1 },
        

    ]},
    { name: "Produto: 215892 - Tecido Linhão Quadro 1,50 m<br>Formato: Jogos Americanos<br>1 Caminho 140X40 cm / 1 Toalha de chá 65x85 cm / 4 Toalha Bandeja 30x40 cm<br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
    { name: "M1032 V01", image: src="Midias/Linhão_Quadro/Jogos americanos/M1032 V01.jpg", quantity: 1 },
    { name: "M2057 V01", image: src="Midias/Linhão_Quadro/Jogos americanos/M2057 V01.jpg", quantity: 1 },
    { name: "M2062 V01", image: src="Midias/Linhão_Quadro/Jogos americanos/M2062 V01.jpg", quantity: 1 },
    { name: "M4112 V01", image: src="Midias/Linhão_Quadro/Jogos americanos/M4112 V01.jpg", quantity: 1 },
    { name: "M5075 V01", image: src="Midias/Linhão_Quadro/Jogos americanos/M5075 V01.jpg", quantity: 1 },
    { name: "teste", image: src="Midias/Linhão_Quadro/Jogos americanos/M5075 V01.jpg", quantity: 1 },
    { name: "M5332 V06", image: src="Midias/Linhão_Quadro/Jogos americanos/M5332 V06.jpg", quantity: 1 },   


    ]},

    { name: "Produto: 215892 - Tecido Linhão Quadro 1,50 m<br>Formato: Caminho 140X40 cm / Toalha de chá 65x85 cm <br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
{ name: "M1082 V01", image: src="Midias/Linhão_Quadro/Chá e caminhos/M1082 V01.jpg", quantity: 1 },
{ name: "M4111 V01", image: src="Midias/Linhão_Quadro/Chá e caminhos/M4111 V01.jpg", quantity: 1 },        
{ name: "M4111 V02", image: src="Midias/Linhão_Quadro/Chá e caminhos/M4111 V02.jpg", quantity: 1 },
{ name: "M4116 V01", image: src="Midias/Linhão_Quadro/Chá e caminhos/M4116 V01.jpg", quantity: 1 },
{ name: "M5058 V15", image: src="Midias/Linhão_Quadro/Chá e caminhos/M5058 V15.jpg", quantity: 1 },
{ name: "M5058 V25", image: src="Midias/Linhão_Quadro/Chá e caminhos/M5058 V25.jpg", quantity: 1 },
{ name: "M5285 V13", image: src="Midias/Linhão_Quadro/Chá e caminhos/M5285 V13.jpg", quantity: 1 },
{ name: "M5285 V20", image: src="Midias/Linhão_Quadro/Chá e caminhos/M5285 V20.jpg", quantity: 1 },
{ name: "M5286 V06", image: src="Midias/Linhão_Quadro/Chá e caminhos/M5286 V06.jpg", quantity: 1 },
{ name: "M5326 V05", image: src="Midias/Linhão_Quadro/Chá e caminhos/M5326 V05.jpg", quantity: 1 },

]},

    /*{ name: "215892 - Linhão Quadro - Chá 1,50 m Larg. <br>Composição 71% Alg. / 29% Pes. - Peças com 30 metros", items: [

        

    ]},*/

    /*{ name: "215892 - Linhão Quadro - Caminho 1,50 m Larg. <br>Composição 71% Alg. / 29% Pes. - Peças com 30 metros", items: [

        

    ]},*/

    { name: "Produto: 215892 - Tecido Linhão Quadro 1,50 m<br>Formato: Toalha Redonda 1,40 m<br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
    { name: "M2054 V01", image: src="Midias/Linhão_Quadro/Redondas/M2054 V01.png", quantity: 1 },
    { name: "M2059 V01", image: src="Midias/Linhão_Quadro/Redondas/M2059 V01.png", quantity: 1 },
    { name: "M5084 V20", image: src="Midias/Linhão_Quadro/Redondas/M5084 V20.png", quantity: 1 },  
    { name: "M5098 V01", image: src="Midias/Linhão_Quadro/Redondas/M5098 V01.png", quantity: 1 },
    { name: "M5308 V15", image: src="Midias/Linhão_Quadro/Redondas/M5308 V15.png", quantity: 1 },
    { name: "M5329 V06", image: src="Midias/Linhão_Quadro/Redondas/M5329 V06.png", quantity: 1 },
    { name: "M5334 V01", image: src="Midias/Linhão_Quadro/Redondas/M5334 V01.png", quantity: 1 },
    { name: "M5339 V01", image: src="Midias/Linhão_Quadro/Redondas/M5339 V01.png", quantity: 1 },
    { name: "M4114 V01", image: src="Midias/Linhão_Quadro/Redondas/M4114 V01.png", quantity: 1 },      

    ]},

    { name: "Produto: 215892 - Tecido Linhão Quadro 1,50 m<br>Formato: Toalha Quadrada 1,40x1,40 m<br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
    { name: "M5029 V15", image: src="Midias/Linhão_Quadro/Quadradas/M5029 V15.jpg", quantity: 1 }, 
    { name: "M5063 V20", image: src="Midias/Linhão_Quadro/Quadradas/M5063 V20.jpg", quantity: 1 },     

    ]},

    { name: "Produto: 215892 - Tecido Linhão Quadro 1,50 m<br>Formato: Toalha Retangular 1,40x2,10 m<br>Composição: 71% Alg. / 29% Pes.<br>Peças com 30 metros", items: [
    { name: "M5028 V18", image: src="Midias/Linhão_Quadro/Retangulares/M5028 V18.jpg", quantity: 1 },
    { name: "M5031 V15", image: src="Midias/Linhão_Quadro/Retangulares/M5031 V15.jpg", quantity: 1 },
    { name: "M5077 V06", image: src="Midias/Linhão_Quadro/Retangulares/M5077 V06.jpg", quantity: 1 },
    { name: "M5301 V01", image: src="Midias/Linhão_Quadro/Retangulares/M5301 V01.jpg", quantity: 1 },
    { name: "M5312 V02", image: src="Midias/Linhão_Quadro/Retangulares/M5312 V02.jpg", quantity: 1 },                         

    ]},

    { name: "Produto: 215893 - Tecido P.A. Rotativo 1,50 m<br>Formato: Rotativo<br>Composição: 40% Alg. / 60% Pes.<br>Peças com 30 metros", items: [
    { name: "M3052 V01", image: src="Midias/PA_Rotativo/M3052 V01.jpg", quantity: 1 },
    { name: "M4080 V14", image: src="Midias/PA_Rotativo/M4080 V14.jpg", quantity: 1 },
    { name: "M4082 V06", image: src="Midias/PA_Rotativo/M4082 V06.jpg", quantity: 1 },
    { name: "M5043 V16", image: src="Midias/PA_Rotativo/M5043 V16.jpg", quantity: 1 },
    { name: "M5070 V02", image: src="Midias/PA_Rotativo/M5070 V02.jpg", quantity: 1 },
    { name: "M5070 V06", image: src="Midias/PA_Rotativo/M5070 V06.jpg", quantity: 1 },
    { name: "M5119 V23", image: src="Midias/PA_Rotativo/M5119 V23.jpg", quantity: 1 },
    { name: "M5229 V03", image: src="Midias/PA_Rotativo/M5229 V03.jpg", quantity: 1 }, 
    { name: "M5229 V11", image: src="Midias/PA_Rotativo/M5229 V11.jpg", quantity: 1 }, 
    { name: "M5229 V15", image: src="Midias/PA_Rotativo/M5229 V15.jpg", quantity: 1 }, 
    { name: "M5268 V20", image: src="Midias/PA_Rotativo/M5268 V20.jpg", quantity: 1 },
    { name: "M6054 V01", image: src="Midias/PA_Rotativo/M6054 V01.jpg", quantity: 1 },
    { name: "M6094 V01", image: src="Midias/PA_Rotativo/M6094 V01.jpg", quantity: 1 },
    { name: "M6095 V01", image: src="Midias/PA_Rotativo/M6095 V01.jpg", quantity: 1 },
    { name: "M6111 V07", image: src="Midias/PA_Rotativo/M6111 V07.jpg", quantity: 1 },
    { name: "M6111 V08", image: src="Midias/PA_Rotativo/M6111 V08.jpg", quantity: 1 },
    { name: "M6112 V07", image: src="Midias/PA_Rotativo/M6112 V07.jpg", quantity: 1 },
    { name: "M6112 V09", image: src="Midias/PA_Rotativo/M6112 V09.jpg", quantity: 1 },
    { name: "M6130 V01", image: src="Midias/PA_Rotativo/M6130 V01.jpg", quantity: 1 },       
        
    ]},

    { name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Toalha Fogão 70x70 cm<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [
    { name: "M3038 V15", image: src="Midias/PA_Quadro/Fogão/M5038 V15.jpg", quantity: 1 },
    { name: "M5282 V02", image: src="Midias/PA_Quadro/Fogão/M5282 V02.jpg", quantity: 1 },
    { name: "M5287 V07", image: src="Midias/PA_Quadro/Fogão/M5287 V07.jpg", quantity: 1 },
    { name: "M5343 V04", image: src="Midias/PA_Quadro/Fogão/M5343 V04.jpg", quantity: 1 },
    { name: "M5344 V03", image: src="Midias/PA_Quadro/Fogão/M5344 V03.jpg", quantity: 1 },           

    ]},

     { name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Jogos Americanos<br>1 Caminho 140X40 cm / 1 Toalha de chá 65x90 cm / 4 Toalha Bandeja 30x40 cm<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [
     { name: "M5050 V15", image: src="Midias/PA_Quadro/Jogos Americanos/M5050 V15.jpg", quantity: 1 },      

        

    ]},

     /*{ name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Toalha de Chá 65x90 cm<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [

        

    ]},*/

             /*{ name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Caminho de mesa 140x40 cm<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [

        

    ]},*/

         { name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Toalha Redonda 1,40 m<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [
         { name: "M5098 V01", image: src="Midias/PA_Quadro/Redondas/M5098 V01.png", quantity: 1 },
         { name: "M5314 V01", image: src="Midias/PA_Quadro/Redondas/M5314 V01.png", quantity: 1 },      

        

    ]},

         { name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Toalha Quadrada 1,40x1,40 m<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [
         { name: "M4055 V09", image: src="Midias/PA_Quadro/Quadradas/M4055 V09.jpg", quantity: 1 },
         { name: "M5029 V31", image: src="Midias/PA_Quadro/Quadradas/M5029 V31.jpg", quantity: 1 },
         { name: "M5030 V15", image: src="Midias/PA_Quadro/Quadradas/M5030 V15.jpg", quantity: 1 },
         { name: "M5063 V19", image: src="Midias/PA_Quadro/Quadradas/M5063 V19.jpg", quantity: 1 },
         { name: "M5073 V01", image: src="Midias/PA_Quadro/Quadradas/M5073 V01.jpg", quantity: 1 },
         { name: "M5073 V19", image: src="Midias/PA_Quadro/Quadradas/M5073 V19.jpg", quantity: 1 },
         { name: "M5076 V09", image: src="Midias/PA_Quadro/Quadradas/M5076 V09.jpg", quantity: 1 }, 
         { name: "M5302 V01", image: src="Midias/PA_Quadro/Quadradas/M5302 V01.jpg", quantity: 1 },
         { name: "M5305 V01", image: src="Midias/PA_Quadro/Quadradas/M5305 V01.jpg", quantity: 1 },  
        

    ]},

         /*{ name: "Produto: 215893 - Tecido P.A. Quadro 1,50 m<br>Formato: Toalha Retangular 1,40x2,10 m<br>Composição: 60% Alg. / 40% Pes.<br>Peças com 30 metros", items: [

        

    ]},*/
       { name: "Produto: 217166 -Tecido Premium 2,50 m Larg.<br>Formato: Rotativo <br>Composição 80% Alg. / 20% Pes. <br>Peças com 50 metros", items: [
       { name: "M1142 V19", image: src="Midias/Premium/M1142 V19.jpeg", quantity: 1 },
       { name: "M1100 V01", image: src="Midias/Premium/M1100 V01.jpeg", quantity: 1 },
       { name: "M1100 V03", image: src="Midias/Premium/M1100 V03.jpeg", quantity: 1 },
       { name: "M1100 V08", image: src="Midias/Premium/M1100 V08.jpeg", quantity: 1 },
        

    ]},

    

      ];
 const data = localStorage.getItem("groupsData");
  return data ? JSON.parse(data) : defaultGroups;
}

function renderInventory() {
  const groups = getGroups();
  const inventoryDiv = document.getElementById("inventory");
  inventoryDiv.innerHTML = "";

  groups.forEach(group => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "group";
    groupDiv.innerHTML = `<h2>${group.name}</h2>`;

    const itemsDiv = document.createElement("div");
    itemsDiv.className = (group.name.includes("Linhão Rotativo") ||
                          group.name.includes("Fogão") ||         
                          group.name.includes("Jogos Americanos") || 
                          group.name.includes("Caminho 140X40 cm / Toalha de chá 65x85 cm ") || 
                          group.name.includes("Toalha Redonda 1,40 m") || 
                          group.name.includes("Toalha Quadrada 1,40x1,40 m<") ||
                          group.name.includes("P.A. Rotativo") ||
                          group.name.includes("Tecido Premium") ||  
                          group.name.includes("Toalha Retangular")) 
                          ? "items special-layout" : "items";

    group.items.forEach(item => {
      if (item.quantity && item.quantity > 0) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <br>${item.name}
          <br><strong>Peças em estoque:</strong> ${item.quantity}
        `;
        itemsDiv.appendChild(itemDiv);
      }
    });

    groupDiv.appendChild(itemsDiv);
    inventoryDiv.appendChild(groupDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderInventory();
});
async function salvarGruposComoPDF() {
  const { jsPDF } = window.jspdf;
  const larguraA4 = 210;
  const alturaA4 = 297;
  const topo = 15;
  const rodape = 30;
  const fundoOriginal = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "#ffffff";

  const overlay = document.getElementById("loadingOverlay");
  const progressBar = document.getElementById("progressBar");
  overlay.style.display = "flex";
  progressBar.style.width = "0%";

  function atualizarProgresso(pct) {
    progressBar.style.width = `${pct}%`;
  }

  localStorage.removeItem("indicePaginas");

  function obterTituloLimpo(grupo, index) {
    const html = grupo.innerHTML;
    const codigo = html.match(/Produto:\s*(\d+)/i)?.[1]?.trim() || `Grupo ${index+1}`;
    const formato = html.match(/Formato:\s*(.*?)(<br>|$)/i)?.[1]?.trim() || "";
    const tecido = html.match(/-\s*(.*?)\s*(<br>|$)/i)?.[1]?.trim() || "";
    return [codigo, formato, tecido].filter(Boolean).join(" – ");
  }

  async function capturarViaIframe(pathHTML) {
    const [html, css] = await Promise.all([
      fetch(pathHTML).then(r => r.text()),
      fetch("principal.css").then(r => r.text())
    ]);
    const srcdoc = `<html><head><style>${css}</style></head><body>${html}</body></html>`;
    return new Promise(resolve => {
      const iframe = document.createElement("iframe");
      iframe.srcdoc = srcdoc;
      iframe.style.cssText = "position:absolute;left:-9999px;width:793px;height:1122px";
      document.body.appendChild(iframe);
      iframe.onload = async () => {
        await iframe.contentDocument.fonts?.ready;
        await new Promise(r => setTimeout(r, 300));
        const canvas = await html2canvas(iframe.contentDocument.body, {
          scale: 2, useCORS: true, backgroundColor: "#ffffff"
        });
        iframe.remove();
        resolve(canvas.toDataURL("image/jpeg", 0.98));
      };
    });
  }

  const pdf = new jsPDF("p", "mm", "a4");
  const grupos = [...document.querySelectorAll(".group")];
  const paginas = [];

  let passoAtual = 0;
  const totalPassos = grupos.length + 3;
  function avançar() { atualizarProgresso(Math.round(++passoAtual / totalPassos * 100)); }

  // CAPA
  const capa = await capturarViaIframe("src/capa.html");
  if (capa) pdf.addImage(capa, "JPEG", 0, 0, larguraA4, alturaA4);
  avançar();

  // GRUPOS
  for (let i = 0; i < grupos.length; i++) {
    const g = grupos[i];
    const titulo = obterTituloLimpo(g, i);
    g.style.paddingBottom = "60px";
    window.scrollTo({ top: g.offsetTop - 100 });
    await new Promise(r => setTimeout(r, 300));

    const canvas = await html2canvas(g, {
      scale: 2, useCORS: true, backgroundColor: "#ffffff"
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.98);
    const imgW = larguraA4;
    const imgH = (canvas.height * imgW) / canvas.width;
    const pageH = Math.max(imgH + topo + rodape, alturaA4);

    pdf.addPage([imgW, pageH]);
    pdf.addImage(imgData, "JPEG", 0, topo, imgW, imgH);

    const pagina = pdf.internal.getCurrentPageInfo().pageNumber;
    paginas.push({ name: titulo, pagina });

    pdf.setFont("helvetica", "italic").setFontSize(10).setTextColor(100)
       .text("Beneficiadora Americana de Tecidos Ltda", imgW / 2, pageH - rodape + 12, { align: "center" });
    pdf.setFont("helvetica", "normal").setFontSize(9).setTextColor(120)
       .text(`Página ${pagina}`, imgW - 20, pageH - 5);

    g.style.paddingBottom = "";
    avançar();
  }

  // SALVA NO LOCALSTORAGE para índice visual
  localStorage.setItem("indicePaginas", JSON.stringify(paginas));
  avançar();

  // ÍNDICE VISUAL – agora com dados corretos
  const indiceImg = await capturarViaIframe("src/indice.html");
  if (indiceImg) {
    pdf.insertPage(2); // insere nova página na posição 2
    pdf.setPage(2);
    pdf.addImage(indiceImg, "JPEG", 0, 0, larguraA4, alturaA4);
  }
  avançar();

  // FINALIZA
  pdf.save("estoque_por_grupo.pdf");
  document.body.style.backgroundColor = fundoOriginal;
  overlay.style.display = "none";
  console.log("✅ PDF gerado com índice visual na segunda página e produtos completos!");
}

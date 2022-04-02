

const  listaProductos = [
    {id: '1', title: 'Boligrafo', category: 'escritura', description: 'Boligrafo Bic trazo grueso azul', price: 80, pictureUrl:'https://i.ibb.co/KWyLvSv/bic-Grueso.jpg', stock: 20},
    {id: '2', title: 'Carpeta 3 Solapas', category: 'oficina', description: 'Carpeta 3 solapas', price: 150, pictureUrl:'https://i.ibb.co/ZMvzMMQ/carpeta3-Solapas.jpg', stock: 20},
    {id: '3', title: 'Adhesivo Sintético', category: 'pegamentos', description: 'Adhesivo Sintetico', price: 70, pictureUrl:'https://i.ibb.co/1JWzSsR/adhesivo-Pelikan.jpg', stock: 20},
    {id: '4', title: 'Boligrafo Bic', category: 'escritura', description: 'Boligrafo Bic Extra Bold', price: 90, pictureUrl:'https://i.ibb.co/s2mDRtX/bicBold.jpg', stock: 20},
    {id: '5', title: 'Boligrafo Bic', category: 'escritura', description: 'Boligrafo Bic trazo grueso negro', price: 80, pictureUrl:'https://i.ibb.co/RcRjWcj/bic-Grueso-Negro.jpg', stock: 20},
    {id: '6', title: 'Goma de borrar', category: 'borrar', description: 'Goma de borrar lapiz tinta Dos Banderas', price: 45, pictureUrl:'https://i.ibb.co/6bxZ3bb/Goma-Blanca-Gris-Dos-Banderas.jpg', stock: 20},
    {id: '7', title: 'Adhesivo en barra', category: 'pegamentos', description: 'Adhesivo en barra Voligoma', price: 220, pictureUrl:'https://i.ibb.co/pj841ZP/voligoma-Barra.jpg', stock: 20},
    {id: '8', title: 'Papel Creppe', category: 'papeleria', description: 'Papel Creppe colores surtidos', price: 60, pictureUrl:'https://i.ibb.co/d52Snt0/creppe.jpg', stock: 20},
    {id: '9', title: 'Goma de Borrar lapiz blanca', category: 'borrar', description: 'Goma de borrar lapiz Maped', price: 50, pictureUrl:'https://i.ibb.co/FJcKMJZ/goma-lapiz-maped.jpg', stock: 20},
    {id: '10', title: 'Carpeta cristal A4', category: 'oficina', description: 'Carpeta cristal tapa transp A4 base negra', price: 80, pictureUrl:'https://i.ibb.co/J7MBN8x/carpeta-cristal-A4.jpg', stock: 20},
    {id: '11', title: 'Porta-mina Pizzini', category: 'escritura', description: 'Portamina Pizzini 0.5 mm', price: 280, pictureUrl:'https://i.ibb.co/026pJTP/portamina-Pizzini.jpg', stock: 20},
    {id: '12', title: 'Plasticola con brillo', category: 'pegamentos', description: 'Plasticola con brillo marca Plasticola 30ml', price: 60, pictureUrl:'https://i.ibb.co/MMRxJJb/plasticola-Brillo.jpg', stock: 20},
]


//Mock que emula un retraso de 2 segundos para traer una lista de productos
export const getProducts = new Promise((res, rej)=>{
    let condition = true
    condition ? setTimeout(() => res(listaProductos), 2000) : rej("404 not found")})
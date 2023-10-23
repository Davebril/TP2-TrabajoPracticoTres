const libros = [
    { id: '1', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', anio: 1615},
    { id: '2', titulo: 'La Ilíada', autor: 'Homero', anio: -800},
    { id: '3', titulo: 'Hamlet', autor: 'William Shakespeare', anio: 1602},
    { id: '4', titulo: 'La divina comedia', autor: 'Dante Alighieri', anio: 1321},
    { id: '5', titulo: 'La guerra y la paz', autor: 'León Tolstoi', anio: 1869}
]

const findLibro = id => {
    return libros.find(libro => libro.id == id)    
}

const findLibros = () => {
    return libros
}

const saveLibro = libro => {
    libro.year = parseInt(libro.year)
    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)

    libros.push(libro)

    return libro    
}

const updateLibro = (libro,id) => {    
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro    
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    const libro = libros[index]
    libros.splice(index, 1)      
    return libro    
}

export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}
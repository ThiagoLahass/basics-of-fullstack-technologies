interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Pet extends Animal {
    dono: string;
}

let Leao: Animal = {
    nome: 'Lion',
    tipo: "aquático",
    domestico: false,
}

let cachorro: Pet = {
    nome: 'Rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'Victor',
};

console.log(cachorro);
